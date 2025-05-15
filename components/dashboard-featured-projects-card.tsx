import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { getDictionary } from "@/get-dictionary";
import { IDict } from "@/types/dict";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface DashboardFeaturedProjectsCardParams {
  name: string;
  stack: string[];
  imgSrc: string;
  imgAlt: string;
  description: string;
  demo?: string;
  repo: string;
  lang: "de" | "en";
}

const DashboardFeaturedProjectsCard = async (
  params: DashboardFeaturedProjectsCardParams
) => {
  const { name, stack, imgSrc, imgAlt, description, lang, demo, repo } = params;
  const dict: IDict = await getDictionary(lang);

  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm overflow-hidden">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground flex gap-1 flex-wrap">
          {stack.map((element) => (
            <Badge key={`${name}_badge_${element}`} variant={"secondary"}>
              {element}
            </Badge>
          ))}
        </p>
      </div>
      <div className="p-6 pt-0">
        <div className="aspect-video overflow-hidden rounded-lg">
          <Image
            src={imgSrc}
            alt={imgAlt}
            className="object-cover w-full h-full"
            width={600}
            height={400}
          />
        </div>
        <div className="mt-4">
          <p className="text-muted-foreground">{description}</p>
        </div>
        <div className="mt-4">
          <Button asChild size="sm">
            <Link href={repo}>
              {dict.projects.view_code}
              <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          {demo && (
            <Button asChild size="sm" className="ml-4">
              <Link href={demo}>
                {dict.projects.view_demo}
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardFeaturedProjectsCard;
