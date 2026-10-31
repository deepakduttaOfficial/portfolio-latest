import { Box, Container, Flex, Grid, Heading, Link, Stack, Text } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";

const FooterSection = () => (
  <Box id="footer" as="footer" className="technical-grid" bg="canvas" position="relative" overflow="hidden">
    <Container maxW="8xl" py={{ base: "20", md: "28" }}>
      <Grid
        templateColumns={{ base: "1fr", lg: "repeat(12, minmax(0, 1fr))" }}
        gap={{ base: "12", lg: "8" }}
        alignItems="end"
      >
        <Stack gridColumn={{ lg: "1 / 9" }} spacing="7">
          <Text color="accent" fontFamily="mono" fontSize="xs" fontWeight="700" letterSpacing="0.14em" textTransform="uppercase">
            End transmission / continue exploring
          </Text>
          <Heading
            color="ivory"
            fontSize={{ base: "5xl", sm: "6xl", md: "8xl", xl: "9xl" }}
            lineHeight="0.82"
            letterSpacing="-0.08em"
            textTransform="uppercase"
          >
            Reliable.
            <Box as="span" display="block" color="transparent" sx={{ WebkitTextStroke: "1.5px var(--ivory)" }}>
              Across devices.
            </Box>
          </Heading>
        </Stack>

        <Grid
          gridColumn={{ lg: "10 / 13" }}
          templateColumns="repeat(2, 1fr)"
          gap="8"
          borderTop="1px solid"
          borderColor="line"
          pt="6"
        >
          <Stack spacing="3">
            <Text color="muted" fontFamily="mono" fontSize="9px" letterSpacing="0.12em" textTransform="uppercase">
              Index
            </Text>
            <Link href="#project" color="ivory" fontSize="sm" _hover={{ color: "accent" }}>
              Work
            </Link>
            <Link href="#aboutme" color="ivory" fontSize="sm" _hover={{ color: "accent" }}>
              About
            </Link>
            <Link href="#certificate" color="ivory" fontSize="sm" _hover={{ color: "accent" }}>
              Proof
            </Link>
          </Stack>
          <Stack spacing="3">
            <Text color="muted" fontFamily="mono" fontSize="9px" letterSpacing="0.12em" textTransform="uppercase">
              External
            </Text>
            <Link
              href="https://github.com/deepakduttaOfficial"
              target="_blank"
              rel="noopener noreferrer"
              display="inline-flex"
              alignItems="center"
              gap="2"
              color="ivory"
              fontSize="sm"
              _hover={{ color: "accent", textDecoration: "none" }}
            >
              GitHub <FiArrowUpRight aria-hidden="true" />
            </Link>
            <Link
              href="https://deepakdutta-v1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              display="inline-flex"
              alignItems="center"
              gap="2"
              color="ivory"
              fontSize="sm"
              _hover={{ color: "accent", textDecoration: "none" }}
            >
              Archive <FiArrowUpRight aria-hidden="true" />
            </Link>
          </Stack>
        </Grid>
      </Grid>

      <Flex
        mt={{ base: "16", md: "24" }}
        pt="6"
        borderTop="1px solid"
        borderColor="line"
        justify="space-between"
        align={{ base: "flex-start", sm: "center" }}
        direction={{ base: "column", sm: "row" }}
        gap="5"
      >
        <Text color="muted" fontSize="sm">
          © {new Date().getFullYear()} Deepak Dutta. All rights reserved
        </Text>
        <Link
          href="#top"
          color="accent"
          fontFamily="mono"
          fontSize="xs"
          fontWeight="700"
          letterSpacing="0.08em"
          textTransform="uppercase"
          _hover={{ color: "ivory", textDecoration: "none" }}
        >
          Return to origin ↑
        </Link>
      </Flex>
    </Container>
  </Box>
);

export default FooterSection;
