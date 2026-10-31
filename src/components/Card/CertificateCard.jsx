import { AspectRatio, Box, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { FiArrowUpRight } from "react-icons/fi";
import { externalLinkStyle } from "./style";

const CertificateCard = ({ certificate, index }) => {
  const { img, title, link } = certificate;
  const proofNumber = String(index + 1).padStart(2, "0");

  return (
    <Box
      as="article"
      role="group"
      mt={{ base: "0", lg: index === 1 ? "16" : index === 2 ? "32" : "0" }}
    >
      <Flex justify="space-between" align="center" mb="4">
        <Text color="accent" fontFamily="mono" fontSize="10px" fontWeight="700" letterSpacing="0.12em">
          PROOF / {proofNumber}
        </Text>
        <Box w="32%" h="1px" bg="line" />
      </Flex>

      <Box
        position="relative"
        bg="ivory"
        border="1px solid"
        borderColor="rgba(241, 238, 230, 0.5)"
        p={{ base: "3", md: "4" }}
        boxShadow="14px 14px 0 rgba(0, 0, 0, 0.24)"
        transition="transform 220ms ease, box-shadow 220ms ease"
        _groupHover={{ transform: "translate(-4px, -4px)", boxShadow: "20px 20px 0 rgba(183, 255, 60, 0.1)" }}
      >
        <AspectRatio ratio={4 / 3} overflow="hidden" bg="#e8e5de">
          <Image
            src={img}
            alt={`${title} certificate`}
            loading="lazy"
            decoding="async"
            objectFit="cover"
            filter="saturate(0.9)"
            transition="filter 220ms ease"
            _groupHover={{ filter: "saturate(1)" }}
          />
        </AspectRatio>
        <Text
          position="absolute"
          right="3"
          bottom="2"
          color="rgba(9, 11, 12, 0.62)"
          fontFamily="mono"
          fontSize="8px"
          letterSpacing="0.1em"
          textTransform="uppercase"
        >
          Verified document
        </Text>
      </Box>

      <Stack spacing="4" pt="6">
        <Heading as="h3" color="ivory" fontFamily="body" fontSize={{ base: "xl", md: "2xl" }} lineHeight="1.25" letterSpacing="-0.025em" fontWeight="600">
          {title}
        </Heading>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${title} certificate`}
          sx={externalLinkStyle}
          alignSelf="flex-start"
        >
          Open credential <FiArrowUpRight aria-hidden="true" />
        </Link>
      </Stack>
    </Box>
  );
};

export default CertificateCard;
