import { Link } from "@chakra-ui/react";
import React from "react";

const NavLink = ({ children }) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "gray.200",
      }}
      href={"#"}
      fontWeight="medium"
    >
      {children}
    </Link>
  );
};

export default NavLink;
