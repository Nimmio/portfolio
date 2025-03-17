import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getDictionary } from "@/get-dictionary";
import { IDict } from "@/types/dict";

type TLevel = "Fundamental" | "Proficient" | "Expert";

interface ISkill {
  name: string;
  level: TLevel;
}

interface ISkillGroups {
  frontend: ISkill[];
  backend: ISkill[];
  database: ISkill[];
  other: ISkill[];
}

export default async function SkillsPage({
  params,
}: {
  params: Promise<{ lang: "en" | "de" }>;
}) {
  const { lang } = await params;
  const dict: IDict = await getDictionary(lang);

  const skills: ISkillGroups = {
    frontend: [
      { name: "HTML/CSS", level: "Expert" },
      { name: "JavaScript", level: "Expert" },
      { name: "React", level: "Expert" },
      { name: "Next.js", level: "Expert" },
      { name: "Nuxt.js", level: "Proficient" },
      { name: "Tailwind CSS", level: "Proficient" },
      { name: "TypeScript", level: "Expert" },
      { name: "Vue.js", level: "Proficient" },
      { name: "Angular", level: "Fundamental" },
      { name: "Php", level: "Fundamental" },
      { name: "Zustand", level: "Expert" },
    ],
    backend: [
      { name: "Node.js", level: "Expert" },
      { name: "Express", level: "Proficient" },
      { name: "GraphQL", level: "Fundamental" },
      { name: "RESTful APIs", level: "Expert" },
      { name: "Prisma", level: "Expert" },
    ],
    database: [
      { name: "PostgreSQL", level: "Proficient" },
      { name: "MongoDB", level: "Proficient" },
      { name: "SQLite", level: "Proficient" },
    ],
    other: [
      { name: "Git/GitHub", level: "Expert" },
      { name: "Docker", level: "Proficient" },
      { name: "CI/CD", level: "Proficient" },
      { name: "UI/UX Design", level: "Fundamental" },
      { name: "Agile/Scrum", level: "Proficient" },
      { name: "Hardware", level: "Expert" },
      { name: "Linux", level: "Expert" },
    ],
  };

  const getSkillPercent = (level: TLevel): number => {
    const skillPercentMapping = {
      Fundamental: 33,
      Proficient: 66,
      Expert: 100,
    };
    return skillPercentMapping[level];
  };

  return (
    <div className=" py-12 p-8">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-extrabold tracking-tight lg:text-5xl">
            {dict.skills.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            {dict.skills.sub_title}
          </p>
        </div>
      </div>
      <div className="pt-12">
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="other">Other</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{dict.skills.tabs.frontend.title}</CardTitle>
                <CardDescription>
                  {dict.skills.tabs.frontend.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.frontend.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {dict.skills.levels[skill.level]}
                      </span>
                    </div>
                    <Progress
                      value={getSkillPercent(skill.level)}
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="backend" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{dict.skills.tabs.backend.title}</CardTitle>

                <CardDescription>
                  {dict.skills.tabs.backend.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.backend.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {dict.skills.levels[skill.level]}
                      </span>
                    </div>
                    <Progress
                      value={getSkillPercent(skill.level)}
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="database" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{dict.skills.tabs.Database.title}</CardTitle>
                <CardDescription>
                  {dict.skills.tabs.Database.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.database.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {dict.skills.levels[skill.level]}
                      </span>
                    </div>
                    <Progress
                      value={getSkillPercent(skill.level)}
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="other" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{dict.skills.tabs.Other.title}</CardTitle>
                <CardDescription>
                  {dict.skills.tabs.Other.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.other.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {dict.skills.levels[skill.level]}
                      </span>
                    </div>
                    <Progress
                      value={getSkillPercent(skill.level)}
                      className="h-2"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
