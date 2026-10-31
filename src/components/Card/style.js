export const externalLinkStyle = {
  display: "inline-flex",
  alignItems: "center",
  gap: "2",
  py: "2",
  fontFamily: "mono",
  fontSize: "xs",
  fontWeight: "700",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  textDecoration: "none",
  borderBottom: "1px solid",
  borderColor: "currentColor",
  _hover: {
    color: "blue.600",
    textDecoration: "none",
  },
  _focusVisible: {
    outline: "3px solid",
    outlineColor: "accent",
    outlineOffset: "4px",
  },
};
