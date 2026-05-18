"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MIN_WIDTH_PX = 260;

type ResizableDemoWindowProps = {
  className?: string;
  children: React.ReactNode;
  /** Keep width synced to the parent shell (e.g. guest inbox grid column). */
  fillWidth?: boolean;
};

/** Demo shell — drag the right edge to resize width. Use column splitters inside for panel layout. */
export default function ResizableDemoWindow({
  className,
  children,
  fillWidth = false,
}: ResizableDemoWindowProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const sessionRef = useRef<{ startX: number; startW: number } | null>(null);
  const [widthPx, setWidthPx] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);

  const shellWidth = useCallback(() => {
    const el = rootRef.current;
    if (!el) return 2000;
    const shell = el.parentElement;
    if (shell instanceof HTMLElement) {
      return shell.getBoundingClientRect().width;
    }
    const col = el.closest(".solution-demo-col");
    if (col instanceof HTMLElement) {
      return col.getBoundingClientRect().width;
    }
    return el.parentElement?.getBoundingClientRect().width ?? 2000;
  }, []);

  useEffect(() => {
    if (!fillWidth) return;
    const shell = rootRef.current?.parentElement;
    if (!shell) return;

    const clampToShell = () => {
      setWidthPx((w) => {
        if (w == null) return null;
        const maxW = shell.getBoundingClientRect().width;
        return Math.min(w, maxW);
      });
    };

    const ro = new ResizeObserver(clampToShell);
    ro.observe(shell);
    return () => ro.disconnect();
  }, [fillWidth]);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => {
      const s = sessionRef.current;
      if (!s) return;
      const maxW = shellWidth();
      const w = Math.min(maxW, Math.max(MIN_WIDTH_PX, s.startW + (e.clientX - s.startX)));
      setWidthPx(w);
    };
    const up = () => {
      sessionRef.current = null;
      setDragging(false);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [dragging, shellWidth]);

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      if (fillWidth) return;
      e.preventDefault();
      e.stopPropagation();
      const el = rootRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      sessionRef.current = { startX: e.clientX, startW: r.width };
      setDragging(true);
      (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    },
    [fillWidth],
  );

  const onDoubleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setWidthPx(null);
  }, []);

  const useExplicitWidth = !fillWidth && widthPx != null;

  return (
    <div
      ref={rootRef}
      className={className}
      style={{
        width: useExplicitWidth ? `${Math.round(widthPx)}px` : "100%",
        maxWidth: "100%",
        minWidth: 0,
        minHeight: 0,
        overflow: "hidden",
        marginInline: useExplicitWidth ? "auto" : undefined,
        position: "relative",
        touchAction: dragging ? "none" : undefined,
        boxSizing: "border-box",
      }}
      onDoubleClick={onDoubleClick}
      title={fillWidth ? undefined : "Drag the right edge to resize width. Double-click to reset."}
    >
      {children}
      {!fillWidth ? (
        <div
          className="demo-resize-handle demo-resize-handle--e"
          role="presentation"
          aria-hidden
          onPointerDown={onPointerDown}
        />
      ) : null}
    </div>
  );
}
