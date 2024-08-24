import { List, ListItem, Text, Title } from "@mantine/core";
import React from "react";
import SkillsList from "./SkillsList";

const SkillsSection = () => {
  return (
    <div id="skills-section">
      <Title>Skills</Title>
      <SkillsList />
    </div>
  );
};

export default SkillsSection;
