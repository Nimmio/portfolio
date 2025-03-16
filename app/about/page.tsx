import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Briefcase, GraduationCap, Award } from "lucide-react";

export default function AboutPage() {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead the frontend development team in building responsive web applications using React and Next.js. Implemented CI/CD pipelines and improved performance by 40%.",
    },
    {
      title: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed and maintained full-stack applications using the MERN stack. Collaborated with UX designers to implement responsive designs and improve user experience.",
    },
    {
      title: "Junior Web Developer",
      company: "WebCraft Agency",
      period: "2016 - 2018",
      description:
        "Built and maintained client websites using HTML, CSS, JavaScript, and WordPress. Participated in client meetings and implemented feedback.",
    },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description:
        "Specialized in Web Technologies and Human-Computer Interaction. Graduated with honors.",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "State University",
      period: "2010 - 2014",
      description:
        "Focused on software development methodologies and programming fundamentals. Participated in multiple hackathons.",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      year: "2022",
    },
    {
      name: "Professional Scrum Master I",
      issuer: "Scrum.org",
      year: "2021",
    },
    {
      name: "Google UX Design Professional Certificate",
      issuer: "Google",
      year: "2020",
    },
    {
      name: "MongoDB Certified Developer",
      issuer: "MongoDB University",
      year: "2019",
    },
  ];

  return (
    <div className=" py-12">
      <div className="flex flex-col gap-8 md:flex-row">
        <div className="flex flex-col items-center md:w-1/3">
          <div className="relative h-60 w-60 overflow-hidden rounded-full">
            <Image
              src="/placeholder.svg?height=240&width=240"
              alt="John Doe"
              width={240}
              height={240}
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-6 text-center">
            <h1 className="text-3xl font-bold">John Doe</h1>
            <p className="text-xl text-muted-foreground">
              Full Stack Developer & UI/UX Designer
            </p>
            <div className="mt-4">
              <Button asChild>
                <Link href="/resume.pdf" target="_blank">
                  <Download className="mr-2 h-4 w-4" /> Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="md:w-2/3">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">About Me</h2>
              <div className="mt-4 space-y-4">
                <p>
                  I'm a passionate Full Stack Developer with over 7 years of
                  experience in building web applications. I specialize in
                  creating responsive, accessible, and performant user
                  interfaces using modern technologies.
                </p>
                <p>
                  My journey in web development started during my university
                  years, where I discovered my passion for creating digital
                  experiences. Since then, I've worked with various companies
                  and clients, helping them bring their ideas to life.
                </p>
                <p>
                  When I'm not coding, you can find me hiking, reading science
                  fiction, or experimenting with new technologies. I'm always
                  eager to learn and grow, both professionally and personally.
                </p>
              </div>
            </div>
            <Tabs defaultValue="experience" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="certifications">Certifications</TabsTrigger>
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
                          <p className="mt-2">{exp.description}</p>
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
                          <p className="mt-2">{edu.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="certifications" className="mt-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  {certifications.map((cert, index) => (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <Award className="mr-4 h-5 w-5 text-primary" />
                          <div>
                            <h3 className="font-bold">{cert.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {cert.issuer} | {cert.year}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
