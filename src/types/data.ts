export interface infos {
  Name: string;
  Email: string;
  github: string;
  linkedin: string;
  Job: string;
  location: { en: string; de: string };
}

export interface skills {
  AllSkills: Array<{
    groupTitle: { de: string; en: string };
    description: string;
    skills: string[];
  }>;
  FeaturedSkills: string[];
}

export interface about {
  aboutMe: { en: string[]; de: string[] };
  experience: Array<{
    jobTitle: string;
    company: string;
    time: string;
  }>;
  education: Array<{
    title: { en: string; de: string };
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

export interface legal {
  street: string;
  city: string;
  country: { en: string; de: string };
  lastUpdate: string;
  website: string;
}
