import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/navigaton";
import { ModeToggle } from "@/components/theme-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
import { i18n, type Locale } from "../../i18n-config";
import { LanguageToggle } from "@/components/locale-switcher";

const inter = Inter({ subsets: ["latin"] });
const name = process.env.NAME || "";
const email = process.env.EMAIL || "";
const job = process.env.JOB || "";

export const metadata = {
  title: "Portfolio | " + name,
  description: `Personal portfolio website of ${name}, ${job} `,
};
export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}>) {
  const lang = (await params).lang;
  return (
    <html lang={lang} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 w-full border-b bg-background">
              <div className="flex h-16 items-center space-x-4 p-8 sm:justify-between sm:space-x-0">
                <MainNav email={email} name={name} lang={lang} />
                <div className="flex flex-1 items-center justify-end space-x-4">
                  <LanguageToggle lang={lang} />
                  <ModeToggle />
                </div>
              </div>
            </header>
            <div className="flex flex-col min-h-[calc(100vh-9rem)]">
              {children}
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
