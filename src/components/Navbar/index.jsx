import { Box, Flex, HStack, Select } from "@chakra-ui/react";

import { containerStyle } from "./style";
import MobileNav from "./MobileNav";

// Import links
import { EXTERNAL_PAGE, HOME_LINK } from "../../utils/links";
import { PrimaryNavLink, SecondaryNavLink } from "./NavLink";

const Navbar = () => {
  // navigate to version-1 portfolio website
  const v1 = (e) => {
    window.location.href =
      e.target.value || "https://deepakdutta-v1.netlify.app/";
  };

  return (
    <>
      <Box sx={containerStyle} position="sticky" top="0" zIndex="overlay">
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          {/* Mobile responsive */}
          <MobileNav />
          {/* big screen size responsive */}
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
              {HOME_LINK.map((link, index) => (
                <PrimaryNavLink key={index} link={link.link}>
                  {link.name}
                </PrimaryNavLink>
              ))}

              {EXTERNAL_PAGE.map((link, index) => (
                <SecondaryNavLink key={index} link={link.link}>
                  {link.name}
                </SecondaryNavLink>
              ))}
            </HStack>
          </HStack>
          {/* Version 1 */}
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
      </Box>
    </>
  );
};
export default Navbar;
