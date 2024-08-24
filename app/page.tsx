import React from "react";
import { Button, Divider } from "@mantine/core";
import AboutMeSection from "@/components/AboutMeSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
const page = () => {
  return (
    <main>
      <AboutMeSection />
      <Divider mb="lg" />
      <SkillsSection />
      <Divider mt="lg" mb="lg" />
      <ProjectsSection />
      <Divider mt="lg" mb="lg" />
      <ContactSection />
    </main>
  );
};

export default page;
