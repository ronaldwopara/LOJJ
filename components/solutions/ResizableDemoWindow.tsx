"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MIN_WIDTH_PX = 300;

type Edge = "e" | "s" | "se";

type DragSession = {
  edge: Edge;
  startX: number;
  startY: number;
  startW: number;
  startH: number;
};

type ResizableDemoWindowProps = {
  aspectRatio: number;
  className?: string;
  children: React.ReactNode;
};

/**
 * Desktop preview shell: drag east / south / south-east edges to resize.
 * Cursor + hit targets make resize affordance obvious; width is clamped to the grid column.
 */
export default function ResizableDemoWindow({
  aspectRatio,
  className,
  children,
}: ResizableDemoWindowProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const sessionRef = useRef<DragSession | null>(null);
  const [widthPx, setWidthPx] = useState<number | null>(null);
  const [dragging, setDragging] = useState<Edge | null>(null);

  const maxWidth = useCallback(() => {
    const el = rootRef.current;
    if (!el) return 2000;
    const col = el.closest(".solution-demo-col");
    if (col instanceof HTMLElement) {
      return col.getBoundingClientRect().width;
    }
    return el.parentElement?.getBoundingClientRect().width ?? 2000;
  }, []);

  const applyResize = useCallback(
    (e: PointerEvent) => {
      const s = sessionRef.current;
      if (!s) return;
      const maxW = maxWidth();
      const minH = MIN_WIDTH_PX / aspectRatio;
      let w = s.startW;
      const dx = e.clientX - s.startX;
      const dy = e.clientY - s.startY;

      if (s.edge === "e" || s.edge === "se") {
        w = Math.min(maxW, Math.max(MIN_WIDTH_PX, s.startW + dx));
      } else if (s.edge === "s") {
        const newH = Math.max(minH, s.startH + dy);
        w = Math.min(maxW, Math.max(MIN_WIDTH_PX, newH * aspectRatio));
      }

      setWidthPx(w);
    },
    [aspectRatio, maxWidth],
  );

  useEffect(() => {
    if (!dragging) return;
    const up = () => {
      sessionRef.current = null;
      setDragging(null);
    };
    const move = (e: PointerEvent) => applyResize(e);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [dragging, applyResize]);

  const onPointerDown = useCallback(
    (edge: Edge) => (e: React.PointerEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const el = rootRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      sessionRef.current = {
        edge,
        startX: e.clientX,
        startY: e.clientY,
        startW: r.width,
        startH: r.height,
      };
      setDragging(edge);
      (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    },
    [],
  );

  const onDoubleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setWidthPx(null);
  }, []);

  return (
    <div
      ref={rootRef}
      className={className}
      style={{
        width: widthPx != null ? `${Math.round(widthPx)}px` : "100%",
        maxWidth: "100%",
        marginInline: widthPx != null ? "auto" : undefined,
        aspectRatio,
        position: "relative",
        touchAction: dragging ? "none" : undefined,
      }}
      onDoubleClick={onDoubleClick}
      title="Drag edges to resize. Double-click to reset width."
    >
      {children}
      <div
        className="demo-resize-handle demo-resize-handle--e"
        role="presentation"
        aria-hidden
        onPointerDown={onPointerDown("e")}
      />
      <div
        className="demo-resize-handle demo-resize-handle--s"
        role="presentation"
        aria-hidden
        onPointerDown={onPointerDown("s")}
      />
      <div
        className="demo-resize-handle demo-resize-handle--se"
        role="presentation"
        aria-hidden
        onPointerDown={onPointerDown("se")}
      />
    </div>
  );
}
