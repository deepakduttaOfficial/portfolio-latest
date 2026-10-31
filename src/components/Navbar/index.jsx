import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import NavLink from "./NavLink";

const links = [
  { name: "Work", link: "#project" },
  { name: "About", link: "#aboutme" },
  { name: "Proof", link: "#certificate" },
];

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="rgba(9, 11, 12, 0.94)"
      borderBottom="1px solid"
      borderColor="line"
      backdropFilter="blur(14px)"
    >
      <Container maxW="8xl">
        <Flex minH="20" align="center" justify="space-between" gap="6">
          <HStack spacing="4">
            <Link
              href="#top"
              aria-label="Deepak Dutta, home"
              color="ivory"
              fontFamily="heading"
              fontSize="xl"
              fontWeight="900"
              letterSpacing="-0.06em"
              lineHeight="1"
              textDecoration="none"
              _hover={{ color: "accent", textDecoration: "none" }}
            >
              DD<span aria-hidden="true">/</span>
            </Link>
            <Text
              display={{ base: "none", lg: "block" }}
              color="muted"
              fontFamily="mono"
              fontSize="10px"
              letterSpacing="0.12em"
              textTransform="uppercase"
            >
              Engineering systems / digital products
            </Text>
          </HStack>

          <HStack
            as="nav"
            aria-label="Primary navigation"
            spacing="8"
            display={{ base: "none", md: "flex" }}
          >
            {links.map((item) => (
              <NavLink key={item.link} link={item.link}>
                {item.name}
              </NavLink>
            ))}
          </HStack>

          <HStack spacing="4">
            <Link
              href="https://deepakdutta-v1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              display={{ base: "none", sm: "inline-flex" }}
              alignItems="center"
              gap="2"
              color="muted"
              fontFamily="mono"
              fontSize="10px"
              fontWeight="700"
              letterSpacing="0.1em"
              textTransform="uppercase"
              _hover={{ color: "accent", textDecoration: "none" }}
            >
              Archive / 01 <FiArrowUpRight aria-hidden="true" />
            </Link>
            <IconButton
              display={{ base: "inline-flex", md: "none" }}
              variant="outline"
              borderColor="line"
              color="ivory"
              borderRadius="0"
              icon={isOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              onClick={onToggle}
            />
          </HStack>
        </Flex>

        {isOpen && (
          <Stack
            id="mobile-navigation"
            as="nav"
            aria-label="Mobile navigation"
            display={{ md: "none" }}
            spacing="2"
            py="6"
            borderTop="1px solid"
            borderColor="line"
          >
            {links.map((item) => (
              <NavLink key={item.link} link={item.link} onClick={onClose}>
                {item.name}
              </NavLink>
            ))}
            <Link
              href="https://deepakdutta-v1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              display={{ sm: "none" }}
              py="2"
              color="muted"
              fontFamily="mono"
              fontSize="xs"
              fontWeight="700"
              textTransform="uppercase"
            >
              Archive / 01 ↗
            </Link>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
