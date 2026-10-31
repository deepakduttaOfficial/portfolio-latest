import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import NavLink from "./NavLink";

const links = [
  { name: "Work", link: "#project" },
  { name: "About", link: "#aboutme" },
  { name: "Credentials", link: "#certificate" },
];

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex="sticky"
      bg="rgba(244, 241, 232, 0.96)"
      borderBottom="1px solid"
      borderColor="line"
      backdropFilter="blur(12px)"
    >
      <Container maxW="7xl">
        <Flex minH="18" align="center" justify="space-between" gap="6">
          <Link
            href="#top"
            aria-label="Deepak Dutta, home"
            fontFamily="heading"
            fontSize="2xl"
            fontWeight="700"
            letterSpacing="-0.04em"
            textDecoration="none"
            _hover={{ textDecoration: "none" }}
            _focusVisible={{ outline: "3px solid", outlineColor: "accent", outlineOffset: "4px" }}
          >
            DD<span aria-hidden="true">.</span>
          </Link>

          <HStack as="nav" aria-label="Primary navigation" spacing="8" display={{ base: "none", md: "flex" }}>
            {links.map((item) => (
              <NavLink key={item.link} link={item.link}>
                {item.name}
              </NavLink>
            ))}
          </HStack>

          <HStack spacing="3">
            <Link
              href="https://deepakdutta-v1.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              display={{ base: "none", sm: "inline-flex" }}
              alignItems="center"
              gap="1"
              fontFamily="mono"
              fontSize="xs"
              fontWeight="700"
              textTransform="uppercase"
              _focusVisible={{ outline: "3px solid", outlineColor: "accent", outlineOffset: "4px" }}
            >
              Archive v1 <FiArrowUpRight aria-hidden="true" />
            </Link>
            <IconButton
              display={{ base: "inline-flex", md: "none" }}
              variant="outline"
              borderColor="ink"
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
            spacing="1"
            py="4"
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
              fontFamily="mono"
              fontSize="xs"
              fontWeight="700"
              textTransform="uppercase"
            >
              Archive v1 ↗
            </Link>
          </Stack>
        )}
      </Container>
    </Box>
  );
};

export default Navbar;
