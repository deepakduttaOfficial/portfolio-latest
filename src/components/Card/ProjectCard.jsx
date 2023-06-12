import React, { useState, useEffect } from "react";
import {
  Badge,
  Box,
  ButtonGroup,
  Heading,
  Image as ChakraImage,
  Stack,
  Text,
} from "@chakra-ui/react";
import { CodeButton, headingContainer, imageStyle, LinkButton } from "./style";
import { Blurhash } from "react-blurhash";

const ProjectCard = ({ project }) => {
  const { img, blurHash, title, desc, deploy, source, tech } = project;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = img;
    const handleImageLoad = () => {
      setLoaded(true);
    };
    image.addEventListener("load", handleImageLoad);
    return () => {
      image.removeEventListener("load", handleImageLoad);
    };
  }, [img]);
  return (
    <Box bg={"gray.50"} boxShadow="dark-lg" rounded="md">
      <Stack>
        <Box px="4" pt="4">
          {loaded ? (
            <ChakraImage
              {...imageStyle}
              src={img}
              alt={title}
              _hover={{
                transform: "scale(1.02)",
                boxShadow: "lg",
              }}
              loading="lazy"
            />
          ) : (
            <Blurhash
              hash={blurHash}
              width={"100%"}
              height={200}
              resolutionX={32}
              resolutionY={32}
              punch={1}
            />
          )}
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
