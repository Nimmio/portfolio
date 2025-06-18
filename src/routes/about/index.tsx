import PageHeader from "@/components/pageHeader/page-header";
import SocialsAndMail from "@/components/socialsAndMail/socials-and-mail";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getAboutMe, getInfos } from "@/lib/utils";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/about/")({
  component: RouteComponent,
  loader: async () => await Promise.all([getInfos(), getAboutMe()]),
});

function RouteComponent() {
  const [info, aboutMe] = Route.useLoaderData();
  return (
    <div className="container px-4 py-12 md:px-6 md:py-16 mx-auto">
      <PageHeader title="About Me" />

      <div className="grid gap-8 md:grid-cols-[2fr_3fr]">
        <div className="space-y-6">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <img
              src="/images/profil.jpeg"
              alt="Profile picture"
              className="object-cover"
            />
          </div>
          <SocialsAndMail
            github={info.github}
            linkedin={info.linkedin}
            mail={info.Email}
          />
        </div>

        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Hello, I'm {info.Name}</h2>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              {aboutMe.aboutMe.map((aboutMeParagraph, index) => (
                <p key={`aboutMeParagraph_${index}`}>{aboutMeParagraph}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-6">
              {aboutMe.experience.map((expierence) => (
                <Card key={`${expierence.company}_${expierence.jobTitle}`}>
                  <CardContent className="pt-6">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-bold">{expierence.jobTitle}</h3>
                      <span className="text-slate-500 dark:text-slate-400">
                        {expierence.time}
                      </span>
                    </div>
                    <h4 className="text-slate-600 dark:text-slate-300 mb-2">
                      {expierence.company}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Education</h2>
            <div className="space-y-6">
              {aboutMe.education.map((education) => (
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex justify-between mb-2">
                      <h3 className="font-bold">{education.title}</h3>
                      <span className="text-slate-500 dark:text-slate-400">
                        {education.time}
                      </span>
                    </div>
                    <h4 className="text-slate-600 dark:text-slate-300">
                      {education.instituation}
                    </h4>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
