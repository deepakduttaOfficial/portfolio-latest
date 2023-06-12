import React, { useState, useEffect } from "react";
import {
  Box,
  ButtonGroup,
  Heading,
  Image as ChakraImage,
  Stack,
} from "@chakra-ui/react";
import { headingContainer, imageStyle, LinkButton } from "./style";
import { Blurhash } from "react-blurhash";

const CertificateCard = ({ certificate }) => {
  const { img, title, link, blurHash } = certificate;
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
              height={{ base: "auto", md: "200px" }}
              w="full"
              loading="lazy"
              _hover={{
                transform: "scale(1.02)",
                boxShadow: "lg",
              }}
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
        </Stack>

        <ButtonGroup spacing="4" px="4" pb={"5"} pt="2">
          <LinkButton href={link}>Link</LinkButton>
        </ButtonGroup>
      </Stack>
    </Box>
  );
};

export default CertificateCard;
