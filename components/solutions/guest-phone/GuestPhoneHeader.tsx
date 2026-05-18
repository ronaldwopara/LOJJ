"use client";

import { IconChevronLeft, IconChevronRight, IconUser } from "@/components/solutions/demo-icons";

type GuestPhoneHeaderProps = {
  onOpenLojj: () => void;
  onOpenGuestBooking: () => void;
};

/** iMessage-style top bar — LOJJ centered; center opens LOJJ, right opens guest booking. */
export default function GuestPhoneHeader({ onOpenLojj, onOpenGuestBooking }: GuestPhoneHeaderProps) {
  return (
    <header className="lojj-phone-topbar lojj-phone-topbar--imessage">
      <button type="button" className="lojj-phone-topbar-back" aria-label="Back">
        <IconChevronLeft size={22} />
      </button>

      <button
        type="button"
        className="lojj-phone-topbar-contact"
        aria-label="LOJJ contact info"
        onClick={onOpenLojj}
      >
        <span className="lojj-phone-topbar-logo-wrap">
          {/* eslint-disable-next-line @next/next/no-img-element -- brand mark in mock UI */}
          <img src="/lojj-review-hub.png" alt="" className="lojj-phone-topbar-logo" width={36} height={36} />
        </span>
        <span className="lojj-phone-topbar-contact-label">
          <span className="lojj-phone-topbar-contact-name">LOJJ</span>
          <IconChevronRight size={14} className="lojj-phone-topbar-contact-chevron" />
        </span>
      </button>

      <button
        type="button"
        className="lojj-phone-topbar-profile"
        aria-label="Your booking"
        onClick={onOpenGuestBooking}
      >
        <IconUser size={22} />
      </button>
    </header>
  );
}
