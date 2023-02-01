import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { containerStyle, headingStyle, subHeadingStyle } from "./style";

const SectionContainer = ({
  heading,
  subHeading,
  child,
  children,
  ...rest
}) => {
  return (
    <Box sx={containerStyle}>
      <VStack spacing={"10"} alignItems="start">
        <VStack {...rest} mx={"auto"}>
          <Heading sx={headingStyle}>{heading}</Heading>
          <Text sx={subHeadingStyle}>{subHeading}</Text>
        </VStack>
        <Box>{children}</Box>
      </VStack>
    </Box>
  );
};

export default SectionContainer;
