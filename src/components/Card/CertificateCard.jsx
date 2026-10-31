import { AspectRatio, Box, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { externalLinkStyle } from "./style";

const CertificateCard = ({ certificate, index }) => {
  const { img, title, link } = certificate;

  return (
    <Box as="article" borderTop="1px solid" borderColor="line" pt="4">
      <Text mb="4" fontFamily="mono" fontSize="xs" color="muted">
        {String(index + 1).padStart(2, "0")}
      </Text>
      <AspectRatio ratio={4 / 3} overflow="hidden" bg="sand">
        <Image src={img} alt={`${title} certificate`} loading="lazy" decoding="async" objectFit="cover" />
      </AspectRatio>
      <Stack spacing="4" pt="5">
        <Heading as="h3" fontSize="xl" lineHeight="1.3" letterSpacing="-0.02em">
          {title}
        </Heading>
        <Link href={link} target="_blank" rel="noopener noreferrer" aria-label={`View ${title} certificate`} sx={externalLinkStyle} alignSelf="flex-start">
          View credential <FiArrowUpRight aria-hidden="true" />
        </Link>
      </Stack>
    </Box>
  );
};

export default CertificateCard;
