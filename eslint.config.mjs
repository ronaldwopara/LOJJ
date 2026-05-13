import coreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypeScript from "eslint-config-next/typescript";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  ...coreWebVitals,
  ...nextTypeScript,
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**",
      "coverage/**",
      "*.tsbuildinfo",
    ],
  },
  {
    rules: {
      // eslint-plugin-react-hooks@7: too strict for common scroll/reset patterns until refactors.
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;
