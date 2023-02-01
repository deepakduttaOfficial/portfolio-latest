import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import { containerStyle, headingStyle, subHeadingStyle } from "./style";

const SectionContainer = ({
  heading,
  subHeading,
  child,
  children,
  id,
  opacity,
  ...rest
}) => {
  return (
    <Box sx={containerStyle} id={id} opacity={opacity}>
      <VStack spacing={"10"} alignItems="start" w="full">
        <VStack {...rest} mx={"auto"}>
          <Heading sx={headingStyle}>{heading}</Heading>
          <Text sx={subHeadingStyle}>{subHeading}</Text>
        </VStack>
        <Box w="full">{children}</Box>
      </VStack>
    </Box>
  );
};

export default SectionContainer;
