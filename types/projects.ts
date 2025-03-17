export interface IProjects {
  name: string;
  description: {
    en: string;
    de: string;
  };
  imgSrc: string;
  imgAlt: string;
  stack: string[];
  repoUrl: string;
}
