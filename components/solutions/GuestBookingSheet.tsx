"use client";

import { useEffect, useId } from "react";
import type { CSSProperties } from "react";

import { IconX } from "@/components/solutions/demo-icons";
import type { DemoGuestProfile } from "@/lib/demo-guests";

type BookingRow = {
  label: string;
  value: string;
};

type GuestBookingSheetProps = {
  open: boolean;
  onClose: () => void;
  guest: DemoGuestProfile;
};

const BOOKING_ROWS: BookingRow[] = [
  { label: "Confirmation", value: "RSV-88412" },
  { label: "Hotel", value: "Riverside Hotel" },
  { label: "Check-in", value: "Fri, May 16 · 3:00 PM" },
  { label: "Check-out", value: "Sun, May 18 · 11:00 AM" },
  { label: "Guests", value: "1 adult" },
  { label: "Rate", value: "Flexible · breakfast included" },
];

export default function GuestBookingSheet({ open, onClose, guest }: GuestBookingSheetProps) {
  const titleId = useId();
  const sheetId = useId();

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
      <button type="button" className="mage-phone-profile-scrim" aria-label="Close booking" onClick={onClose} />
      <aside
        id={sheetId}
        className="mage-phone-profile-sheet mage-phone-profile-sheet--drawer mage-phone-booking-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <div className="mage-phone-profile-sheet-handle" aria-hidden />
        <button type="button" className="mage-phone-profile-close" aria-label="Close" onClick={onClose}>
          <IconX size={18} />
        </button>

        <div className="mage-phone-profile-hero">
          <div
            className="mage-phone-profile-avatar mage-phone-profile-avatar--guest"
            style={{ "--demo-avatar-orb": guest.orbColor } as CSSProperties}
            aria-hidden
          >
            {guest.initials}
          </div>
          <p className="mage-phone-profile-name">{guest.name}</p>
          <p id={titleId} className="mage-phone-profile-subtitle">
            Your booking
          </p>
        </div>

        <dl className="mage-phone-booking-rows">
          <div className="mage-phone-booking-row">
            <dt>Room</dt>
            <dd>{guest.room}</dd>
          </div>
          {BOOKING_ROWS.map((row) => (
            <div key={row.label} className="mage-phone-booking-row">
              <dt>{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>

        <button type="button" className="mage-phone-profile-done" onClick={onClose}>
          Done
        </button>
      </aside>
    </>
  );
}
