import type React from "react";
import "@/app/globals.css";
import { Inter } from "next/font/google";
import { MainNav } from "@/components/navigaton";
import { ModeToggle } from "@/components/theme-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/footer";
//import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] });
const name = process.env.NAME || "";
const email = process.env.EMAIL || "";
const job = process.env.JOB || "";
export const metadata = {
  title: "Portfolio | " + name,
  description: `Personal portfolio website of ${name}, ${job} `,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
                <MainNav email={email} name={name} />
                <div className="flex flex-1 items-center justify-end space-x-4">
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
