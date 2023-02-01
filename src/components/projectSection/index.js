import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import projects from "../../data/project";
import ProjectCard from "../Card/ProjectCard";
import SectionContainer from "../sectionContainer";

const ProjectSection = () => {
  const data = {
    heading: "Project",
    subHeading:
      "Open-source projects hosted on Github and deployed on Netlify.",
  };

  return (
    <SectionContainer {...data} mt="5">
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={10}
        px="10"
      >
        {projects.map((project, index) => {
          return (
            <GridItem w="100%" key={index}>
              <ProjectCard project={project} />
            </GridItem>
          );
        })}
      </Grid>
    </SectionContainer>
  );
};

export default ProjectSection;
