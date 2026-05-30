import globals from "globals";
import pluginJs from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import tsPlugin from "@typescript-eslint/eslint-plugin";

/** @type {import('eslint').Linter.Config[]} */
export default [
  pluginJs.configs.recommended, // Recommended ESLint configurations
  {
    files: ["**/*.ts", "**/*.tsx"], // Applies only to TypeScript files
    languageOptions: {
      globals: globals.node, // Define Node.js global variables
      ecmaVersion: 2021, // Use ECMAScript 2021
      sourceType: "module", // Allow the use of ES modules
      parser: tsParser, // Use the TypeScript parser
    },
    plugins: {
      "@typescript-eslint": tsPlugin, // Use the TypeScript plugin
    },
    rules: {
      // Style rules and best practices
      "@typescript-eslint/naming-convention": [
        "error",
        {
          selector: "variable", // Apply the rule to variables
          format: ["camelCase", "PascalCase", "UPPER_CASE"], // Allow camelCase, PascalCase, and UPPER_CASE. Keep only the necessary ones to follow your chosen patterns
          leadingUnderscore: "allow", // Allow leading underscores (e.g., _privateVar)
        },
      ],
      semi: ["error", "always"], // Enforce semicolons at the end of statements
      quotes: ["error", "double"], // Enforce double quotes
      indent: ["error", 2], // 2-space indentation
      "no-trailing-spaces": "error", // Disallow trailing spaces at the end of lines
      "prefer-const": "error", // Enforce the use of 'const' for variables that are not reassigned
      "no-param-reassign": "error", // Disallow reassigning function parameters
      "array-bracket-spacing": ["error", "never"], // Disallow spaces inside array brackets
      "comma-dangle": ["error", "always-multiline"], // Enforce trailing commas in multiline objects/arrays

      // Additional recommended rules
      "@typescript-eslint/no-unused-vars": "error", // Error if a variable is unused
      "object-curly-spacing": ["error", "always"], // Enforce spaces inside curly braces
      "arrow-parens": ["error", "always"], // Enforce parentheses in arrow functions
      "no-var": "error", // Disallow the use of 'var'
      "no-multiple-empty-lines": ["error", { max: 1 }], // Limit consecutive empty lines
    },
  },
];
