"use client";

import { Safari } from "@/components/ui/safari";

type SafariDemoShellProps = {
  url: string;
  children: React.ReactNode;
  className?: string;
};

export default function SafariDemoShell({ url, children, className }: SafariDemoShellProps) {
  return (
    <div className={`safari-demo-shell demo-ui-font${className ? ` ${className}` : ""}`}>
      <Safari url={url}>{children}</Safari>
    </div>
  );
}
