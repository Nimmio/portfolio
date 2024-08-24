import { Button, Center, Group } from "@mantine/core";
import React from "react";
import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <>
      <Center h="60" inline>
        <Group>
          <NavbarButton label="About Me" href="#about-me-section" />
          <NavbarButton label="Skills" href="#skills-section" />
          <NavbarButton label="Projects" href="#projects-section" />
          <NavbarButton label="Contact" href="#contact-section" />
        </Group>
      </Center>
    </>
  );
};

export default Navbar;
