import js from "@eslint/js";
import globals from "globals";

export default [
  {
    ignores: ["public/js/md5.js", "node_modules/"],
  },
  js.configs.recommended,
  {
    files: ["public/js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script",
      globals: {
        ...globals.browser,
        md5: "readonly",
      },
    },
  },
];
