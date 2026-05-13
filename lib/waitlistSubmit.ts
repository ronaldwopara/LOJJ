export async function submitWaitlistForm(form: HTMLFormElement): Promise<string> {
  const fd = new FormData(form);
  const payload = {
    fullName: String(fd.get("fullName") ?? "").trim(),
    email: String(fd.get("email") ?? "").trim(),
    hotel: String(fd.get("hotel") ?? "").trim(),
    role: String(fd.get("role") ?? "").trim(),
    location: String(fd.get("location") ?? "").trim(),
    source: form.id,
  };

  const res = await fetch("/api/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const json = (await res.json().catch(() => null)) as
    | { ok: true; message?: string }
    | { ok: false; error?: string }
    | null;

  if (!res.ok || !json || !json.ok) {
    const msg = json && "error" in json && json.error ? json.error : "Something went wrong.";
    throw new Error(msg);
  }
  return json.message ?? "Thanks — you're on the waitlist.";
}
