import { Github, Linkedin, Mail } from "lucide-react";
import React from "react";

interface SocialsAndMailProps {
  github: string;
  linkedin: string;
  mail: string;
}

const SocialsAndMail = ({ github, linkedin, mail }: SocialsAndMailProps) => {
  return (
    <div className="justify-center flex space-x-4 mt-6">
      <a href={github} target="_blank" rel="noopener noreferrer">
        <Github className="h-6 w-6 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50" />
        <span className="sr-only">GitHub</span>
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <Linkedin className="h-6 w-6 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50" />
        <span className="sr-only">LinkedIn</span>
      </a>
      <a href={`mailto:${mail}`}>
        <Mail className="h-6 w-6 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50" />
        <span className="sr-only">Email</span>
      </a>
    </div>
  );
};

export default SocialsAndMail;
