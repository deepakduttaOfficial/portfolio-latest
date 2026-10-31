import { Link } from "@chakra-ui/react";

const NavLink = ({ link, children, onClick }) => (
  <Link
    href={link}
    onClick={onClick}
    position="relative"
    py="2"
    color="muted"
    fontFamily="mono"
    fontSize="xs"
    fontWeight="700"
    letterSpacing="0.1em"
    textTransform="uppercase"
    textDecoration="none"
    _before={{
      position: "absolute",
      bottom: "0",
      left: "0",
      w: "0",
      h: "1px",
      bg: "accent",
      content: '""',
      transition: "width 180ms ease",
    }}
    _hover={{ color: "ivory", textDecoration: "none", _before: { w: "full" } }}
    _focusVisible={{
      color: "ivory",
      outline: "2px solid",
      outlineColor: "var(--focus)",
      outlineOffset: "4px",
    }}
  >
    {children}
  </Link>
);

export default NavLink;
