"use client";

import { useEffect, useId } from "react";

import { IconX } from "@/components/solutions/demo-icons";

type PhoneProfileSheetProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  name: string;
  initials?: string;
  meta: string[];
};

function deriveInitials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
  }
  const w = parts[0] ?? "?";
  return w.slice(0, 2).toUpperCase();
}

export default function PhoneProfileSheet({
  open,
  onClose,
  title = "Contact",
  name,
  initials,
  meta,
}: PhoneProfileSheetProps) {
  const profileTitleId = useId();
  const profileSheetId = useId();
  const avatar = initials ?? deriveInitials(name);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <>
      <button type="button" className="mage-phone-profile-scrim" aria-label="Close profile" onClick={onClose} />
      <aside
        id={profileSheetId}
        className="mage-phone-profile-sheet mage-phone-profile-sheet--drawer"
        role="dialog"
        aria-modal="true"
        aria-labelledby={profileTitleId}
      >
        <div className="mage-phone-profile-sheet-handle" aria-hidden />
        <button type="button" className="mage-phone-profile-close" aria-label="Close" onClick={onClose}>
          <IconX size={18} />
        </button>

        <div className="mage-phone-profile-hero">
          <div className="mage-phone-profile-avatar mage-phone-profile-avatar--brand" aria-hidden>
            {avatar}
          </div>
          <p className="mage-phone-profile-name">{name}</p>
          <p id={profileTitleId} className="mage-phone-profile-subtitle">
            {title}
          </p>
        </div>

        <ul className="mage-phone-profile-meta">
          {meta.map((line) => (
            <li key={line}>
              <span className="mage-phone-profile-meta-dot" aria-hidden />
              {line}
            </li>
          ))}
        </ul>

        <button type="button" className="mage-phone-profile-done" onClick={onClose}>
          Done
        </button>
      </aside>
    </>
  );
}
