import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

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
    const body = (await req.json().catch(() => null)) as Partial<WaitlistEntry> | null;
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

    const dataDir = path.join(process.cwd(), "data");
    const filePath = path.join(dataDir, "waitlist.json");
    await fs.mkdir(dataDir, { recursive: true });

    let current: WaitlistEntry[] = [];
    try {
      const raw = await fs.readFile(filePath, "utf8");
      const parsed = JSON.parse(raw) as unknown;
      if (Array.isArray(parsed)) current = parsed as WaitlistEntry[];
    } catch {
      // ignore missing/invalid file and recreate
    }

    const already = current.some((e) => String((e as WaitlistEntry).email ?? "").toLowerCase() === email);
    if (!already) {
      current.unshift(entry);
      await fs.writeFile(filePath, JSON.stringify(current, null, 2) + "\n", "utf8");
    }

    return NextResponse.json(
      { ok: true, message: already ? "You’re already on the waitlist." : "Thanks — you're on the waitlist." },
      { status: 200 },
    );
  } catch {
    return NextResponse.json({ ok: false, error: "Server error." }, { status: 500 });
  }
}

