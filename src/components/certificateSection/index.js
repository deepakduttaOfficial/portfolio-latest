import { SimpleGrid } from "@chakra-ui/react";
import certificates from "../../data/certificate";
import CertificateCard from "../Card/CertificateCard";
import SectionContainer from "../sectionContainer";

const CertificateSection = () => (
  <SectionContainer
    id="certificate"
    sectionNumber="03"
    heading="Credentials"
    subHeading="This certificate is the result of my tireless efforts."
  >
    <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacingX="8" spacingY="14">
      {certificates.map((certificate, index) => (
        <CertificateCard key={certificate.title} certificate={certificate} index={index} />
      ))}
    </SimpleGrid>
  </SectionContainer>
);

export default CertificateSection;
