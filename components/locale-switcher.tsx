"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Locale } from "@/i18n-config";

export function LanguageToggle(params: { lang: Locale }) {
  const { lang } = params;
  const pathname = usePathname();
  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {lang}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <Link href={redirectedPathname("en")}>
          <DropdownMenuItem>English</DropdownMenuItem>
        </Link>
        <Link href={redirectedPathname("de")}>
          <DropdownMenuItem>German</DropdownMenuItem>
        </Link>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
