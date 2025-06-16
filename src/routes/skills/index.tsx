import SkillBadge from "@/components/skillBadge/skill-badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSkills } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/skills/")({
  component: RouteComponent,
  loader: async () => await getSkills(),
});

function RouteComponent() {
  const skills = Route.useLoaderData();

  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 mx-auto">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">My Skills</h1>
      </div>

      <div className="grid gap-8">
        {skills.AllSkills.map((skillGroup) => (
          <Card key={skillGroup.groupTitle}>
            <CardHeader>
              <CardTitle>{skillGroup.groupTitle}</CardTitle>
              <CardDescription>{skillGroup.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill) => (
                  <SkillBadge key={`${skillGroup}_${skill}`} name={skill} />
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
