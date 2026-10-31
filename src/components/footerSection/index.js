import { Container, Flex, Link, Text } from "@chakra-ui/react";

const FooterSection = () => (
  <Flex as="footer" bg="ink" color="paper" minH="28" align="center">
    <Container maxW="7xl">
      <Flex
        justify="space-between"
        align={{ base: "flex-start", sm: "center" }}
        direction={{ base: "column", sm: "row" }}
        gap="5"
      >
        <Text color="whiteAlpha.700" fontSize="sm">
          © {new Date().getFullYear()} Deepak Dutta. All rights reserved
        </Text>
        <Link
          href="#top"
          fontFamily="mono"
          fontSize="xs"
          fontWeight="700"
          textTransform="uppercase"
          color="accent"
          _focusVisible={{
            outline: "3px solid",
            outlineColor: "accent",
            outlineOffset: "4px",
          }}
        >
          Back to top ↑
        </Link>
      </Flex>
    </Container>
  </Flex>
);

export default FooterSection;
