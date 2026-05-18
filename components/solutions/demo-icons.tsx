/** Stroke icons in Untitled UI style (24×24, 1.5px stroke). */
type IconProps = { className?: string; size?: number };

function IconBase({
  className,
  size = 20,
  children,
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      className={className}
    >
      {children}
    </svg>
  );
}

const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconSparkles({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        {...stroke}
        d="M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6l1.4 1.4m10 10 1.4 1.4m0-12.8-1.4 1.4m-10 10-1.4 1.4"
      />
    </IconBase>
  );
}

export function IconBook({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path {...stroke} d="M5 5.5A2.5 2.5 0 0 1 7.5 3h9v18h-9A2.5 2.5 0 0 1 5 18.5V5.5z" />
      <path {...stroke} d="M5 5.5A2.5 2.5 0 0 0 7.5 8H19" />
    </IconBase>
  );
}

export function IconBell({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path {...stroke} d="M9 18h6M12 3a5 5 0 0 0-5 5v4l-2 2h14l-2-2V8a5 5 0 0 0-5-5z" />
    </IconBase>
  );
}

export function IconClipboard({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path {...stroke} d="M9 5h6a2 2 0 0 1 2 2v12H7V7a2 2 0 0 1 2-2z" />
      <path {...stroke} d="M9 3h6v4H9V3z" />
    </IconBase>
  );
}

export function IconSettings({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <circle {...stroke} cx="12" cy="12" r="3" />
      <path
        {...stroke}
        d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4m11.4-11.4 1.4-1.4"
      />
    </IconBase>
  );
}

export function IconSearch({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <circle {...stroke} cx="11" cy="11" r="6" />
      <path {...stroke} d="M16 16l4 4" />
    </IconBase>
  );
}

export function IconMenu({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path {...stroke} d="M4 7h16M4 12h16M4 17h16" />
    </IconBase>
  );
}

export function IconSort({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path {...stroke} d="M8 6h12M8 12h8M8 18h4M6 6l-2 2 2 2M6 12l-2 2 2 2M6 18l-2 2 2 2" />
    </IconBase>
  );
}

export function IconPaperclip({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        {...stroke}
        d="M8 12.5V7.5a3.5 3.5 0 0 1 7 0v6a5.5 5.5 0 0 1-11 0V8"
      />
    </IconBase>
  );
}

export function IconArrowUp({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path {...stroke} d="M12 19V5M6 11l6-6 6 6" />
    </IconBase>
  );
}

export function IconStar({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path
        {...stroke}
        d="M12 3.5l2.2 4.5 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L12 3.5z"
      />
    </IconBase>
  );
}

export function IconPlus({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path {...stroke} d="M12 5v14M5 12h14" />
    </IconBase>
  );
}

export function IconX({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path {...stroke} d="M6 6l12 12M18 6 6 18" />
    </IconBase>
  );
}

export function IconCopy({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <rect {...stroke} x="9" y="9" width="11" height="11" rx="2" />
      <path {...stroke} d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1" />
    </IconBase>
  );
}

export function IconChevronLeft({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path {...stroke} d="M14 6l-6 6 6 6" />
    </IconBase>
  );
}

export function IconChevronRight({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path {...stroke} d="M10 6l6 6-6 6" />
    </IconBase>
  );
}

export function IconUser({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <circle {...stroke} cx="12" cy="8" r="3.5" />
      <path {...stroke} d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" />
    </IconBase>
  );
}

export function IconMessage({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path {...stroke} d="M4 6h16v10a2 2 0 0 1-2 2H8l-4 3V6z" />
    </IconBase>
  );
}

export function IconLink({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path {...stroke} d="M10 14a3.5 3.5 0 0 0 5 0l2-2a3.5 3.5 0 0 0-5-5l-1 1M14 10a3.5 3.5 0 0 0-5 0l-2 2a3.5 3.5 0 0 0 5 5l1-1" />
    </IconBase>
  );
}

export function IconCheckSquare({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <rect {...stroke} x="4" y="4" width="16" height="16" rx="2" />
      <path {...stroke} d="M8 12l3 3 5-6" />
    </IconBase>
  );
}

export function IconLayoutGrid({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <rect {...stroke} x="4" y="4" width="7" height="7" rx="1" />
      <rect {...stroke} x="13" y="4" width="7" height="7" rx="1" />
      <rect {...stroke} x="4" y="13" width="7" height="7" rx="1" />
      <rect {...stroke} x="13" y="13" width="7" height="7" rx="1" />
    </IconBase>
  );
}

export function IconCalendar({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <rect {...stroke} x="4" y="5" width="16" height="15" rx="2" />
      <path {...stroke} d="M8 3v4M16 3v4M4 10h16" />
    </IconBase>
  );
}

export function IconInbox({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <path {...stroke} d="M3 7h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
      <path {...stroke} d="M3 7l4 4h10l4-4" />
    </IconBase>
  );
}

export function IconUsers({ className, size }: IconProps) {
  return (
    <IconBase className={className} size={size}>
      <circle {...stroke} cx="9" cy="9" r="3" />
      <path {...stroke} d="M3 19c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path {...stroke} d="M16 11h5M18.5 8.5v5" />
    </IconBase>
  );
}
