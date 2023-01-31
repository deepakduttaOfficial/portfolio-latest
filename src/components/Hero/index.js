import React from "react";
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import ParticaleBackground from "../ParticaleBackground";
import {
  buttonStyle,
  containerStyle,
  headingStyle,
  subHeadingStyle,
} from "./style";

const Hero = () => {
  return (
    <>
      <VStack sx={containerStyle} spacing="5">
        <Box textAlign={"center"}>
          <Heading sx={headingStyle}>Deepak Dutta</Heading>
          <Text sx={subHeadingStyle}>Full Stack JavaScript Developer</Text>
        </Box>
        <Button sx={buttonStyle} variant="ghost">
          Know more
        </Button>
      </VStack>
      <ParticaleBackground />
    </>
  );
};

export default Hero;
