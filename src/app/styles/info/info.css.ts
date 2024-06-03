import { vars } from "@style/theme.css";
import { style } from "@vanilla-extract/css";

export const sidebar_container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  justifyContent: "flex-start",
  paddingTop: "8rem",
  paddingRight: "2rem",
});
export const list_item = style({
  margin: "1rem 0",
});
export const link_text = style({
  color: vars.themeColor.color.text,
  fontSize: vars.fontSize.regular,
  opacity: "0.8",
  fontWeight: vars.fontWeight.medium,
  transition: "color .1s ease-in-out",
  ":hover": {
    color: vars.themeColor.color.accent,
    opacity: 1,
  },
});

export const text_active = style({
  color: vars.themeColor.color.accent,
  opacity: 1,
});

// about-us part

export const about_us_container = style({
  display: "grid",
  gap: 10,
  gridTemplateRows:
    "minmax(24rem, auto) minmax(10rem, auto) minmax(16rem, auto)",
  gridTemplateColumns: "3fr 2fr",
});

export const main_title_wrapper = style({
  gridColumn: "1 / 2",
  gridRow: "1 / 2",
});
export const main_title = style({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});
export const main_title_text = style({
  display: "block",
  width: "80%",
  marginBottom: "1rem",
  fontSize: vars.fontSize.XXLarge,
  fontWeight: vars.fontWeight.large,
});

export const text_accent = style({
  position: "relative",
  color: vars.themeColor.color.accent,
  "::after": {
    position: "absolute",
    width: "100%",
    height: "1rem",
    content: "",
    backgroundColor: vars.themeColor.color.secondary,
    bottom: 0,
    left: 0,
    opacity: 0.3,
  },
});
export const about_us_image_wrapper = style({
  gridColumn: "2 / 3",
  gridRow: "1 / 3",
  position: "relative",
});

export const about_us_image = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const about_us_description_wrapper = style({
  gridColumn: "1 / 2",
  gridRow: "2 / 3",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const about_us_description_text = style({
  flexBasis: "80%",
  display: "block",
  width: "80%",
  backgroundColor: "white",
  fontSize: vars.fontSize.regular,
  color: "rgba(0,0,0, 0.7)",
});

export const user_action_wrapper = style({
  gridColumn: "1 / 2",
  gridRow: "3 / 4",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
});

export const btn_wrapper = style({
  width: "80%",
  height: "100px",
});

export const about_us_btn = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 30,
  width: "8rem",
  height: "3rem",
  fontWeight: vars.fontWeight.medium,
  border: `1px solid ${vars.themeColor.color.primary}`,
  color: vars.themeColor.color.primary,
  transition: "all .1s ease-in-out",
  ":hover": {
    backgroundColor: vars.themeColor.color.primary,
    color: vars.themeColor.color.background,
  },
});

export const grid_item = style({
  border: "1px solid red",
});
