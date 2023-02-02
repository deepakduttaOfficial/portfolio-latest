import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  Select,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import NavLink from "./NavLink";
import { containerStyle } from "./style";

const Navbar = () => {
  const Links = [
    { name: "Project", link: "#project" },
    { name: "Certificate", link: "#certificate" },
    { name: "About me", link: "#aboutme" },
  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  const v1 = (e) => {
    // console.log("Hi");
    window.location.href =
      e.target.value || "https://deepakdutta-v1.netlify.app/";
    // window.open("https://deepakdutta-v1.netlify.app/");
  };

  return (
    <>
      <Box sx={containerStyle} position="sticky" top="0" zIndex="overlay">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label={"Open Menu"}
            display={{ base: "flex", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box
              fontFamily={"Great Vibes"}
              fontSize="2xl"
              fontWeight="semibold"
            >
              Deepak Dutta
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link, index) => (
                <NavLink key={index} link={link.link}>
                  {link.name}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex>
            <Select
              placeholder="v2.0"
              borderColor="gray.200"
              ring="0"
              _focus={{ ring: "0", borderColor: "gray.200" }}
              fontWeight="semibold"
              isReadOnly
              value={"v2.0"}
              onChange={v1}
            >
              <option value="https://deepakdutta-v1.netlify.app/">v1.0</option>
            </Select>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link, index) => (
                <NavLink
                  key={index}
                  link={link.link}
                  onClick={isOpen ? onClose : onOpen}
                >
                  {link.name}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
export default Navbar;
