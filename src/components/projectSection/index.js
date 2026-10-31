import { SimpleGrid } from "@chakra-ui/react";
import projects from "../../data/project";
import ProjectCard from "../Card/ProjectCard";
import SectionContainer from "../sectionContainer";

const ProjectSection = () => (
  <SectionContainer
    id="project"
    sectionNumber="01"
    heading="Selected work"
    subHeading="Open-source projects hosted on Github and deployed on Netlify."
  >
    <SimpleGrid columns={{ base: 1, xl: 2 }} spacingX={{ base: "10", lg: "12" }} spacingY={{ base: "16", md: "20" }}>
      {projects.map((project, index) => (
        <ProjectCard key={project.title} project={project} index={index} />
      ))}
    </SimpleGrid>
  </SectionContainer>
);

export default ProjectSection;
