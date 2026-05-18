"use client";

import type { CSSProperties } from "react";

import type { DemoGuestProfile } from "@/lib/demo-guests";

type DemoAvatarProps = {
  guest?: Pick<DemoGuestProfile, "name" | "initials" | "orbColor">;
  name?: string;
  initials?: string;
  /** When true, `imageUrl` may render a photo (reviews only). */
  showPhoto?: boolean;
  imageUrl?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const SIZE_CLASS = {
  sm: "demo-avatar--sm",
  md: "demo-avatar--md",
  lg: "demo-avatar--lg",
} as const;

export default function DemoAvatar({
  guest,
  name,
  initials,
  showPhoto = false,
  imageUrl,
  size = "sm",
  className = "",
}: DemoAvatarProps) {
  const displayName = guest?.name ?? name ?? "Guest";
  const fallback = guest?.initials ?? initials ?? displayName.slice(0, 2).toUpperCase();
  const orbColor = guest?.orbColor ?? "#64748b";
  const src = showPhoto ? imageUrl : undefined;

  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element -- review demo guest photos
      <img
        src={src}
        alt={displayName}
        className={`demo-avatar demo-avatar--photo ${SIZE_CLASS[size]} ${className}`.trim()}
      />
    );
  }

  return (
    <span
      className={`demo-avatar demo-avatar--orb ${SIZE_CLASS[size]} ${className}`.trim()}
      style={{ "--demo-avatar-orb": orbColor } as CSSProperties}
      aria-hidden
    >
      {fallback}
    </span>
  );
}
