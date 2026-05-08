import { NextResponse } from "next/server";

type WaitlistEntry = {
  fullName: string;
  email: string;
  hotel: string;
  role: string;
  location?: string;
  source?: string;
  createdAt: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") ?? "";
    let body: Partial<WaitlistEntry> | null = null;

    if (contentType.includes("application/json")) {
      body = (await req.json().catch(() => null)) as Partial<WaitlistEntry> | null;
    } else {
      const fd = await req.formData().catch(() => null);
      if (fd) {
        body = {
          fullName: String(fd.get("fullName") ?? ""),
          email: String(fd.get("email") ?? ""),
          hotel: String(fd.get("hotel") ?? ""),
          role: String(fd.get("role") ?? ""),
          location: String(fd.get("location") ?? ""),
          source: String(fd.get("source") ?? ""),
        };
      }
    }

    if (!body) return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });

    const fullName = String(body.fullName ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const hotel = String(body.hotel ?? "").trim();
    const role = String(body.role ?? "").trim();
    const location = String(body.location ?? "").trim();
    const source = String(body.source ?? "").trim();

    if (!fullName) return NextResponse.json({ ok: false, error: "Full name is required." }, { status: 400 });
    if (!email || !isValidEmail(email)) return NextResponse.json({ ok: false, error: "A valid email is required." }, { status: 400 });
    if (!hotel) return NextResponse.json({ ok: false, error: "Hotel is required." }, { status: 400 });
    if (!role) return NextResponse.json({ ok: false, error: "Role is required." }, { status: 400 });

    const entry: WaitlistEntry = {
      fullName,
      email,
      hotel,
      role,
      location: location || undefined,
      source: source || undefined,
      createdAt: new Date().toISOString(),
    };

    const sheetsUrl = process.env.WAITLIST_SHEETS_WEBAPP_URL;
    const sheetsSecret = process.env.WAITLIST_SHEETS_SECRET;
    if (!sheetsUrl || !sheetsSecret) {
      return NextResponse.json(
        { ok: false, error: "Waitlist is not configured (missing Sheets env vars)." },
        { status: 500 },
      );
    }

    const url = new URL(sheetsUrl);
    url.searchParams.set("secret", sheetsSecret);

    const forwardRes = await fetch(url.toString(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(entry),
    });

    if (!forwardRes.ok) {
      return NextResponse.json({ ok: false, error: "Could not save your entry. Please try again." }, { status: 502 });
    }

    return NextResponse.json(
      { ok: true, message: "Thanks — you're on the waitlist." },
      { status: 200 },
    );
  } catch {
    return NextResponse.json({ ok: false, error: "Server error." }, { status: 500 });
  }
}

