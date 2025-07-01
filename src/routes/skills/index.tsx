import PageHeader from "@/components/pageHeader/page-header";
import SkillBadge from "@/components/skillBadge/skill-badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSkills } from "@/lib/utils";
import { m } from "@/paraglide/messages";
import { getLocale } from "@/paraglide/runtime";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/skills/")({
  component: RouteComponent,
  loader: async () => await getSkills(),
});

function RouteComponent() {
  const skills = Route.useLoaderData();
  const locale = getLocale();
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 mx-auto">
      <PageHeader title={m.fair_teary_trout_treasure()} />

      <div className="grid gap-8">
        {skills.AllSkills.map((skillGroup) => (
          <Card key={skillGroup.groupTitle["en"]}>
            <CardHeader>
              <CardTitle>{skillGroup.groupTitle[locale]}</CardTitle>
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
