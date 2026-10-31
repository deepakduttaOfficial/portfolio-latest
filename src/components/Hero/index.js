import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowDownRight, FiArrowUpRight } from "react-icons/fi";
import { heroImage } from "assets";

const MotionBox = motion(Box);

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const motionProps = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        animate: { opacity: 1, y: 0 },
      };

  return (
    <Box
      as="section"
      id="top"
      className="technical-grid grain"
      position="relative"
      overflow="hidden"
      bg="canvas"
      minH={{ base: "auto", lg: "calc(100svh - 81px)" }}
      borderBottom="1px solid"
      borderColor="line"
    >
      <Box
        aria-hidden="true"
        position="absolute"
        top={{ base: "5", lg: "8" }}
        right={{ base: "5", lg: "8" }}
        color="muted"
        fontFamily="mono"
        fontSize="9px"
        letterSpacing="0.14em"
        textTransform="uppercase"
      >
        X 28.7041 / Y 77.1025
      </Box>

      <Container maxW="8xl" position="relative" py={{ base: "16", md: "20", lg: "10" }}>
        <Grid
          templateColumns={{ base: "1fr", lg: "repeat(12, minmax(0, 1fr))" }}
          alignItems="center"
          gap={{ base: "12", lg: "6" }}
          minH={{ lg: "calc(100svh - 161px)" }}
        >
          <MotionBox
            {...motionProps}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            gridColumn={{ lg: "1 / 9" }}
            gridRow={{ lg: "1" }}
            position="relative"
            zIndex="2"
            pt={{ base: "8", lg: "0" }}
          >
            <Text
              mb={{ base: "6", md: "8" }}
              color="accent"
              fontFamily="mono"
              fontSize={{ base: "10px", md: "xs" }}
              fontWeight="700"
              letterSpacing="0.15em"
              textTransform="uppercase"
            >
              00 — Portfolio / system online
            </Text>
            <Heading
              as="h1"
              color="ivory"
              fontSize={{ base: "58px", sm: "74px", md: "104px", lg: "clamp(96px, 10.4vw, 158px)" }}
              lineHeight="0.76"
              letterSpacing="-0.085em"
              fontWeight="900"
              textTransform="uppercase"
            >
              <Box as="span" display="block">
                Deepak
              </Box>
              <Box
                as="span"
                display="block"
                ml={{ base: "0", md: "8", lg: "16" }}
                color="transparent"
                sx={{ WebkitTextStroke: "1.5px var(--ivory)" }}
              >
                Dutta
              </Box>
            </Heading>

            <Grid
              mt={{ base: "9", md: "12" }}
              templateColumns={{ base: "1fr", md: "minmax(240px, 0.72fr) 1fr" }}
              gap={{ base: "7", md: "10" }}
              maxW="4xl"
              alignItems="end"
            >
              <Text
                maxW="lg"
                color="ivory"
                fontSize={{ base: "lg", md: "2xl" }}
                lineHeight="1.45"
                letterSpacing="-0.02em"
              >
                React Native &amp; Full Stack JavaScript Developer
              </Text>
              <Stack spacing="5" borderLeft={{ md: "1px solid" }} borderColor="line" pl={{ md: "7" }}>
                <Text color="muted" fontSize={{ base: "sm", md: "md" }} lineHeight="1.75">
                  Building reliable applications and solutions that work smoothly across devices.
                </Text>
                <Flex gap="3" wrap="wrap">
                  <Button
                    as="a"
                    href="#project"
                    size="lg"
                    variant="accent"
                    rightIcon={<FiArrowDownRight aria-hidden="true" />}
                  >
                    Enter selected work
                  </Button>
                  <Button as="a" href="#aboutme" size="lg" variant="outline">
                    Profile
                  </Button>
                </Flex>
              </Stack>
            </Grid>
          </MotionBox>

          <MotionBox
            {...motionProps}
            transition={{ duration: 0.65, delay: reduceMotion ? 0 : 0.12, ease: [0.22, 1, 0.36, 1] }}
            gridColumn={{ lg: "8 / 13" }}
            gridRow={{ lg: "1" }}
            position="relative"
            alignSelf={{ lg: "stretch" }}
            minH={{ base: "390px", md: "520px", lg: "min(690px, calc(100svh - 190px))" }}
            zIndex="1"
          >
            <Box
              position="absolute"
              inset={{ base: "0", lg: "5% 0 0 8%" }}
              border="1px solid"
              borderColor="line"
              bg="#777a76"
              overflow="hidden"
            >
              <Box
                aria-hidden="true"
                position="absolute"
                inset="0"
                bgImage="linear-gradient(rgba(9, 11, 12, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(9, 11, 12, 0.08) 1px, transparent 1px)"
                bgSize="28px 28px"
                opacity="0.36"
                pointerEvents="none"
                zIndex="3"
              />
              <Image
                src={heroImage}
                alt="Deepak Dutta"
                position="absolute"
                inset="auto 0 0 0"
                w="full"
                h="full"
                objectFit="cover"
                objectPosition="center"
                loading="eager"
                decoding="async"
                filter="grayscale(1) contrast(1.04) brightness(1.18)"
                zIndex="2"
              />
              <Text
                position="absolute"
                top="4"
                left="4"
                zIndex="4"
                color="rgba(9, 11, 12, 0.72)"
                fontFamily="mono"
                fontSize="9px"
                fontWeight="700"
                letterSpacing="0.12em"
                textTransform="uppercase"
              >
                Portrait ref. DD-02
              </Text>
            </Box>

            <Box
              position="absolute"
              right={{ base: "-1px", lg: "-5" }}
              bottom={{ base: "-1px", lg: "4" }}
              zIndex="4"
              w={{ base: "76%", md: "58%", lg: "72%" }}
              bg="graphite"
              border="1px solid"
              borderColor="line"
              p={{ base: "4", md: "5" }}
            >
              <Text mb="2" color="muted" fontFamily="mono" fontSize="9px" letterSpacing="0.12em" textTransform="uppercase">
                Core stack
              </Text>
              <Text color="ivory" fontFamily="mono" fontSize={{ base: "11px", md: "xs" }} lineHeight="1.8">
                React Native / React / Node.js / MongoDB
              </Text>
              <Link
                href="https://github.com/deepakduttaOfficial"
                target="_blank"
                rel="noopener noreferrer"
                display="inline-flex"
                alignItems="center"
                gap="2"
                mt="3"
                color="accent"
                fontFamily="mono"
                fontSize="10px"
                fontWeight="700"
                letterSpacing="0.08em"
                textTransform="uppercase"
                _hover={{ color: "ivory", textDecoration: "none" }}
              >
                GitHub source <FiArrowUpRight aria-hidden="true" />
              </Link>
            </Box>
          </MotionBox>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
