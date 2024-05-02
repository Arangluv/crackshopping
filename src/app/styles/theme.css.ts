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
    mainBackground: null,
    subBackground: null,
    mainFontColor: null,
    subFontColor: null,
    accentColor: null,
    errorColor: null,
  },
});

export const darkTheme = createTheme(themeColor, {
  color: {
    mainBackground: "",
    subBackground: "",
    mainFontColor: "",
    subFontColor: "",
    accentColor: "",
    errorColor: "",
  },
});

export const lightTheme = createTheme(themeColor, {
  color: {
    mainBackground: "",
    subBackground: "",
    mainFontColor: "",
    subFontColor: "",
    accentColor: "",
    errorColor: "",
  },
});

export const vars = { ...global, ...themeColor };
