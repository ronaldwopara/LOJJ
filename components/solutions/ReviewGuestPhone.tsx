"use client";

import { useEffect, useRef, useState } from "react";

import type { DemoChatMessage } from "@/components/solutions/DemoSimulationContext";
import { useDemoSimulation } from "@/components/solutions/DemoSimulationContext";

function MageGlyph() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden className="mage-phone-logo">
      <rect x="3" y="3" width="18" height="18" rx="4" fill="currentColor" />
      <rect x="7" y="7" width="4" height="4" rx="0.5" fill="#fff" />
      <rect x="13" y="7" width="4" height="4" rx="0.5" fill="#fff" />
      <rect x="7" y="13" width="4" height="4" rx="0.5" fill="#fff" />
      <rect x="13" y="13" width="4" height="4" rx="0.5" fill="#fff" />
    </svg>
  );
}

const PREFILL_BODY =
  "Wonderful stay — the team was friendly, the room was spotless, and check-in was smooth. Five stars all around!";

export default function ReviewGuestPhone() {
  const {
    reviewGuestScreen,
    reviewGuestMessages,
    reviewGuestOpenCompose,
    reviewGuestBackToInbox,
    reviewGuestSubmitReview,
    reviewGuestReviewSubmitted,
  } = useDemoSimulation();

  const scrollRef = useRef<HTMLDivElement>(null);
  const [draft] = useState(PREFILL_BODY);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }, [reviewGuestMessages, reviewGuestScreen]);

  if (reviewGuestScreen === "idle") {
    return (
      <div className="mage-phone-chat mage-phone-chat--reviews mage-phone-chat--guest-review">
        <header className="mage-phone-header">
          <div className="mage-phone-header-left">
            <MageGlyph />
            <div className="mage-phone-title-stack">
              <span className="mage-phone-title">Mage</span>
              <span className="mage-phone-badge">Guest view</span>
            </div>
          </div>
        </header>
        <div className="mage-phone-thread">
          <p className="mage-phone-empty">
            This phone shows what a guest sees after chat. In the Guest Expert demo, answer &quot;No&quot; to more
            help — a review request appears here and on the Review Specialist board.
          </p>
        </div>
        <div className="mage-phone-composer" aria-hidden>
          <span className="mage-phone-composer-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19A4 4 0 1 1 18 12l-8.69 8.69a2 2 0 0 1-2.83-2.83l8.49-8.49" />
            </svg>
          </span>
          <div className="mage-phone-input-faux">Message…</div>
          <span className="mage-phone-composer-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3z" />
              <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" />
            </svg>
          </span>
        </div>
      </div>
    );
  }

  if (reviewGuestScreen === "compose") {
    return (
      <div className="mage-phone-chat mage-phone-chat--reviews mage-phone-chat--guest-review">
        <header className="mage-phone-header mage-phone-header--sub">
          <button
            type="button"
            className="mage-phone-back"
            onClick={reviewGuestBackToInbox}
            aria-label="Back to messages"
          >
            ←
          </button>
          <div className="mage-phone-title-stack mage-phone-title-stack--center">
            <span className="mage-phone-title">Post review</span>
            <span className="mage-phone-badge">Demo · Riverside</span>
          </div>
          <span className="mage-phone-header-spacer" aria-hidden />
        </header>
        <div className="review-compose-body">
          <p className="review-compose-kicker">Google Reviews (simulated)</p>
          <div className="review-compose-stars" aria-label="5 out of 5 stars">
            {"★★★★★".split("").map((s, i) => (
              <span key={i} className="review-star-on">
                {s}
              </span>
            ))}
          </div>
          <label className="review-compose-label" htmlFor="review-compose-ta">
            Your public review
          </label>
          <textarea
            id="review-compose-ta"
            className="review-compose-ta"
            rows={6}
            defaultValue={draft}
            readOnly={reviewGuestReviewSubmitted}
          />
          {reviewGuestReviewSubmitted ? (
            <p className="review-compose-done">Thanks — your review was submitted (demo).</p>
          ) : (
            <button type="button" className="review-compose-submit" onClick={reviewGuestSubmitReview}>
              Submit review
            </button>
          )}
        </div>
      </div>
    );
  }

  /* inbox */
  return (
    <div className="mage-phone-chat mage-phone-chat--reviews mage-phone-chat--guest-review">
      <header className="mage-phone-header">
        <div className="mage-phone-header-left">
          <MageGlyph />
          <div className="mage-phone-title-stack">
            <span className="mage-phone-title">Mage</span>
            <span className="mage-phone-badge">Guest view</span>
          </div>
        </div>
      </header>
      <div className="mage-phone-thread" ref={scrollRef}>
        {reviewGuestMessages.map((m: DemoChatMessage) => (
          <div key={m.id} className={`mage-phone-row mage-phone-row--${m.role}`}>
            <div className={`mage-phone-bubble mage-phone-bubble--${m.role}`}>
              <p className="mage-phone-bubble-text">{m.body}</p>
              <span className="mage-phone-time">{m.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="mage-phone-chips mage-phone-chips--single">
        {reviewGuestReviewSubmitted ? (
          <p className="mage-phone-posted-banner">Review submitted (demo)</p>
        ) : (
          <button type="button" className="mage-phone-chip mage-phone-chip-primary" onClick={reviewGuestOpenCompose}>
            Post review
          </button>
        )}
      </div>
      <div className="mage-phone-composer" aria-hidden>
        <span className="mage-phone-composer-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19A4 4 0 1 1 18 12l-8.69 8.69a2 2 0 0 1-2.83-2.83l8.49-8.49" />
          </svg>
        </span>
        <div className="mage-phone-input-faux">Message…</div>
        <span className="mage-phone-composer-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3z" />
            <path d="M19 10v1a7 7 0 0 1-14 0v-1M12 18v4M8 22h8" />
          </svg>
        </span>
      </div>
    </div>
  );
}
