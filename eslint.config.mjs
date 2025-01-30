import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

// Resolve __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize compatibility layer
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Export ESLint configuration
export default [
  ...compat.extends("next/core-web-vitals"), // Extend Next.js recommended rules
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/quotes": "off",
      "quotes": [0], // Disable quotes rule
      "no-useless-escape": 0, // Disable useless escape warnings
      "avoidEscape": 0, // (Misplaced; remove it as it belongs inside "quotes")
      "allowTemplateLiterals": 0 // (Misplaced; remove it as it belongs inside "quotes")
    }
  }
];
