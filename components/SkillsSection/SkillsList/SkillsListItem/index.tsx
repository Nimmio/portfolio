import { ListItem, Text } from "@mantine/core";
import React from "react";

interface SkillsListItemProps {
  title: string;
  text: string;
}

const SkillsListItem = ({ title, text }: SkillsListItemProps) => {
  return (
    <>
      <ListItem>
        <Text fw={700}>{title}</Text>
        <Text>{text}</Text>
      </ListItem>
    </>
  );
};

export default SkillsListItem;
