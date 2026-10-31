import { Box, Button, Container, Flex, Heading, Link, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";

const MotionBox = motion(Box);

const Hero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <Box
      as="section"
      id="top"
      position="relative"
      overflow="hidden"
      bg="ink"
      color="paper"
      minH={{ base: "auto", lg: "calc(100svh - 73px)" }}
      borderBottom="1px solid"
      borderColor="ink"
    >
      <Box aria-hidden="true" position="absolute" inset="0" pointerEvents="none">
        <Box position="absolute" top="0" bottom="0" left={{ base: "8", md: "18%" }} borderLeft="1px solid" borderColor="whiteAlpha.200" />
        <Box position="absolute" top="0" bottom="0" right={{ base: "8", md: "18%" }} borderLeft="1px solid" borderColor="whiteAlpha.200" />
        <Box position="absolute" left="0" right="0" top="35%" borderTop="1px solid" borderColor="whiteAlpha.200" />
      </Box>

      <Container maxW="7xl" position="relative" py={{ base: "24", md: "28", lg: "20" }}>
        <SimpleGrid columns={{ base: 1, lg: 12 }} gap={{ base: "16", lg: "10" }} alignItems="end">
          <MotionBox
            gridColumn={{ lg: "span 9" }}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <Text mb="6" color="accent" fontFamily="mono" fontSize={{ base: "xs", md: "sm" }} fontWeight="700" letterSpacing="0.14em">
              REACT NATIVE / FULL-STACK JAVASCRIPT
            </Text>
            <Heading
              as="h1"
              maxW="5xl"
              fontSize={{ base: "5xl", sm: "6xl", md: "8xl", xl: "9xl" }}
              lineHeight={{ base: "0.98", md: "0.9" }}
              letterSpacing="-0.065em"
              fontWeight="600"
            >
              Deepak Dutta
            </Heading>
            <Text mt={{ base: "8", md: "10" }} maxW="2xl" color="whiteAlpha.800" fontSize={{ base: "lg", md: "2xl" }} lineHeight="1.5">
              React Native &amp; Full Stack JavaScript Developer
            </Text>
            <Flex mt="10" gap="4" wrap="wrap">
              <Button as="a" href="#project" variant="accent" rightIcon={<FiArrowDownRight aria-hidden="true" />}>
                View selected work
              </Button>
              <Button as="a" href="#aboutme" variant="heroOutline">
                About me
              </Button>
            </Flex>
          </MotionBox>

          <Stack gridColumn={{ lg: "span 3" }} spacing="5" borderTop="1px solid" borderColor="whiteAlpha.400" pt="5">
            <Text fontFamily="mono" fontSize="xs" color="whiteAlpha.600" letterSpacing="0.12em" textTransform="uppercase">
              Selected toolkit
            </Text>
            <Text color="whiteAlpha.900" fontSize="sm" lineHeight="1.9">
              React Native · React · Node.js · MongoDB
            </Text>
            <Link
              href="https://github.com/deepakduttaOfficial"
              target="_blank"
              rel="noopener noreferrer"
              display="inline-flex"
              alignItems="center"
              gap="2"
              alignSelf="flex-start"
              color="accent"
              fontFamily="mono"
              fontSize="xs"
              fontWeight="700"
              textTransform="uppercase"
              _focusVisible={{ outline: "3px solid", outlineColor: "accent", outlineOffset: "4px" }}
            >
              GitHub profile <FiArrowUpRight aria-hidden="true" />
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;
