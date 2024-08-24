"use client";
import { AppShell, Burger, Container } from "@mantine/core";
import Navbar from "../Navbar";

const LayoutShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header>
        <Container size={"xl"}>
          <Navbar />
        </Container>
      </AppShell.Header>
      <AppShell.Main>
        <Container size={"xl"}>{children}</Container>
      </AppShell.Main>
    </AppShell>
  );
};
export default LayoutShell;
