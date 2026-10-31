import { extendTheme } from "@chakra-ui/react";

const focusRing = {
  outline: "2px solid",
  outlineColor: "var(--focus)",
  outlineOffset: "4px",
};

const theme = extendTheme({
  colors: {
    canvas: "#090b0c",
    graphite: "#111416",
    panel: "#171b1e",
    ivory: "#f1eee6",
    muted: "#9ba09d",
    line: "rgba(241, 238, 230, 0.16)",
    accent: "#b7ff3c",
  },
  fonts: {
    heading: '"Arial Black", "Helvetica Neue", Arial, sans-serif',
    body: 'Inter, "Avenir Next", Avenir, "Segoe UI", sans-serif',
    mono: '"SFMono-Regular", Consolas, "Liberation Mono", monospace',
  },
  styles: {
    global: {
      "html, body": {
        margin: 0,
        padding: 0,
        bg: "canvas",
        color: "ivory",
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
        letterSpacing: "0.07em",
        textTransform: "uppercase",
        transition: "background-color 180ms ease, color 180ms ease, border-color 180ms ease",
        _focusVisible: focusRing,
      },
      sizes: {
        md: { h: "12", px: "6" },
        lg: { h: "14", px: "8", fontSize: "sm" },
      },
      variants: {
        accent: {
          bg: "accent",
          color: "canvas",
          border: "1px solid",
          borderColor: "accent",
          _hover: { bg: "ivory", borderColor: "ivory" },
        },
        outline: {
          bg: "transparent",
          color: "ivory",
          border: "1px solid",
          borderColor: "rgba(241, 238, 230, 0.42)",
          _hover: { borderColor: "accent", color: "accent" },
        },
      },
    },
    Link: {
      baseStyle: {
        _focusVisible: focusRing,
      },
    },
  },
});

export default theme;
