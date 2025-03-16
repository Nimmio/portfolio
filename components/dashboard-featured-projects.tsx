import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import DashboardFeaturedProjectsCard from "./dashboard-featured-projects-card";

const DashboardFeaturedProjects = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Check out some of my recent work
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <DashboardFeaturedProjectsCard
            name="Portfolio"
            description="This Website"
            imgSrc="/projects/images/Portfolio.png"
            imgAlt="Portfolio Picture"
            stack={["TypeScript", "React.js", "Next.js", "shadcn/ui"]}
            key="Portfolio_card"
          />
          <DashboardFeaturedProjectsCard
            name="Bewerbung"
            description="Application to track your Applications"
            imgSrc="/projects/images/bewerbung.png"
            imgAlt="Bewerbung Picture"
            stack={[
              "TypeScript",
              "React.js",
              "Next.js",
              "shadcn/ui",
              "Prisma",
              "PostgreSQL",
              "Better Auth",
            ]}
            key="Bewerbung_card"
          />
        </div>
        <div className="flex justify-center">
          <Link href="/projects">
            <Button variant="outline">View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DashboardFeaturedProjects;
