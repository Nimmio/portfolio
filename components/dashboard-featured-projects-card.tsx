import Image from "next/image";
import React from "react";
import { Badge } from "./ui/badge";

interface DashboardFeaturedProjectsCardParams {
  name: string;
  stack: string[];
  imgSrc: string;
  imgAlt: string;
  description: string;
}

const DashboardFeaturedProjectsCard = (
  params: DashboardFeaturedProjectsCardParams
) => {
  const { name, stack, imgSrc, imgAlt, description } = params;
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground flex gap-1">
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
      </div>
    </div>
  );
};

export default DashboardFeaturedProjectsCard;
