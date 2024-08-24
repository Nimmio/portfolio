import { Grid, GridCol } from "@mantine/core";
import React from "react";
import AboutMePicture from "./AboutMePicture";
import AboutMeText from "./AboutMeText";

const AboutMeSection = () => {
  return (
    <div id="about-me-section">
      <Grid>
        <GridCol span={4}>
          <AboutMePicture />
        </GridCol>
        <GridCol span={8}>
          <AboutMeText />
        </GridCol>
      </Grid>
    </div>
  );
};

export default AboutMeSection;
