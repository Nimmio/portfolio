// src/routes/__root.tsx
import type { ReactNode } from "react";
import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import appCss from "@/styles/app.css?url";
import { getInfos } from "@/lib/utils";
import SiteHeader from "@/components/siteHeader/site-header";
import SiteFooter from "@/components/siteFooter/site-footer";
import { NotFound } from "@/components/NotFound";
import { ThemeProvider } from "@/components/ThemeProvider";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Portfolio",
      },
    ],

    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  notFoundComponent: () => <NotFound />,
  loader: async () => await getInfos(),

  component: RootComponent,
});

function RootComponent() {
  const router = useRouter();
  const info = Route.useLoaderData();
  return (
    <RootDocument>
      <SiteHeader name={info.Name} />

      <Outlet />

      <SiteFooter
        name={info.Name}
        email={info.Email}
        github={info.github}
        linkedin={info.linkedin}
      />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body className={` min-h-screen bg-background antialiased`}>
        <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
        <Scripts />
      </body>
    </html>
  );
}
