"use client";

import { useMemo, useState } from "react";
import PhoneMockup from "@/components/PhoneMockup";
import type { DemoAction, DemoQueueItem, DemoReviewGuest, DemoTopic, SolutionDefinition } from "@/lib/solutions";

type SolutionWindowProps = {
  solution: SolutionDefinition;
};

const priorityClass: Record<DemoQueueItem["priority"], string> = {
  high: "demo-priority-high",
  medium: "demo-priority-medium",
  low: "demo-priority-low",
};

function GuestDemo({ actions = [] }: { actions?: DemoAction[] }) {
  const [activeId, setActiveId] = useState(actions[0]?.id ?? "");
  const active = useMemo(() => actions.find((item) => item.id === activeId) ?? actions[0], [actions, activeId]);

  return (
    <>
      <div className="demo-action-list" role="group" aria-label="Guest prompts">
        {actions.map((action) => (
          <button
            key={action.id}
            type="button"
            className="demo-chip"
            onClick={() => setActiveId(action.id)}
          >
            {action.label}
          </button>
        ))}
      </div>
      {active ? (
        <div className="demo-response-box" aria-live="polite">
          {active.response}
          {active.meta ? <div className="demo-response-meta">{active.meta}</div> : null}
        </div>
      ) : null}
    </>
  );
}

function OpsDemo({ queue = [] }: { queue?: DemoQueueItem[] }) {
  const [activeId, setActiveId] = useState(queue[0]?.id ?? "");
  const active = useMemo(() => queue.find((item) => item.id === activeId) ?? queue[0], [queue, activeId]);

  return (
    <>
      <div className="demo-queue" role="listbox" aria-label="Ops task queue">
        {queue.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`demo-row ${item.id === active?.id ? "demo-row-active" : ""}`}
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

function ReviewsDemo({ guests = [] }: { guests?: DemoReviewGuest[] }) {
  const [activeId, setActiveId] = useState(guests[0]?.id ?? "");
  const [sent, setSent] = useState(false);
  const active = useMemo(() => guests.find((item) => item.id === activeId) ?? guests[0], [guests, activeId]);

  return (
    <>
      <div className="demo-queue" role="listbox" aria-label="Review candidates">
        {guests.map((guest) => (
          <button
            key={guest.id}
            type="button"
            className={`demo-row ${guest.id === active?.id ? "demo-row-active" : ""}`}
            onClick={() => {
              setActiveId(guest.id);
              setSent(false);
            }}
            role="option"
            aria-selected={guest.id === active?.id}
          >
            <div className="demo-row-top">
              <span>{guest.name}</span>
              <span>{guest.score}%</span>
            </div>
            <div className="demo-row-bottom">
              <span>{guest.signal}</span>
              <span>Eligible now</span>
            </div>
          </button>
        ))}
      </div>
      {active ? (
        <div className="demo-selection" aria-live="polite">
          {!sent ? (
            <>
              <strong>{active.name}</strong> is a strong candidate for outreach after a positive Guest
              Expert interaction.
            </>
          ) : (
            <>
              Review request sent to <strong>{active.name}</strong>. Link includes Google and Tripadvisor
              options.
            </>
          )}
        </div>
      ) : null}
      <button type="button" className="demo-chip" onClick={() => setSent(true)}>
        Send review request
      </button>
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
          <button
            key={topic.id}
            type="button"
            className="demo-chip"
            onClick={() => setActiveId(topic.id)}
          >
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
          {solution.phoneImage ? (
            <PhoneMockup image={solution.phoneImage} alt={`${solution.heading} mobile interface`} />
          ) : null}
        </div>

        <div className="solution-window" role="region" aria-label={`${solution.heading} interactive demo`}>
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
            {solution.id === "guest" ? <GuestDemo actions={solution.demo.actions} /> : null}
            {solution.id === "ops" ? <OpsDemo queue={solution.demo.queue} /> : null}
            {solution.id === "reviews" ? <ReviewsDemo guests={solution.demo.guests} /> : null}
            {solution.id === "manager" ? <ManagerDemo topics={solution.demo.topics} /> : null}
          </div>
        </div>
      </div>
    </article>
  );
}
