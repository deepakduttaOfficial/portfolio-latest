import { extendTheme } from "@chakra-ui/react";

const focusRing = {
  outline: "3px solid",
  outlineColor: "accent",
  outlineOffset: "3px",
};

const theme = extendTheme({
  colors: {
    ink: "#171713",
    paper: "#f4f1e8",
    sand: "#e6e1d5",
    muted: "#55534c",
    line: "#b8b2a5",
    accent: "#b9ff66",
  },
  fonts: {
    heading: 'Georgia, "Times New Roman", serif',
    body: 'Inter, "Avenir Next", Avenir, "Segoe UI", sans-serif',
    mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
  },
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        bg: "paper",
        color: "ink",
      },
      body: {
        fontSize: "16px",
        lineHeight: "1.6",
        textRendering: "optimizeLegibility",
      },
      "button, a": {
        WebkitTapHighlightColor: "transparent",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: "0",
        fontFamily: "mono",
        fontSize: "xs",
        fontWeight: "700",
        letterSpacing: "0.04em",
        textTransform: "uppercase",
        _focusVisible: focusRing,
      },
      sizes: {
        md: { h: "12", px: "6" },
      },
      variants: {
        accent: {
          bg: "accent",
          color: "ink",
          border: "1px solid",
          borderColor: "accent",
          _hover: { bg: "transparent", color: "accent" },
        },
        heroOutline: {
          bg: "transparent",
          color: "paper",
          border: "1px solid",
          borderColor: "whiteAlpha.500",
          _hover: { borderColor: "paper", bg: "whiteAlpha.100" },
        },
        outline: {
          bg: "transparent",
          color: "ink",
          border: "1px solid",
          borderColor: "ink",
          _hover: { bg: "ink", color: "paper" },
        },
      },
    },
  },
});

export default theme;
