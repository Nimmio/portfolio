import * as fs from "node:fs";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import ProjectCard from "@/components/projectCard/project-card";
import SkillBadge from "@/components/skillBadge/skill-badge";
import { getFeaturedProjects, getInfos, getSkills } from "@/lib/utils";
import SocialsAndMail from "@/components/socialsAndMail/socials-and-mail";
import { m } from "@/paraglide/messages";
import { getLocale } from "@/paraglide/runtime";

export const Route = createFileRoute("/")({
  component: Home,
  loader: async () =>
    await Promise.all([getInfos(), getSkills(), getFeaturedProjects()]),
});

function Home() {
  const [info, skills, featuredProjects] = Route.useLoaderData();
  const locale = getLocale();
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                {info.Name}
              </h1>
              <p className="mx-auto max-w-[700px] text-slate-500 md:text-xl dark:text-slate-400">
                {info.Job}
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <Link to="/projects">
                  {m.small_chunky_wren_belong()}{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/about">{m.cute_dark_boar_persist()}</Link>
              </Button>
            </div>
            <SocialsAndMail
              github={info.github}
              linkedin={info.linkedin}
              mail={info.Email}
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-12 md:py-16 bg-white dark:bg-slate-950">
        <div className="container px-4 md:px-6 w-full mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {m.safe_good_marmot_tickle()}
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                {m.knotty_best_slug_fold()}
              </p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/projects">
                {m.tasty_cuddly_tapir_climb()}{" "}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((featuredProject) => (
              <ProjectCard
                key={`featuredProject_${featuredProject.name}`}
                title={featuredProject.name}
                description={featuredProject.description[locale]}
                tags={featuredProject.stack}
                image={`/images/${featuredProject.imgSrc}`}
                repoUrl={featuredProject.repoUrl}
                demoUrl={featuredProject.demoUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className="py-12 md:py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {m.drab_quiet_earthworm_assure()}
              </h2>
              <p className="text-slate-500 dark:text-slate-400">
                {m.teal_odd_sheep_glow()}
              </p>
            </div>
            <Button variant="ghost" asChild>
              <Link to="/skills">
                {m.tasty_cuddly_tapir_climb()}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-8 justify-center md:justify-start">
            {skills.FeaturedSkills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
