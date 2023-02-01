import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import NavLink from "./NavLink";
import { containerStyle } from "./style";
import { headingfont } from "../../utils/globalfont";

const Navbar = () => {
  const Links = [
    { name: "Project" },
    { name: "Certificate" },
    { name: "About me" },
  ];
  const MY_NAME = "Deepak Dutta";
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box sx={containerStyle}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={{ base: "flex", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box fontFamily={headingfont} fontWeight="semibold">
              {MY_NAME}
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, index) => (
                <NavLink key={index}>{link.name}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex />
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, index) => (
                <NavLink key={index}>{link.name}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
export default Navbar;
