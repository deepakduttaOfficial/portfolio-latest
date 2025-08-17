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
    <div>
      <ParticaleBackground />

      <VStack sx={containerStyle} spacing="5">
        <Box textAlign={"center"}>
          <Heading sx={headingStyle}>Deepak Dutta</Heading>
          <Text sx={subHeadingStyle}>
            React Native & Full Stack JavaScript Developer
          </Text>
        </Box>
        <Button
          sx={buttonStyle}
          variant="ghost"
          as={"a"}
          href="#aboutme"
          textDecoration="none"
          _hover={{ textDecoration: "none" }}
        >
          Know more
        </Button>
      </VStack>
    </div>
  );
};

export default Hero;
