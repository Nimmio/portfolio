export interface infos {
  Name: string;
  Email: string;
  github: string;
  linkedin: string;
  Job: string;
  location: string;
}

export interface skills {
  AllSkills: Array<{
    groupTitle: string;
    description: string;
    skills: string[];
  }>;
  FeaturedSkills: string[];
}

export interface about {
  aboutMe: string[];
  experience: Array<{
    jobTitle: string;
    company: string;
    time: string;
  }>;
  education: Array<{
    title: string;
    instituation: string;
    time: string;
  }>;
}

export type projects = Array<{
  name: string;
  featured?: boolean;
  description: {
    en: string;
    de: string;
  };
  imgSrc: string;
  stack: string[];
  repoUrl: string;
  demoUrl?: string;
}>;
