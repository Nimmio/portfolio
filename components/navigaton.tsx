"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { ReactNode, useEffect } from "react";

interface IRoutes {
  href: string;
  label: {
    de: string;
    en: string;
  };
  icon?: ReactNode;
}

export const MainNav = (params: {
  name: string;
  email: string;
  lang: TLang;
}) => {
  const pathname = usePathname();
  const isMobile = useMobile();
  const { name, email, lang } = params;

  useEffect(() => {
    console.log("pathname");
  }, [pathname]);

  const routes: IRoutes[] = [
    {
      href: "home",
      label: {
        en: "Home",
        de: "Home",
      },
    },
    {
      href: "projects",
      label: {
        en: "Projects",
        de: "Projekte",
      },
    },
    {
      href: "skills",
      label: {
        en: "Skills",
        de: "Fertigkeiten",
      },
    },
    {
      href: "about",
      label: {
        en: "About Me",
        de: "Über mich",
      },
    },
    {
      href: `mailto:${email}`,
      label: {
        de: "E-Mail senden",
        en: "Send e-mail",
      },
    },
  ];

  if (isMobile) {
    return (
      <div className="flex w-full justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          {name}
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="pl-8 pt-4">Navigation</SheetTitle>
            <nav className="pl-8 flex flex-col gap-4 mt-8">
              {routes.map((route) => (
                <>
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-primary",
                      pathname === route.href
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {route.label[lang]}
                  </Link>
                </>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    );
  }

  return (
    <div className="flex gap-6 md:gap-10">
      <span className="hidden md:flex font-bold text-xl items-center">
        {name}
      </span>
      <NavigationMenu>
        <NavigationMenuList>
          {routes.map((route) => (
            <NavigationMenuItem key={route.href}>
              <Link href={route.href} legacyBehavior passHref>
                <NavigationMenuLink>
                  <span className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1">
                    {route.label[lang]}
                  </span>
                  {route.icon}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
