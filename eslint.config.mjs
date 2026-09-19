import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextCoreWebVitals,
  {
    ignores: ["cloudflare-env.d.ts", ".open-next/**"],
  },
];

export default eslintConfig;
