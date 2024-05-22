/* eslint-disable */

import {
  createThemeContract,
  createGlobalTheme,
  createTheme,
} from "@vanilla-extract/css";

// dark mode와 light mode 관계없이 적용되는 스타일들
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
    large: "700",
  },
});

const themeColor = createThemeContract({
  color: {
    background: null,
    text: null,
    primary: null,
    secondary: null,
    accent: null,
  },
});

export const light = createTheme(themeColor, {
  color: {
    background: "#ffffff",
    text: "#040316",
    primary: "#2F27CE",
    secondary: "#DDDBFF",
    accent: "#443DFF",
  },
});

export const vars = { ...global, themeColor };
