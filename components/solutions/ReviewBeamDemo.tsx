"use client";

import { useRef } from "react";

import DemoAvatar from "@/components/solutions/DemoAvatar";
import { Marquee } from "@/components/ui/marquee";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import {
  ReviewPlatformIcon,
  type PlatformId,
} from "@/components/solutions/ReviewPlatformIcons";
import { SOLUTIONS } from "@/lib/solutions";

type GuestUser = {
  id: string;
  name: string;
  likelihood: number;
  curvature: number;
  delay: number;
};

type PlatformNode = {
  id: PlatformId;
  label: string;
  curvature: number;
  delay: number;
};

type ReviewMarqueeItem = {
  id: string;
  name: string;
  platform: PlatformId;
  platformLabel: string;
  quote: string;
  stars: number;
  avatarUrl: string;
};

const MARQUEE_REVIEWS: ReviewMarqueeItem[] = [
  {
    id: "m1",
    name: "Jenny Wilson",
    platform: "google",
    platformLabel: "Google Reviews",
    quote: "Spotless room and seamless check-in at Riverside — would absolutely stay again.",
    stars: 5,
    avatarUrl: "https://img.heroui.chat/image/avatar?w=400&h=400&u=7",
  },
  {
    id: "m2",
    name: "Marcus Chen",
    platform: "tripadvisor",
    platformLabel: "TripAdvisor",
    quote: "Concierge team was incredibly fast and thoughtful throughout our stay.",
    stars: 5,
    avatarUrl: "https://img.heroui.chat/image/avatar?w=400&h=400&u=8",
  },
  {
    id: "m3",
    name: "Sarah Williams",
    platform: "booking",
    platformLabel: "Booking.com",
    quote: "Loved the quiet floor and turndown details every night. Five stars.",
    stars: 5,
    avatarUrl: "https://img.heroui.chat/image/avatar?w=400&h=400&u=5",
  },
  {
    id: "m4",
    name: "Alex Johnson",
    platform: "expedia",
    platformLabel: "Expedia",
    quote: "Late checkout was handled smoothly — front desk and LOJJ made it effortless.",
    stars: 5,
    avatarUrl: "https://img.heroui.chat/image/avatar?w=400&h=400&u=12",
  },
  {
    id: "m5",
    name: "Priya Patel",
    platform: "hotels",
    platformLabel: "Hotels.com",
    quote: "Beautiful lobby, attentive staff, and the pool area felt premium.",
    stars: 4.5,
    avatarUrl: "https://img.heroui.chat/image/avatar?w=400&h=400&u=16",
  },
  {
    id: "m6",
    name: "Daniel Reeves",
    platform: "google",
    platformLabel: "Google Reviews",
    quote: "Best business stay I've had downtown — fast Wi‑Fi and quiet rooms.",
    stars: 5,
    avatarUrl: "https://img.heroui.chat/image/avatar?w=400&h=400&u=3",
  },
];

const GUEST_USERS: GuestUser[] = [
  { id: "g1", name: "Alex Johnson", likelihood: 94, curvature: 24, delay: 0 },
  { id: "g2", name: "Sarah Williams", likelihood: 89, curvature: 8, delay: 0.35 },
  { id: "g3", name: "Marcus Chen", likelihood: 96, curvature: -8, delay: 0.7 },
  { id: "g4", name: "Priya Patel", likelihood: 86, curvature: -22, delay: 1.05 },
];

const PLATFORMS: PlatformNode[] = [
  { id: "google", label: "Google Reviews", curvature: 28, delay: 0 },
  { id: "tripadvisor", label: "TripAdvisor", curvature: 12, delay: 0.35 },
  { id: "hotels", label: "Hotels.com", curvature: -4, delay: 0.7 },
  { id: "expedia", label: "Expedia", curvature: -18, delay: 1.05 },
  { id: "booking", label: "Booking.com", curvature: -30, delay: 1.4 },
];

function BeamTooltip({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <span className="review-beam-tooltip-wrap">
      {children}
      <span className="review-beam-tooltip" role="tooltip">
        {label}
      </span>
    </span>
  );
}

function BeamNode({
  nodeRef,
  className,
  children,
}: {
  nodeRef: React.RefObject<HTMLDivElement | null>;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div ref={nodeRef} className={`review-beam-node ${className ?? ""}`}>
      {children}
    </div>
  );
}

function GuestAvatarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="review-guest-avatar-svg">
      <circle cx="12" cy="8" r="4" fill="#94a3b8" />
      <path fill="#94a3b8" d="M4 20c0-4.4 3.6-8 8-8s8 3.6 8 8v1H4v-1z" />
    </svg>
  );
}

function ReviewStars({ count }: { count: number }) {
  const full = Math.floor(count);
  const half = count % 1 >= 0.5;
  return (
    <span className="review-marquee-stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: full }, (_, i) => (
        <span key={i} className="review-marquee-star review-marquee-star--on" aria-hidden>
          ★
        </span>
      ))}
      {half ? (
        <span className="review-marquee-star review-marquee-star--half" aria-hidden>
          ★
        </span>
      ) : null}
      <span className="review-marquee-rating">{count.toFixed(1)}</span>
    </span>
  );
}

function ReviewMarqueeCard({ item }: { item: ReviewMarqueeItem }) {
  return (
    <article className="review-marquee-card">
      <span className="review-marquee-platform-mark" aria-hidden>
        <ReviewPlatformIcon platform={item.platform} />
      </span>
      <span className="review-marquee-quote-mark" aria-hidden>
        “
      </span>
      <header className="review-marquee-card-head">
        <DemoAvatar name={item.name} imageUrl={item.avatarUrl} showPhoto size="sm" />
        <span className="review-marquee-card-meta">
          <strong className="review-marquee-name">{item.name}</strong>
          <ReviewStars count={item.stars} />
        </span>
      </header>
      <p className="review-marquee-quote">{item.quote}</p>
      <span className="review-marquee-platform-label">{item.platformLabel}</span>
    </article>
  );
}

export default function ReviewBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lojjRef = useRef<HTMLDivElement>(null);

  const guest1Ref = useRef<HTMLDivElement>(null);
  const guest2Ref = useRef<HTMLDivElement>(null);
  const guest3Ref = useRef<HTMLDivElement>(null);
  const guest4Ref = useRef<HTMLDivElement>(null);

  const googleRef = useRef<HTMLDivElement>(null);
  const tripRef = useRef<HTMLDivElement>(null);
  const hotelsRef = useRef<HTMLDivElement>(null);
  const expediaRef = useRef<HTMLDivElement>(null);
  const bookingRef = useRef<HTMLDivElement>(null);

  const guestRefList = [guest1Ref, guest2Ref, guest3Ref, guest4Ref];

  const platformRefMap: Record<PlatformId, React.RefObject<HTMLDivElement | null>> = {
    google: googleRef,
    tripadvisor: tripRef,
    hotels: hotelsRef,
    expedia: expediaRef,
    booking: bookingRef,
  };

  const baseGuests = SOLUTIONS.find((s) => s.id === "reviews")?.demo.guests ?? [];
  const guests = GUEST_USERS.map((g, i) => ({
    ...g,
    name: baseGuests[i]?.name ?? g.name,
    likelihood: baseGuests[i]?.score ?? g.likelihood,
  }));

  return (
    <div className="review-routing-stack demo-ui-font">
      <div ref={containerRef} className="review-beam-stage review-beam-stage--wide" aria-label="Guest to platform review routing">
        <div className="review-beam-users">
          {guests.map((guest, index) => (
            <BeamNode key={guest.id} nodeRef={guestRefList[index]}>
              <BeamTooltip label={guest.name}>
                <span className="review-beam-user-icon">
                  <GuestAvatarIcon />
                </span>
              </BeamTooltip>
            </BeamNode>
          ))}
        </div>

        <div className="review-beam-hub-wrap">
          <BeamNode nodeRef={lojjRef} className="review-beam-hub">
            <BeamTooltip label="LOJJ">
              <span className="review-beam-lojj-glow">
                <span className="review-beam-lojj-icon">
                  {/* eslint-disable-next-line @next/next/no-img-element -- hub brand mark fills circle */}
                  <img src="/lojj-review-hub.png" alt="LOJJ" className="review-beam-lojj-img" />
                </span>
              </span>
            </BeamTooltip>
          </BeamNode>
        </div>

        <div className="review-beam-platforms">
          {PLATFORMS.map((platform) => (
            <BeamNode key={platform.id} nodeRef={platformRefMap[platform.id]}>
              <BeamTooltip label={platform.label}>
                <span className="review-beam-platform-icon">
                  <ReviewPlatformIcon platform={platform.id} />
                </span>
              </BeamTooltip>
            </BeamNode>
          ))}
        </div>

        {guests.map((guest, index) => (
          <AnimatedBeam
            key={`guest-${guest.id}`}
            containerRef={containerRef}
            fromRef={guestRefList[index]}
            toRef={lojjRef}
            curvature={guest.curvature}
            delay={guest.delay}
            duration={7}
            pathColor="#c8e6c0"
            pathOpacity={0.55}
            gradientStartColor="#bbf7d0"
            gradientStopColor="#22c55e"
            startXOffset={8}
            endXOffset={-8}
          />
        ))}

        {PLATFORMS.map((platform) => (
          <AnimatedBeam
            key={`platform-${platform.id}`}
            containerRef={containerRef}
            fromRef={lojjRef}
            toRef={platformRefMap[platform.id]}
            curvature={platform.curvature}
            delay={platform.delay}
            duration={7.5}
            pathColor="#c8e6c0"
            pathOpacity={0.55}
            gradientStartColor="#86efac"
            gradientStopColor="#16a34a"
            startXOffset={8}
            endXOffset={-8}
          />
        ))}

        <div className="review-beam-likelihoods review-beam-likelihoods--guests" aria-hidden>
          {guests.map((guest, index) => (
            <span
              key={guest.id}
              className="review-beam-likelihood"
              style={{ top: `${12 + index * 22}%` }}
            >
              {guest.likelihood}%
            </span>
          ))}
        </div>
      </div>

      <div className="review-marquee-wrap" aria-label="Recent guest reviews">
        <Marquee pauseOnHover className="review-marquee [--duration:50s]">
          {MARQUEE_REVIEWS.map((item) => (
            <ReviewMarqueeCard key={item.id} item={item} />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
