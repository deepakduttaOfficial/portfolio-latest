import { AspectRatio, Box, Flex, Heading, Image, Link, Stack, Text, Wrap, WrapItem } from "@chakra-ui/react";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { externalLinkStyle } from "./style";

const ProjectCard = ({ project, index }) => {
  const { img, title, desc, deploy, source, tech } = project;

  return (
    <Box as="article" borderTop="1px solid" borderColor="line" pt="4">
      <Flex justify="space-between" align="baseline" mb="4" gap="4">
        <Text fontFamily="mono" fontSize="xs" color="muted">
          {String(index + 1).padStart(2, "0")}
        </Text>
        <Wrap justify="flex-end" spacingX="3" spacingY="1">
          {tech.map((item) => (
            <WrapItem key={item}>
              <Text fontFamily="mono" fontSize="10px" color="muted" textTransform="uppercase" letterSpacing="0.08em">
                {item}
              </Text>
            </WrapItem>
          ))}
        </Wrap>
      </Flex>

      <AspectRatio ratio={16 / 10} overflow="hidden" bg="sand">
        <Image
          src={img}
          alt={`${title} interface preview`}
          loading="lazy"
          decoding="async"
          objectFit="cover"
          transition="transform 220ms ease"
          _hover={{ transform: "scale(1.015)" }}
        />
      </AspectRatio>

      <Stack spacing="4" pt="6">
        <Heading as="h3" fontSize={{ base: "2xl", md: "3xl" }} lineHeight="1.1" letterSpacing="-0.03em">
          {title}
        </Heading>
        <Text color="muted" lineHeight="1.8">
          {desc}
        </Text>
        <Flex gap="6" wrap="wrap" pt="2">
          <Link href={deploy} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} live site`} sx={externalLinkStyle}>
            Live site <FiArrowUpRight aria-hidden="true" />
          </Link>
          <Link href={source} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} source code`} sx={externalLinkStyle}>
            Source <FiGithub aria-hidden="true" />
          </Link>
        </Flex>
      </Stack>
    </Box>
  );
};

export default ProjectCard;
