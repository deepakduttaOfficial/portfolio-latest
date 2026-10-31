import { Box, Container, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import certificates from "../../data/certificate";
import CertificateCard from "../Card/CertificateCard";

const CertificateSection = () => (
  <Box
    as="section"
    id="certificate"
    scrollMarginTop="5rem"
    position="relative"
    overflow="hidden"
    bg="panel"
    borderBottom="1px solid"
    borderColor="line"
  >
    <Box
      aria-hidden="true"
      position="absolute"
      top="0"
      right="0"
      w={{ base: "28%", md: "18%" }}
      h="full"
      bg="accent"
      opacity="0.035"
    />
    <Container maxW="8xl" position="relative" py={{ base: "24", md: "32", xl: "36" }}>
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(12, minmax(0, 1fr))" }}
        gap={{ base: "9", md: "6" }}
        mb={{ base: "16", md: "24" }}
        alignItems="end"
      >
        <Stack gridColumn={{ md: "1 / 9" }} spacing="7">
          <Text color="accent" fontFamily="mono" fontSize="xs" fontWeight="700" letterSpacing="0.14em" textTransform="uppercase">
            03 — Proof wall / credentials
          </Text>
          <Heading
            as="h2"
            color="ivory"
            fontSize={{ base: "5xl", md: "7xl", xl: "8xl" }}
            lineHeight="0.88"
            letterSpacing="-0.07em"
            textTransform="uppercase"
          >
            Work backed
            <Box as="span" display="block" color="accent">
              by proof.
            </Box>
          </Heading>
        </Stack>
        <Text gridColumn={{ md: "10 / 13" }} color="muted" fontSize={{ base: "sm", md: "md" }} lineHeight="1.8" borderTop="1px solid" borderColor="line" pt="5">
          This certificate is the result of my tireless efforts.
        </Text>
      </Grid>

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={{ base: "14", md: "10", xl: "14" }} alignItems="start">
        {certificates.map((certificate, index) => (
          <CertificateCard key={certificate.title} certificate={certificate} index={index} />
        ))}
      </Grid>
    </Container>
  </Box>
);

export default CertificateSection;
