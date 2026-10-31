import { Link } from "@chakra-ui/react";

const NavLink = ({ link, children, onClick }) => (
  <Link
    href={link}
    onClick={onClick}
    py="2"
    color="ink"
    fontFamily="mono"
    fontSize="xs"
    fontWeight="700"
    letterSpacing="0.1em"
    textTransform="uppercase"
    textDecoration="none"
    borderBottom="2px solid transparent"
    _hover={{ borderColor: "ink", textDecoration: "none" }}
    _focusVisible={{ outline: "3px solid", outlineColor: "accent", outlineOffset: "4px" }}
  >
    {children}
  </Link>
);

export default NavLink;
