import { ISkills } from "@/types/Skills";
import { Card, CardSection, Center, Text } from "@mantine/core";
import React from "react";

const Skillitem = ({ icon, title, description }: ISkills) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <CardSection>
        <Center>{icon}</Center>
      </CardSection>
      <Text fw={500} size="lg" mt="md">
        {title}
      </Text>
      <Text size="sm" c="dimmed">
        {description}
      </Text>
    </Card>
  );
};

export default Skillitem;
