import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { IProjects } from "@/types/projects";
import { readJsonFile } from "@/app/action";
import { IDict } from "@/types/dict";
import { getDictionary } from "@/get-dictionary";

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ lang: "en" | "de" }>;
}) {
  const { lang } = await params;

  const projects: IProjects[] = await readJsonFile(
    "/public/projects/allProjects.json"
  );
  const dict: IDict = await getDictionary(lang);

  return (
    <div className="p-8 py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-extrabold tracking-tight lg:text-5xl">
            {dict.projects.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {dict.projects.sub_title}
          </p>
        </div>
      </div>
      <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={project.imgSrc}
                alt={project.imgAlt}
                className="object-cover w-full h-full transition-all hover:scale-105"
                height={400}
                width={600}
              />
            </div>
            <CardHeader>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription className="h-[40]">
                {project.description[lang]}
              </CardDescription>
            </CardHeader>
            <CardContent className=" h-[52]">
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter>
              <Button asChild size="sm">
                <Link href={project.repoUrl}>
                  {dict.projects.view_code}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              {project.demoUrl && (
                <Button asChild size="sm" className="ml-4">
                  <Link href={project.repoUrl}>
                    {dict.projects.view_demo}
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
