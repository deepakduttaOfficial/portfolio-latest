import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        fontFamily: "Roboto, sans-serif",
        color: "gray.800",
        bg: "gray.100",
      },
    },
  },
  colors: {
    primary: {
      50: "#f3f2ff",
      100: "#d5ccff",
      200: "#b8a6ff",
      300: "#9b80ff",
      400: "#7d5aff",
      500: "#6034ff",
      600: "#4a0fd2",
      700: "#3a0cb0",
      800: "#2b0a8e",
      900: "#1d076c",
    },
    secondary: {
      50: "#f3f2ff",
      100: "#d5ccff",
      200: "#b8a6ff",
      300: "#9b80ff",
      400: "#7d5aff",
      500: "#6034ff",
      600: "#4a0fd2",
      700: "#3a0cb0",
      800: "#2b0a8e",
      900: "#1d076c",
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "bold",
      },
      sizes: {
        lg: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      variants: {
        solid: {
          bg: "primary.500",
          color: "white",
          _hover: {
            bg: "primary.600",
          },
        },
        outline: {
          borderColor: "primary.500",
          color: "primary.500",
          _hover: {
            bg: "primary.500",
            color: "white",
          },
        },
      },
    },
  },
});

export default theme;
