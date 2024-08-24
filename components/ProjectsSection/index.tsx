import { Title } from "@mantine/core";
import React from "react";
import ProjectsDisplay from "./ProjectsDisplay";

const ProjectsSection = () => {
  return (
    <div id="projects-section">
      <Title>Projects</Title>
      <ProjectsDisplay />
    </div>
  );
};

export default ProjectsSection;
