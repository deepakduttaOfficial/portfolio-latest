import { Link } from "@chakra-ui/react";
import React from "react";

const NavLink = ({ link, children, ...rest }) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "gray.100",
      }}
      href={link}
      fontWeight="medium"
      userSelect="none"
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
