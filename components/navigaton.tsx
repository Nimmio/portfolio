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
import { ReactNode } from "react";

interface IRoutes {
  href: string;
  label: string;
  icon?: ReactNode;
}
const getRoutes = (email: string): IRoutes[] => {
  return [
    {
      href: "/",
      label: "Home",
    },
    {
      href: "/projects",
      label: "Projects",
    },
    {
      href: "/skills",
      label: "Skills",
    },
    {
      href: "/about",
      label: "About Me",
    },
    {
      href: `mailto:${email}`,
      label: "E-Mail me",
    },
  ];
};

export function MainNav(params: { name: string; email: string }) {
  const pathname = usePathname();
  const isMobile = useMobile();
  const { name, email } = params;
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
              {getRoutes(email).map((route) => (
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
                  {route.label}
                </Link>
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
          {getRoutes(email).map((route) => (
            <NavigationMenuItem key={route.href}>
              <Link href={route.href} legacyBehavior passHref>
                <NavigationMenuLink>
                  <span className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 transition-[color,box-shadow] focus-visible:ring-4 focus-visible:outline-1">
                    {route.label}
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
}
