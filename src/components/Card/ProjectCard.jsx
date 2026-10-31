import {
  AspectRatio,
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { externalLinkStyle } from "./style";

const ProjectCard = ({ project, index }) => {
  const { img, title, desc, deploy, source, tech } = project;
  const reverse = index % 2 === 1;
  const projectNumber = String(index + 1).padStart(2, "0");

  return (
    <Box
      as="article"
      id={`project-${projectNumber}`}
      scrollMarginTop="6rem"
      role="group"
      py={{ base: "16", md: "24", xl: "28" }}
      borderTop="1px solid"
      borderColor="line"
    >
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(12, minmax(0, 1fr))" }}
        gap={{ base: "10", lg: "8", xl: "14" }}
        alignItems="center"
      >
        <Box
          gridColumn={{ lg: reverse ? "6 / 13" : "1 / 8" }}
          gridRow={{ lg: "1" }}
          order={{ base: 1, lg: reverse ? 2 : 1 }}
          position="relative"
        >
          <Box
            position="absolute"
            top={{ base: "-3", md: "-5" }}
            left={reverse ? "auto" : { base: "3", md: "5" }}
            right={reverse ? { base: "3", md: "5" } : "auto"}
            w="28%"
            h={{ base: "3", md: "5" }}
            bg="accent"
            opacity="0.8"
          />
          <Box
            position="relative"
            bg="var(--panel-strong)"
            border="1px solid"
            borderColor="line"
            p={{ base: "2", md: "3" }}
            transition="border-color 220ms ease, transform 220ms ease"
            _groupHover={{ borderColor: "rgba(183, 255, 60, 0.62)", transform: "translateY(-4px)" }}
          >
            <Flex
              align="center"
              justify="space-between"
              h={{ base: "9", md: "11" }}
              px={{ base: "2", md: "3" }}
              borderBottom="1px solid"
              borderColor="line"
            >
              <Flex gap="2" aria-hidden="true">
                <Box boxSize="5px" bg="accent" />
                <Box boxSize="5px" bg="rgba(241, 238, 230, 0.28)" />
                <Box boxSize="5px" bg="rgba(241, 238, 230, 0.14)" />
              </Flex>
              <Text color="muted" fontFamily="mono" fontSize="9px" letterSpacing="0.1em">
                BUILD / {projectNumber}
              </Text>
            </Flex>
            <AspectRatio ratio={16 / 10} overflow="hidden" bg="canvas">
              <Image
                src={img}
                alt={`${title} interface preview`}
                loading="lazy"
                decoding="async"
                objectFit="cover"
                transition="transform 500ms cubic-bezier(0.22, 1, 0.36, 1), filter 300ms ease"
                filter="saturate(0.78) contrast(1.04)"
                _groupHover={{ transform: "scale(1.025)", filter: "saturate(1) contrast(1.02)" }}
              />
            </AspectRatio>
          </Box>
        </Box>

        <Stack
          gridColumn={{ lg: reverse ? "1 / 6" : "9 / 13" }}
          gridRow={{ lg: "1" }}
          order={{ base: 2, lg: reverse ? 1 : 2 }}
          spacing={{ base: "6", md: "7" }}
          align="flex-start"
        >
          <Flex align="center" gap="4" w="full">
            <Text color="accent" fontFamily="mono" fontSize="xs" fontWeight="700" letterSpacing="0.12em">
              CASE / {projectNumber}
            </Text>
            <Box flex="1" h="1px" bg="line" />
          </Flex>

          <Heading
            as="h3"
            color="ivory"
            fontSize={{ base: "4xl", md: "5xl", xl: "6xl" }}
            lineHeight="0.95"
            letterSpacing="-0.055em"
            textTransform="uppercase"
          >
            {title}
          </Heading>
          <Text color="muted" fontSize={{ base: "md", md: "lg" }} lineHeight="1.8">
            {desc}
          </Text>

          <Wrap spacingX="2" spacingY="2">
            {tech.map((item) => (
              <WrapItem key={item}>
                <Text
                  px="3"
                  py="2"
                  color="ivory"
                  bg="rgba(241, 238, 230, 0.04)"
                  border="1px solid"
                  borderColor="line"
                  fontFamily="mono"
                  fontSize="10px"
                  letterSpacing="0.08em"
                  textTransform="uppercase"
                >
                  {item}
                </Text>
              </WrapItem>
            ))}
          </Wrap>

          <Flex gap="7" wrap="wrap" pt="2">
            <Link
              href={deploy}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} live site`}
              sx={externalLinkStyle}
            >
              Live system <FiArrowUpRight aria-hidden="true" />
            </Link>
            <Link
              href={source}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} source code`}
              sx={externalLinkStyle}
            >
              Source <FiGithub aria-hidden="true" />
            </Link>
          </Flex>
        </Stack>
      </Grid>
    </Box>
  );
};

export default ProjectCard;
