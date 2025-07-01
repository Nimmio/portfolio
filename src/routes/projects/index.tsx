import PageHeader from "@/components/pageHeader/page-header";
import ProjectCard from "@/components/projectCard/project-card";
import { getProjects } from "@/lib/utils";
import { m } from "@/paraglide/messages";
import { getLocale } from "@/paraglide/runtime";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects/")({
  component: RouteComponent,
  loader: async () => await getProjects(),
});

function RouteComponent() {
  const projects = Route.useLoaderData();
  const locale = getLocale();
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 mx-auto">
      <PageHeader title={m.orange_mealy_midge_dream()} />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            title={project.name}
            description={project.description[locale]}
            tags={project.stack}
            image={`/images/${project.imgSrc}`}
            repoUrl={project.repoUrl}
            demoUrl={project.demoUrl}
          />
        ))}
      </div>
    </div>
  );
}
