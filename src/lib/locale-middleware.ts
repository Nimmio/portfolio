import { createMiddleware } from "@tanstack/react-start";
import {
  baseLocale,
  type Locale,
  overwriteGetLocale,
} from "@/paraglide/runtime.js";
import { resolveLocale } from "./resolve-locale";

export const localeMiddleware = createMiddleware({ type: "function" }).client(
  async (context) =>
    context.next({
      sendContext: {
        locale: await resolveLocale(),
      },
    })
);
