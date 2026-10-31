import { Box, Container, Grid, Heading, Stack, Text } from "@chakra-ui/react";

const SectionContainer = ({ heading, subHeading, sectionNumber, children, id, tone = "paper", ...rest }) => (
  <Box
    as="section"
    id={id}
    scrollMarginTop="5.5rem"
    bg={tone}
    color="ink"
    py={{ base: "20", md: "28" }}
    {...rest}
  >
    <Container maxW="7xl">
      <Grid
        templateColumns={{ base: "1fr", md: "minmax(160px, 0.34fr) 1fr" }}
        gap={{ base: "10", md: "16", lg: "24" }}
        borderTop="1px solid"
        borderColor="line"
        pt={{ base: "6", md: "8" }}
      >
        <Text fontFamily="mono" fontSize="xs" fontWeight="700" letterSpacing="0.14em">
          {sectionNumber} / {heading}
        </Text>
        <Stack spacing={{ base: "12", md: "16" }}>
          <Box maxW="3xl">
            <Heading as="h2" fontSize={{ base: "4xl", md: "6xl" }} lineHeight="1" letterSpacing="-0.045em" fontWeight="600">
              {heading}
            </Heading>
            <Text mt="5" maxW="2xl" color="muted" fontSize={{ base: "md", md: "lg" }}>
              {subHeading}
            </Text>
          </Box>
          <Box>{children}</Box>
        </Stack>
      </Grid>
    </Container>
  </Box>
);

export default SectionContainer;
