import css from "@eslint/css";
import {defineConfig, globalIgnores} from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import markdown from "@eslint/markdown";

export default defineConfig([
  globalIgnores(["virtualsky/*"]),
  { files: ["**/*.css"], plugins: { css }, language: "css/css", extends: ["css/recommended"] },
  {
    files: ["**/*.js"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.browser, sourceType: "module" }
  },
  { files: ["**/*.md"], plugins: { markdown }, language: "markdown/gfm", extends: ["markdown/recommended"] },
  { files: ["config.demo.js", "changelog.config.js"], rules: { "no-undef": "off" } },
]);
