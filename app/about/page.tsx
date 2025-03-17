import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function AboutPage() {
  const experiences = [
    {
      title: "Senior Entwickler Webtechnologien",
      company: "Thanera GmbH",
      period: "2022 - 2024",
    },
    {
      title: "Fachinformatiker Anwendungsentwicklung",
      company: "opendynamic GmbH & Co. KG",
      period: "2019 - 2021",
    },
  ];

  const education = [
    {
      degree: "Fachabitur - Assistent der Informatik",
      institution: "BBS Bad Bergzabern",
      period: "2007 – 2010",
    },

    {
      degree: "Studium - Angewandte Informatik",
      institution: "Hochschule Zweibrücken",
      period: "2011 – 2013",
    },

    {
      degree: "Ausbildung - Fachinformatiker Anwendungsentwicklung",
      institution: "ProCRM IT Systems GmbH",
      period: "08.2016 – 07.2018",
    },

    {
      degree: "Ausbildung - Fachinformatiker Anwendungsentwicklung",
      institution: "opendynamic GmbH & Co. KG",
      period: "2018 – 2019",
    },
  ];
  const name = process.env.NAME || "";
  const job = process.env.JOB || "";

  return (
    <div className=" py-12 p-8">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col items-center md:w-1/3">
          <div className="relative h-60 w-60 overflow-hidden rounded-full">
            <Image
              src="/avatar/profile.jpeg"
              alt={name}
              width={240}
              height={240}
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-6 text-center">
            <h1 className="text-3xl font-bold">{name}</h1>
            <p className="text-xl text-muted-foreground">{job}</p>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">About Me</h2>
              <div className="mt-4 space-y-4">
                <p>
                  Innovative Fullstack web developer with expertise in Next.js
                  and React for building dynamic user interfaces, and Node.js
                  for robust back-end solutions. Proficient in modern front-end
                  and back-end technologies, with a strong commitment to
                  adhering to current web standards and implementing advanced
                  development techniques.
                </p>
              </div>
            </div>
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>
              <TabsContent value="experience" className="mt-6 space-y-6">
                {experiences.map((exp, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <Briefcase className="mr-4 h-5 w-5 text-primary" />
                        <div>
                          <h3 className="font-bold">{exp.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {exp.company} | {exp.period}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="education" className="mt-6 space-y-6">
                {education.map((edu, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <GraduationCap className="mr-4 h-5 w-5 text-primary" />
                        <div>
                          <h3 className="font-bold">{edu.degree}</h3>
                          <p className="text-sm text-muted-foreground">
                            {edu.institution} | {edu.period}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
