import { headingfont } from "../../utils/globalfont";

export const headingStyle = {
  fontWeight: "thin",
  fontSize: ["4xl", "5xl"],
  fontFamily: headingfont,
};

export const subHeadingStyle = {
  fontSize: ["md", "xl"],
  color: "gray.300",
  fontWeight: "normal",
  textTransform: "uppercase",
  textAlign: "center",
  letterSpacing: "4px",
};

export const buttonStyle = {
  rounded: "sm",
  border: "1px",
  _hover: {
    bgColor: "whiteAlpha.300",
  },
};

export const containerStyle = {
  height: "100vh",
  justifyContent: "center",
  color: "white",
};
