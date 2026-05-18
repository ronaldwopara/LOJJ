"use client";

type DemoColumnSplitterProps = {
  orientation?: "vertical" | "horizontal";
  label?: string;
  onPointerDown: (e: React.PointerEvent<HTMLDivElement>) => void;
  onDoubleClick?: () => void;
};

/** Draggable separator between columns inside a demo window. */
export default function DemoColumnSplitter({
  orientation = "vertical",
  label = "Resize columns",
  onPointerDown,
  onDoubleClick,
}: DemoColumnSplitterProps) {
  return (
    <div
      className={`demo-col-splitter demo-col-splitter--${orientation}`}
      role="separator"
      aria-orientation={orientation === "vertical" ? "vertical" : "horizontal"}
      aria-label={label}
      tabIndex={0}
      onPointerDown={onPointerDown}
      onDoubleClick={onDoubleClick}
      title="Drag to resize columns. Double-click to reset."
    />
  );
}
