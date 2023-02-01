import React from "react";
import { Box, ButtonGroup, Heading, Image, Stack } from "@chakra-ui/react";
import { headingContainer, imageStyle, LinkButton } from "./style";

const CertificateCard = ({ certificate }) => {
  const { img, title, link } = certificate;

  return (
    <Box bg={"gray.50"} boxShadow="dark-lg" rounded="md">
      <Stack>
        <Box px="4" pt="4">
          <Image
            {...imageStyle}
            src={img}
            alt={title}
            height={{ base: "auto", md: "200px" }}
            w="full"
            _hover={{
              transform: "scale(1.02)",
              boxShadow: "lg",
            }}
          />
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
