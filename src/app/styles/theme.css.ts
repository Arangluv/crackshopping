import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";

export const global = createGlobalTheme(":root", {
  fontSize: {
    XLarge: "48px",
    large: "36px",
    medium: "28px",
    regular: "22px",
    middleSmall: "18px",
    small: "16px",
    micro: "14px",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    large: "600",
  },
});

export const themeColor = createThemeContract({
  color: {
    background: null,
    text: null,
    primary: null,
    secondary: null,
    accent: null,
  },
});
// ref: https://www.realtimecolors.com/?colors=e8e9f2-05060a-505aaa-2a3165-384394&fonts=Inter-Inter
export const lightTheme = createTheme(themeColor, {
  color: {
    background: "#f5f6fa",
    text: "#0d0e17",
    primary: "#5560af",
    secondary: "#9aa1d5",
    accent: "#6b76c7",
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    background: "#e8e9f2",
    text: "#05060a",
    primary: "#505aaa",
    secondary: "#2a3165",
    accent: "#384394",
  },
});

export const vars = { ...global, ...themeColor };
