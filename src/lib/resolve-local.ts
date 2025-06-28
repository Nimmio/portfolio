import { baseLocale, getLocale, Locale } from "@/paraglide/runtime";
import { paraglideMiddleware } from "@/paraglide/server";
import { createIsomorphicFn } from "@tanstack/react-start";
import { getWebRequest } from "@tanstack/react-start/server";

export const resolveLocale = createIsomorphicFn()
  .client(getLocale)
  .server(() => {
    const request = getWebRequest();

    if (!request) {
      return baseLocale;
    }

    return new Promise<Locale>((resolve) =>
      paraglideMiddleware(request, ({ locale }) => resolve(locale))
    );
  });
