import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SkillsPage() {
  const frontendSkills = [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Tailwind CSS", level: 90 },
    { name: "TypeScript", level: 75 },
  ];

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 80 },
    { name: "Python", level: 70 },
    { name: "Django", level: 65 },
    { name: "GraphQL", level: 75 },
    { name: "RESTful APIs", level: 90 },
  ];

  const databaseSkills = [
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 80 },
    { name: "MySQL", level: 75 },
    { name: "Firebase", level: 85 },
    { name: "Redis", level: 70 },
    { name: "Prisma", level: 80 },
  ];

  const otherSkills = [
    { name: "Git/GitHub", level: 90 },
    { name: "Docker", level: 75 },
    { name: "CI/CD", level: 80 },
    { name: "AWS", level: 70 },
    { name: "UI/UX Design", level: 85 },
    { name: "Agile/Scrum", level: 80 },
  ];

  return (
    <div className=" py-12">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-extrabold tracking-tight lg:text-5xl">
            Skills
          </h1>
          <p className="text-xl text-muted-foreground">
            My technical skills and expertise across different domains.
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
                <CardTitle>Frontend Development</CardTitle>
                <CardDescription>
                  My skills in building responsive, accessible, and performant
                  user interfaces.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {frontendSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="backend" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Backend Development</CardTitle>
                <CardDescription>
                  My skills in server-side programming, API development, and
                  system architecture.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {backendSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="database" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Database & Data Management</CardTitle>
                <CardDescription>
                  My skills in database design, optimization, and data modeling.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {databaseSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="other" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Other Technical Skills</CardTitle>
                <CardDescription>
                  Additional skills including DevOps, design, and project
                  management.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {otherSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
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
