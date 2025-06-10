import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import DashboardFeaturedProjectsCard from "./dashboard-featured-projects-card";
import { IDict } from "@/types/dict";
import { IProjects } from "@/types/projects";
import { readJsonFile } from "@/app/action";
import { getDictionary } from "@/get-dictionary";

const DashboardFeaturedProjects = async (params: { lang: "en" | "de" }) => {
  const { lang } = params;
  const projects: IProjects[] = await readJsonFile(
    "/public/projects/featured.json"
  );
  const dict: IDict = await getDictionary(lang);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              {dict.dashboard.featured_projects}
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {dict.dashboard.check_out_some_of_my_recent_work}
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          {projects.map((project) => (
            <DashboardFeaturedProjectsCard
              lang={lang}
              name={project.name}
              description={project.description[lang]}
              imgSrc={project.imgSrc}
              imgAlt={project.imgAlt}
              stack={project.stack}
              demo={project.demoUrl}
              repo={project.repoUrl}
              key={`featured_project_${project.name}_card`}
            />
          ))}
        </div>
        <div className="flex justify-center">
          <Link href="projects">
            <Button variant="outline">
              {dict.dashboard.view_all_projects}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DashboardFeaturedProjects;
