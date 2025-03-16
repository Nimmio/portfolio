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

interface IProjects {
  name: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
  stack: string[];
  repoUrl: string;
  key: string;
}

export default function ProjectsPage() {
  const projects: IProjects[] = [
    {
      name: "Portfolio",
      description: "This Website",
      imgSrc: "/projects/images/Portfolio.png",
      imgAlt: "Portfolio Picture",
      stack: ["TypeScript", "React.js", "Next.js", "shadcn/ui"],
      key: "Portfolio_card",
      repoUrl: "https://github.com/Nimmio/portfolio",
    },
    {
      name: "Bewerbung",
      description: "Application to track your Applications",
      imgSrc: "/projects/images/bewerbung.png",
      imgAlt: "Bewerbung Picture",
      stack: [
        "TypeScript",
        "React.js",
        "Next.js",
        "shadcn/ui",
        "Prisma",
        "PostgreSQL",
        "Better Auth",
      ],
      key: "Bewerbung_card",
      repoUrl: "https://github.com/Nimmio/bewerbung",
    },
    {
      name: "Boiler",
      description:
        "Next.js, Shadcn/ui, Prisma and better-auth Boilerplate with basic Usermanagment",
      imgSrc: "/projects/images/bewerbung.png",
      imgAlt: "Bewerbung Picture",
      stack: [
        "TypeScript",
        "React.js",
        "Next.js",
        "shadcn/ui",
        "Prisma",
        "PostgreSQL",
        "Better Auth ",
      ],
      key: "Bewerbung_card",
      repoUrl: "https://github.com/Nimmio/bewerbung",
    },
    {
      name: "TradingPlatformExample",
      description: "A quick and dirty Trading Platform Example/Demo",
      imgSrc: "/projects/images/bewerbung.png",
      imgAlt: "Bewerbung Picture",
      stack: ["TypeScript", "React.js", "Next.js", "Mantine"],
      key: "Bewerbung_card",
      repoUrl: "https://github.com/Nimmio/bewerbung",
    },
  ];

  return (
    <div className="p-8 py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-extrabold tracking-tight lg:text-5xl">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground">
            A collection of my work.
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
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>

            <CardFooter className="flex justify-between">
              <Button asChild size="sm">
                <Link href={project.repoUrl}>
                  View Code <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
