import React from "react";
import { Grid, GridCol } from "@mantine/core";
import Skillitem from "./SkillItem";
import { ISkills } from "@/types/Skills";
import {
  DockerIcon,
  GithubIcon,
  GitIcon,
  GitlabIcon,
  GraphIcon,
  HardwareIcon,
  HTMLIcon,
  JSIcon,
  MantineIcon,
  MongoIcon,
  NetworkIcon,
  NextjsIcon,
  ReactIcon,
  SQLIcon,
  TSIcon,
  UbuntuIcon,
  VueIcon,
  WindowsIcon,
} from "./SkillIcons";
import { IconBrandGithub } from "@tabler/icons-react";

const SKILLS: ISkills[] = [
  {
    title: "React",
    description: "React bla",
    icon: <ReactIcon />,
  },
  {
    title: "Nextjs",
    description: "Nextjs bla",
    icon: <NextjsIcon />,
  },
  {
    title: "HTML",
    description: "Nextjs bla",
    icon: <HTMLIcon />,
  },
  {
    title: "Typescript",
    description: "Typescript bla",
    icon: <TSIcon />,
  },
  {
    title: "Javascript",
    description: "Javascript bla",
    icon: <JSIcon />,
  },
  {
    title: "Mantine",
    description: "Mantine bla",
    icon: <MantineIcon />,
  },
  {
    title: "Vue",
    description: "Vue bla",
    icon: <VueIcon />,
  },
  {
    title: "GrapQL",
    description: "GrapQL bla",
    icon: <GraphIcon />,
  },
  {
    title: "Docker",
    description: "Docker bla",
    icon: <DockerIcon />,
  },
  {
    title: "Git",
    description: "Git bla",
    icon: <GitIcon />,
  },
  {
    title: "Github",
    description: "Git bla",
    icon: <GithubIcon />,
  },
  {
    title: "Gitlab",
    description: "Git bla",
    icon: <GitlabIcon />,
  },
  {
    title: "SQL",
    description: "SQL bla",
    icon: <SQLIcon />,
  },
  {
    title: "Mongo",
    description: "Mongo bla",
    icon: <MongoIcon />,
  },
  {
    title: "Windows",
    description: "Windows bla",
    icon: <WindowsIcon />,
  },
  {
    title: "Linux",
    description: "Linux bla",
    icon: <UbuntuIcon />,
  },
  {
    title: "Hardware",
    description: "Hardware bla",
    icon: <HardwareIcon />,
  },
  {
    title: "Network",
    description: "Network bla",
    icon: <NetworkIcon />,
  },
];

const SkillsList = () => {
  return (
    <Grid>
      {SKILLS.map((skill) => (
        <GridCol key={`Skill_${skill.title}`} span={3}>
          <Skillitem
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        </GridCol>
      ))}
    </Grid>
  );
};

export default SkillsList;
