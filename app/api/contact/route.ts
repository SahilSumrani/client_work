import { NextResponse } from "next/server";

export const runtime = "nodejs";

/** Contact form temporarily removed from the site. */
export async function POST() {
  return NextResponse.json(
    {
      error:
        "Online form is temporarily unavailable. Please call +91-9899806844, WhatsApp, or email dyusolar@gmail.com.",
    },
    { status: 410 }
  );
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed." }, { status: 405 });
}
