import { defineConfig } from "eslint/config";
import javascript from "@eslint/js";
import typescript from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginSvelte from "eslint-plugin-svelte";
import svelteConfig from "./svelte.config.js";

export default defineConfig([
  eslintConfigPrettier,
  javascript.configs.recommended,
  ...typescript.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginSvelte.configs.recommended,
  {
    files: ["**/*.svelte", "**/*.svelte.ts", "**/*.svelte.js"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        extraFileExtensions: ["svelte"],
        parser: typescript.parser,
        svelteConfig,
      },
    },
  },
]);
