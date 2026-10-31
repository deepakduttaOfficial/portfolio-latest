import { Box, Container, Flex, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import projects from "../../data/project";
import ProjectCard from "../Card/ProjectCard";

const ProjectSection = () => (
  <Box
    as="section"
    id="project"
    className="technical-grid-fine"
    scrollMarginTop="5rem"
    bg="graphite"
    borderBottom="1px solid"
    borderColor="line"
  >
    <Container maxW="8xl" py={{ base: "24", md: "32", xl: "36" }}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(12, minmax(0, 1fr))" }}
        gap={{ base: "9", md: "6" }}
        alignItems="end"
        mb={{ base: "20", md: "28" }}
      >
        <Stack gridColumn={{ md: "1 / 9" }} spacing="7">
          <Text color="accent" fontFamily="mono" fontSize="xs" fontWeight="700" letterSpacing="0.14em" textTransform="uppercase">
            01 — Selected systems
          </Text>
          <Heading
            as="h2"
            color="ivory"
            maxW="5xl"
            fontSize={{ base: "5xl", md: "7xl", xl: "8xl" }}
            lineHeight="0.9"
            letterSpacing="-0.07em"
            textTransform="uppercase"
          >
            Built to work.
            <Box as="span" display="block" color="muted">
              Built to hold.
            </Box>
          </Heading>
        </Stack>

        <Stack gridColumn={{ md: "10 / 13" }} spacing="5" borderTop="1px solid" borderColor="line" pt="5">
          <Flex align="baseline" justify="space-between" gap="4">
            <Text color="ivory" fontFamily="heading" fontSize={{ base: "4xl", md: "5xl" }} lineHeight="1">
              {String(projects.length).padStart(2, "0")}
            </Text>
            <Text color="muted" fontFamily="mono" fontSize="10px" letterSpacing="0.1em" textTransform="uppercase">
              Case studies
            </Text>
          </Flex>
          <Text color="muted" fontSize="sm" lineHeight="1.75">
            Open-source projects hosted on Github and deployed on Netlify.
          </Text>
        </Stack>
      </Grid>

      <Box>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </Box>
    </Container>
  </Box>
);

export default ProjectSection;
