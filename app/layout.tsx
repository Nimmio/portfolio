// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";
import "./globals.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import LayoutShell from "@/components/LayoutShell";

export const metadata = {
  title: "Portfoilo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider>
          <LayoutShell>{children}</LayoutShell>
        </MantineProvider>
      </body>
    </html>
  );
}
