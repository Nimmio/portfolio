import { GridCol, Image, Text } from "@mantine/core";
import React from "react";
interface ProjectsDisplayItemProps {
  title: string;
  image?: HTMLImageElement | String | File;
  alt: string;
  description: string;
}
const ProjectsDisplayItem = ({
  title,
  image,
  alt,
  description,
}: ProjectsDisplayItemProps) => {
  return (
    <GridCol span={6}>
      <Image
        h="20em"
        src={image}
        alt={alt}
        style={{ border: "1px solid black" }} //Debug
      />
      <Text fw="700">{title}</Text>
      <Text mah="3em">{description}</Text>
    </GridCol>
  );
};

export default ProjectsDisplayItem;
