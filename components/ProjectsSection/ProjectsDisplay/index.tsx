import { Grid } from "@mantine/core";
import React from "react";
import ProjectsDisplayItem from "./ProjectsDisplayItem";

const ProjectsDisplay = () => {
  return (
    <>
      <Grid>
        <ProjectsDisplayItem
          title="Portfolio"
          alt="PortfolioImage"
          description="This Portfolio"
        />
        <ProjectsDisplayItem
          title="Bewerbung"
          alt="BewerbungImage"
          description="A application Manager"
        />
        <ProjectsDisplayItem
          title="YATA"
          alt="YataImage"
          description="Yet Another Todo App"
        />
        <ProjectsDisplayItem
          title="Minikan"
          alt="minikanImage"
          description="Very Simple Kanban App"
        />
        <ProjectsDisplayItem
          title="Time Manager"
          alt="TimeManagerImage"
          description="Time Managment App"
        />
      </Grid>
    </>
  );
};

export default ProjectsDisplay;
