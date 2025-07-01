import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    paraglideVitePlugin({
      project: "./project.inlang",
      outdir: "./src/paraglide",
      outputStructure: "message-modules",
      cookieName: "PARAGLIDE_LOCALE",
      strategy: ["cookie", "url", "preferredLanguage", "baseLocale"],
      disableAsyncLocalStorage: true, // ⚠️ Use with caution
    }),
    tsConfigPaths(),
    tanstackStart(),
  ],
});
