declare module "@shadergradient/react" {
  import type * as React from "react";

  // The library runtime supports many props that are not currently reflected
  // in its published `dist/index.d.mts` types. We widen the component props
  // locally so app code can use the full prop surface without TS errors.
  export const ShaderGradient: React.ComponentType<Record<string, unknown>>;
  export const ShaderGradientCanvas: React.ComponentType<Record<string, unknown>>;
}

