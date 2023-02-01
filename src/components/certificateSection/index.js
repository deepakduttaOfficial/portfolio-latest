import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import certificates from "../../data/certificate";
import CertificateCard from "../Card/CertificateCard";
import SectionContainer from "../sectionContainer";

const CertificateSection = () => {
  const data = {
    heading: "Certificate",
    subHeading: "This certificate is the result of my tireless efforts.",
  };
  return (
    <SectionContainer {...data} mt="5" w="full" id={"certificate"}>
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap="12"
        px="10"
        mx="auto"
      >
        {certificates.map((certificate, index) => {
          return (
            <GridItem w="100%" key={index}>
              <CertificateCard certificate={certificate} />
            </GridItem>
          );
        })}
      </Grid>
    </SectionContainer>
  );
};

export default CertificateSection;
