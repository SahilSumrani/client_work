import { NextResponse } from "next/server";

// Contact form endpoint.
// NOTE: No transactional email backend is wired up yet (client opted out).
// This route validates the submission and logs it server-side. To actually
// deliver mail to dyusolar@gmail.com, add Resend or Nodemailer here and set
// the relevant env vars (see README / handoff notes).
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body as Record<string, string>;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    // Basic email shape check.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "A valid email address is required." },
        { status: 400 }
      );
    }

    // TODO for client: integrate Resend / Nodemailer to send to dyusolar@gmail.com.
    console.log("[contact] submission received:", { name, email, phone, subject, message });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }
}
