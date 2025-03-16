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

export default function ProjectsPage() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with payment processing and inventory management.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Portfolio Dashboard",
      description:
        "A dashboard for tracking investments and financial portfolio performance.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Social Media App",
      description:
        "A social networking application with real-time messaging and content sharing.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React Native", "Firebase", "Redux", "WebSockets"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "An AI-powered tool that generates marketing content based on user prompts.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Python", "TensorFlow", "Flask", "React"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Fitness Tracker",
      description:
        "A mobile app for tracking workouts, nutrition, and fitness progress.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Flutter", "Firebase", "GraphQL", "HealthKit"],
      demoUrl: "#",
      codeUrl: "#",
    },
    {
      title: "Weather Application",
      description:
        "A weather forecasting app with location-based services and interactive maps.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Vue.js", "Express", "OpenWeatherAPI", "Mapbox"],
      demoUrl: "#",
      codeUrl: "#",
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
            A collection of my work, side projects, and experiments.
          </p>
        </div>
      </div>
      <div className="grid gap-6 pt-12 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="object-cover w-full h-full transition-all hover:scale-105"
                height={400}
                width={600}
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button asChild variant="outline" size="sm">
                <Link href={project.demoUrl}>
                  Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="sm">
                <Link href={project.codeUrl}>
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
