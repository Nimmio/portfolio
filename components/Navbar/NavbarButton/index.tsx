import { Button } from "@mantine/core";
import Link from "next/link";
import React from "react";

interface NavbarButtonProps {
  label: string;
  href: string;
}
const NavbarButton = ({ label, href }: NavbarButtonProps) => {
  return (
    <Button
      component={Link}
      variant="transparent"
      href={href}
      pl="0"
      pr="0"
      mr="36"
    >
      {label}
    </Button>
  );
};

export default NavbarButton;
