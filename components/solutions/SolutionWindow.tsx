"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import PhoneMockup from "@/components/PhoneMockup";
import { DEMO_OPS_BASE_QUEUE, useDemoSimulation } from "@/components/solutions/DemoSimulationContext";
import MagePhoneChat from "@/components/solutions/MagePhoneChat";
import ReviewGuestPhone from "@/components/solutions/ReviewGuestPhone";
import type { DemoQueueItem, DemoTopic, SolutionDefinition } from "@/lib/solutions";

type SolutionWindowProps = {
  solution: SolutionDefinition;
};

const priorityClass: Record<DemoQueueItem["priority"], string> = {
  high: "demo-priority-high",
  medium: "demo-priority-medium",
  low: "demo-priority-low",
};

type CtxMenuState = { x: number; y: number } | null;

function DemoWindowChrome({
  anchor,
  ariaLabel,
  children,
  onCopyLink,
  onResetScenario,
}: {
  anchor: string;
  ariaLabel: string;
  children: React.ReactNode;
  onCopyLink: () => void;
  onResetScenario: () => void;
}) {
  const [menu, setMenu] = useState<CtxMenuState>(null);
  const shellRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setMenu(null), []);

  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    const onPointer = (e: MouseEvent | PointerEvent) => {
      const t = e.target as Node | null;
      if (shellRef.current?.contains(t)) return;
      closeMenu();
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("pointerdown", onPointer);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("pointerdown", onPointer);
    };
  }, [menu, closeMenu]);

  const onContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenu({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      ref={shellRef}
      className="solution-window solution-window--ctx"
      role="region"
      aria-label={ariaLabel}
      onContextMenu={onContextMenu}
    >
      {children}
      {menu ? (
        <div
          className="demo-ctx-menu"
          style={{ left: menu.x, top: menu.y }}
          role="menu"
          onPointerDown={(e) => e.stopPropagation()}
        >
          <button
            type="button"
            className="demo-ctx-item"
            role="menuitem"
            onClick={() => {
              onCopyLink();
              closeMenu();
            }}
          >
            Copy link to this section
          </button>
          <button
            type="button"
            className="demo-ctx-item"
            role="menuitem"
            onClick={() => {
              onResetScenario();
              closeMenu();
            }}
          >
            Reset demo scenario
          </button>
          <a className="demo-ctx-item demo-ctx-link" href={`#${anchor}`} role="menuitem" onClick={closeMenu}>
            Jump to heading
          </a>
        </div>
      ) : null}
    </div>
  );
}

const GUEST_DEMO_JUMP_LINKS = [
  { href: "#ops-lead", label: "View task board (Ops Lead)" },
  { href: "#review-specialist", label: "View Review Specialist" },
  { href: "#ai-manager", label: "View AI Manager" },
] as const;

function GuestDesktopPanel() {
  const {
    guestMessages,
    guestSuggestions,
    guestPickSuggestion,
  } = useDemoSimulation();

  return (
    <div className="demo-guest-desktop">
      <p className="demo-guest-desktop-lead">
        This pane mirrors the phone transcript. Use either surface — both advance the same fixed storyline.
      </p>
      <div className="demo-guest-desktop-thread" aria-live="polite">
        {guestMessages.length === 0 ? (
          <p className="demo-guest-desktop-empty">Waiting for the first message from the phone…</p>
        ) : (
          guestMessages.map((m) => (
            <div key={m.id} className={`demo-guest-line demo-guest-line--${m.role}`}>
              <span className="demo-guest-role">{m.role === "user" ? "Guest" : "Mage"}</span>
              <p>{m.body}</p>
              <span className="demo-guest-time">{m.time}</span>
            </div>
          ))
        )}
      </div>
      <div className="demo-guest-jump" role="navigation" aria-label="Related solution demos">
        <span className="demo-guest-jump-label">Related on this page</span>
        <div className="demo-guest-jump-row">
          {GUEST_DEMO_JUMP_LINKS.map((item) => (
            <a key={item.href} href={item.href} className="demo-chip demo-link-chip">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      {guestSuggestions.length > 0 ? (
        <div className="demo-action-list" role="group" aria-label="Guest prompts (desktop)">
          {guestSuggestions.map((s) => (
            <button key={s.id} type="button" className="demo-chip" onClick={() => guestPickSuggestion(s.id)}>
              {s.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}

function OpsDemoSynced() {
  const { opsExtraQueue } = useDemoSimulation();
  const merged = useMemo(
    () => [...opsExtraQueue, ...DEMO_OPS_BASE_QUEUE],
    [opsExtraQueue],
  );
  const [activeId, setActiveId] = useState(merged[0]?.id ?? "");
  const active = useMemo(
    () => merged.find((item) => item.id === activeId) ?? merged[0],
    [merged, activeId],
  );

  useEffect(() => {
    if (merged.length && !merged.some((r) => r.id === activeId)) {
      setActiveId(merged[0].id);
    }
  }, [merged, activeId]);

  return (
    <>
      <p className="demo-ops-preview-note">
        <strong>Ops preview:</strong> when Guest Expert creates a follow-up in the scripted chat, it lands
        here in real time — same payload your team would see in Ops Lead.
      </p>
      <div className="demo-queue" role="listbox" aria-label="Ops task queue">
        {merged.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`demo-row ${item.id === active?.id ? "demo-row-active" : ""} ${
              item.id === "demo-late-checkout" ? "demo-row-synced" : ""
            }`}
            onClick={() => setActiveId(item.id)}
            role="option"
            aria-selected={item.id === active?.id}
          >
            <div className="demo-row-top">
              <span>{item.title}</span>
              <span className={`demo-priority ${priorityClass[item.priority]}`}>{item.priority}</span>
            </div>
            <div className="demo-row-bottom">
              <span>{item.location}</span>
              <span>ETA {item.eta}</span>
            </div>
          </button>
        ))}
      </div>
      {active ? (
        <div className="demo-selection" aria-live="polite">
          <strong>Selected:</strong> {active.title}
          <br />
          Routing to {active.location} with {active.priority} priority. Team ETA is {active.eta}.
        </div>
      ) : null}
    </>
  );
}

function ReviewsDemoSynced() {
  const {
    reviewGuests,
    reviewActiveGuestId,
    reviewInviteSentForId,
    reviewGuestReviewSubmitted,
    reviewGuestScreen,
    reviewSetActiveGuest,
    resetReviewDemo,
  } = useDemoSimulation();

  const active = useMemo(
    () => reviewGuests.find((g) => g.id === reviewActiveGuestId) ?? reviewGuests[0],
    [reviewGuests, reviewActiveGuestId],
  );

  return (
    <>
      <p className="demo-reviews-sync-note">
        <strong>Review Specialist preview:</strong> when a guest declines more help in Guest Expert, a review
        prompt is mirrored here. The phone in this section shows the <strong>guest</strong> inbox and Post review
        flow (demo).
      </p>
      <div className="demo-queue" role="listbox" aria-label="Review candidates">
        {reviewGuests.map((guest) => (
          <button
            key={guest.id}
            type="button"
            className={`demo-row ${guest.id === active?.id ? "demo-row-active" : ""} ${
              reviewInviteSentForId === guest.id ? "demo-row-synced" : ""
            }`}
            onClick={() => reviewSetActiveGuest(guest.id)}
            role="option"
            aria-selected={guest.id === active?.id}
          >
            <div className="demo-row-top">
              <span>{guest.name}</span>
              <span>{guest.score}%</span>
            </div>
            <div className="demo-row-bottom">
              <span>{guest.signal}</span>
              <span>
                {reviewGuestReviewSubmitted && guest.id === "g1"
                  ? "Posted (demo)"
                  : reviewInviteSentForId === guest.id
                    ? "Prompt live"
                    : "Eligible now"}
              </span>
            </div>
          </button>
        ))}
      </div>
      {active ? (
        <div className="demo-selection" aria-live="polite">
          {reviewInviteSentForId === active.id ? (
            reviewGuestReviewSubmitted ? (
              <>
                <strong>{active.name}</strong> completed the guest Post review flow — 5★ pre-filled draft was
                submitted (demo). Staff board updated.
              </>
            ) : reviewGuestScreen === "compose" ? (
              <>
                Guest is on the <strong>Post review</strong> screen on the phone — pre-filled 5-star draft ready
                (demo).
              </>
            ) : (
              <>
                Review prompt delivered to <strong>{active.name}</strong>&apos;s guest phone. Open Post review on
                the phone to continue the scripted flow.
              </>
            )
          ) : (
            <>
              <strong>{active.name}</strong> appears when Guest Expert routes a review moment. Run the guest chat
              and tap <strong>No, thanks</strong> after a topic to populate this row.
            </>
          )}
        </div>
      ) : null}
      <div className="demo-action-list" role="group" aria-label="Review demo">
        <button type="button" className="demo-chip" onClick={() => resetReviewDemo()}>
          Reset review demo
        </button>
      </div>
    </>
  );
}

function ManagerDemo({ topics = [] }: { topics?: DemoTopic[] }) {
  const [activeId, setActiveId] = useState(topics[0]?.id ?? "");
  const active = useMemo(() => topics.find((item) => item.id === activeId) ?? topics[0], [topics, activeId]);

  return (
    <>
      <div className="demo-action-list" role="group" aria-label="AI manager topics">
        {topics.map((topic) => (
          <button key={topic.id} type="button" className="demo-chip" onClick={() => setActiveId(topic.id)}>
            {topic.title}
          </button>
        ))}
      </div>
      {active ? (
        <div className="demo-response-box" aria-live="polite">
          {active.answer}
        </div>
      ) : null}
    </>
  );
}

export default function SolutionWindow({ solution }: SolutionWindowProps) {
  const demo = useDemoSimulation();

  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#${solution.anchor}`;
    void navigator.clipboard.writeText(url).catch(() => null);
  };

  const resetScenario = () => {
    if (solution.id === "guest") demo.resetGuestDemo();
    else if (solution.id === "ops") demo.resetOpsExtras();
    else if (solution.id === "reviews") demo.resetReviewDemo();
    else if (solution.id === "manager") {
      /* local state lives inside ManagerDemo — soft reset via reload section not ideal; no-op */
    }
  };

  return (
    <article id={solution.anchor} className="solution-panel glass-panel-clear">
      <div className="solution-grid">
        <div className="solution-copy">
          <div className="feature-kicker">{solution.kicker}</div>
          <h3 className="landing-h3">{solution.heading}</h3>
          <p className="landing-p">{solution.lede}</p>
          <ul className="solution-bullets">
            {solution.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <p className="solution-note">{solution.panelNote}</p>
          {solution.id === "guest" ? (
            <PhoneMockup alt="Mage guest chat (interactive demo)">
              <MagePhoneChat
                variant="guest"
                title="Mage"
                messages={demo.guestMessages}
                suggestions={demo.guestSuggestions}
                onPickSuggestion={demo.guestPickSuggestion}
              />
            </PhoneMockup>
          ) : null}
          {solution.id === "reviews" ? (
            <PhoneMockup alt="Guest review request (interactive demo)">
              <ReviewGuestPhone />
            </PhoneMockup>
          ) : null}
          {solution.id === "manager" && solution.phoneImage ? (
            <PhoneMockup image={solution.phoneImage} alt={`${solution.heading} mobile interface`} />
          ) : null}
        </div>

        <DemoWindowChrome
          anchor={solution.anchor}
          ariaLabel={`${solution.heading} interactive demo`}
          onCopyLink={copyLink}
          onResetScenario={resetScenario}
        >
          <div className="solution-window-bar">
            <span className="window-dots" aria-hidden>
              <span className="window-dot" />
              <span className="window-dot" />
              <span className="window-dot" />
            </span>
            <span className="window-title">{solution.demo.title}</span>
            <span className="window-live-pill">Interactive</span>
          </div>
          <div className="solution-window-body">
            <p className="demo-subtitle">{solution.demo.subtitle}</p>
            {solution.id === "guest" ? <GuestDesktopPanel /> : null}
            {solution.id === "ops" ? <OpsDemoSynced /> : null}
            {solution.id === "reviews" ? <ReviewsDemoSynced /> : null}
            {solution.id === "manager" ? <ManagerDemo topics={solution.demo.topics} /> : null}
          </div>
        </DemoWindowChrome>
      </div>
    </article>
  );
}
