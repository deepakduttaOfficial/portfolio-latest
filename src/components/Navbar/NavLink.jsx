import React from "react";
import { Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const PrimaryNavLink = ({ link, children, ...rest }) => {
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

export const SecondaryNavLink = ({ link, children, ...rest }) => {
  return (
    <Link
      as={NavLink}
      to={link}
      px={2}
      py={1}
      rounded={"md"}
      bgColor={'pink.300'}
      color={'whiteAlpha.800'}
      _hover={{
        textDecoration: "none",
        bg: "pink.400",
      }}
      fontWeight="normal"
      userSelect="none"
      {...rest}
    >
      {children}
    </Link>
  );
};
