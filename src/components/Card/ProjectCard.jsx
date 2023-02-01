import React, { useState } from "react";
import {
  Badge,
  Box,
  ButtonGroup,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CodeButton, headingContainer, imageStyle, LinkButton } from "./style";

const ProjectCard = ({ project }) => {
  const { img, title, desc, deploy, source, tech } = project;
  const [loading, setLoading] = useState(true);
  const imageLoaded = () => {
    setLoading(false);
  };
  return (
    <Box bg={"gray.50"} boxShadow="dark-lg" rounded="md">
      <Stack>
        <Box px="4" pt="4">
          <Image
            {...imageStyle}
            src={img}
            alt={title}
            onLoad={imageLoaded}
            height={loading && "180px"}
            _hover={{
              transform: "scale(1.02)",
              boxShadow: "lg",
            }}
          />
          {tech.map((item, index) => (
            <Badge
              key={index}
              variant="outline"
              colorScheme={"blue"}
              mr="2"
              px="2"
              mt="2"
            >
              {item}
            </Badge>
          ))}
        </Box>
        <Stack {...headingContainer}>
          <Heading
            size="26px"
            letterSpacing="1px"
            textTransform="uppercase"
            fontWeight="semibold"
          >
            {title}
          </Heading>
          <Text>{desc}</Text>
        </Stack>

        <ButtonGroup spacing="4" px="4" pb={"5"} pt="2">
          <LinkButton href={deploy}>Link</LinkButton>
          <CodeButton href={source}>Source</CodeButton>
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export default ProjectCard;
