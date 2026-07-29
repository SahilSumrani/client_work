import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Contact form API endpoint for DYU Solar.
// TODO(client-confirm): Transactional email backend (e.g. Resend or Nodemailer) needs to be configured
// once SMTP/API credentials for dyusolar@gmail.com are provided.

const MAX_BODY_BYTES = 8_192;
const MAX_FIELD = {
  name: 120,
  company: 160,
  phone: 32,
  email: 160,
  enquiryType: 80,
  propertyType: 80,
  areaOrBill: 120,
  message: 2_000,
} as const;

const ALLOWED_ENQUIRY = new Set([
  "Site Feasibility Audit",
  "Rooftop Solar",
  "Utility-Scale",
  "Tender Enquiry",
  "General Question",
]);

const ALLOWED_PROPERTY = new Set([
  "Industrial",
  "Commercial",
  "Institutional",
  "Government",
  "Residential",
]);

/** Best-effort in-process rate limit (per instance). Use edge/WAF or Upstash in production. */
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 8;
const hits = new Map<string, { count: number; resetAt: number }>();

function clientIp(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const row = hits.get(ip);
  if (!row || now > row.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  row.count += 1;
  return row.count > RATE_MAX;
}

function asTrimmedString(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed || trimmed.length > max) return null;
  // Strip control chars that break logs / future email bodies
  return trimmed.replace(/[\u0000-\u001F\u007F]/g, "");
}

export async function POST(request: Request) {
  try {
    const ip = clientIp(request);
    if (rateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in a minute." },
        { status: 429 }
      );
    }

    const contentType = request.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { error: "Unsupported content type." },
        { status: 415 }
      );
    }

    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return NextResponse.json({ error: "Payload too large." }, { status: 413 });
    }

    let body: Record<string, unknown>;
    try {
      body = JSON.parse(raw) as Record<string, unknown>;
    } catch {
      return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
    }

    // Honeypot — bots that fill hidden fields are rejected silently as "ok"
    if (typeof body.website === "string" && body.website.trim()) {
      return NextResponse.json({
        ok: true,
        message:
          "Thank you! Your enquiry has been received. Our engineering team will reach out shortly.",
      });
    }

    const name = asTrimmedString(body.name, MAX_FIELD.name);
    const company = asTrimmedString(body.company ?? "", MAX_FIELD.company);
    const phone = asTrimmedString(body.phone, MAX_FIELD.phone);
    const email = asTrimmedString(body.email, MAX_FIELD.email);
    const enquiryType =
      asTrimmedString(body.enquiryType ?? "General Question", MAX_FIELD.enquiryType) ||
      "General Question";
    const propertyType =
      asTrimmedString(body.propertyType ?? "", MAX_FIELD.propertyType) || "N/A";
    const areaOrBill =
      asTrimmedString(body.areaOrBill ?? "", MAX_FIELD.areaOrBill) || "N/A";
    const message =
      asTrimmedString(body.message ?? "", MAX_FIELD.message) ||
      "No additional message";
    const consent = body.consent === true;

    if (!name) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!phone || !/^[+\d][\d\s\-()]{6,30}$/.test(phone)) {
      return NextResponse.json(
        { error: "Please enter a valid phone number." },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.includes("\n")) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    if (!ALLOWED_ENQUIRY.has(enquiryType)) {
      return NextResponse.json(
        { error: "Invalid enquiry type." },
        { status: 400 }
      );
    }

    if (propertyType !== "N/A" && !ALLOWED_PROPERTY.has(propertyType)) {
      return NextResponse.json(
        { error: "Invalid property type." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { error: "Consent is required to allow DYU Solar to contact you." },
        { status: 400 }
      );
    }

    // TODO(client-confirm): Connect Resend / Nodemailer here to send notification email to dyusolar@gmail.com
    // Escape / sanitize before embedding into HTML email templates when wired.
    console.log("[DYU Solar Contact Lead]:", {
      name,
      company: company || "N/A",
      phone,
      email,
      enquiryType,
      propertyType,
      areaOrBill,
      message,
      consent,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      ok: true,
      message:
        "Thank you! Your enquiry has been received. Our engineering team will reach out shortly.",
    });
  } catch (error) {
    console.error("[contact-api-error]", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while submitting your enquiry." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
