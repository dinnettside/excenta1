import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    rules: {
      // Disable image optimization warnings for deployment
      "@next/next/no-img-element": "off",
      // Disable React quote escaping errors
      "react/no-unescaped-entities": "off",
      // Disable Next.js Link requirements
      "@next/next/no-html-link-for-pages": "off",
      // Disable React hooks exhaustive deps warnings
      "react-hooks/exhaustive-deps": "off",
    },
  },
];

export default eslintConfig;
