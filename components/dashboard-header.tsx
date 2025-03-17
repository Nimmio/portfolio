import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";
import { getDictionary } from "@/get-dictionary";

interface DashboardHeaderParams {
  name: string;
  job: string;
  email: string;
  lang: TLang;
}

const DashboardHeader = async (params: DashboardHeaderParams) => {
  const { name, job, email, lang } = params;
  const dict = await getDictionary(lang);
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {name}
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              {job}
            </p>
          </div>
          <div className="space-x-4">
            <Link href="projects">
              <Button className="gap-1">
                {dict.dashboard.view_my_work} <MoveRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href={`mailto:${email}`}>
              <Button variant="outline">{dict.dashboard.contact_me}</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardHeader;
