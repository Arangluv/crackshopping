/* eslint-disable */

import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const header_container = style({
  display: "grid",
  width: "100%",
  height: "100%",
  gridColumn: "1 / 4",
  gridRow: "1 / 2",
  gridTemplateColumns: "2fr 4fr 2fr",
  gridTemplateRows: "1fr 1fr",
});

export const grid_item = style({});

// logo image part

export const logo_wrapper = style({
  gridColumn: "1 / 2",
  gridRow: "1 / 3",
  display: "flex",
});

export const logo_image = style({
  objectFit: "contain",
  width: "100%",
  height: "100%",
});

// search bar part

export const search_bar_container = style({
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gridColumn: "2 / 3",
  gridRow: "1 / 3",
});
export const content_wrapper = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "80%",
});
export const search_bar_form = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "25%",
});
export const search_field = style({
  width: "100%",
  height: "100%",
});
export const search_label = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
});

export const search_input = style({
  width: "80%",
  height: "36px",
  padding: "0 10px",
  fontSize: vars.fontSize.small,
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
  border: "1px solid",
  boxSizing: "border-box",
  borderRight: "none",
  borderColor: vars.themeColor.color.primary,
  ":focus": {
    outline: "none",
  },
});

export const icon_wrapper = style({
  display: "flex",
  padding: "1px 0",
  width: "20%",
  boxSizing: "border-box",
  height: "auto",
  justifyContent: "center",
  alignItems: "center",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  color: vars.themeColor.color.background,
  border: "1px solid",
  borderColor: vars.themeColor.color.primary,
  backgroundColor: vars.themeColor.color.primary,
});

export const icon = style({
  width: 25,
  height: 25,
  strokeWidth: 1,
  color: vars.themeColor.color.background,
});
export const search_result_wrapper = style({
  position: "absolute",
  boxSizing: "border-box",
  padding: "8px 0px",
  width: "80%",
  minHeight: "100px",
  marginTop: "20px",
  transform: "translateY(18px)",
  border: "1px solid rgba(0,0,0,0.2)",
  backgroundColor: vars.themeColor.color.background,
  boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
  zIndex: 999,
  display: "none",
  selectors: {
    "form:focus-within + &": {
      display: "block",
    },
  },
});

export const result_text_wrapper = style({
  width: "100%",
  padding: "5px 10px",
  ":hover": {
    backgroundColor: vars.themeColor.color.secondary,
  },
  selectors: {
    "&:not(.last-result)": {
      marginBottom: "5px",
    },
  },
});
export const result_link = style({
  display: "block",
});
export const text_accent = style({
  color: vars.themeColor.color.accent,
  fontWeight: vars.fontWeight.large,
});
export const hidden = style({
  display: "none",
});

// product navigation part

export const product_nav = style({
  gridColumn: "3 / 4",
  gridRow: "1 / 3",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const nav_list_wrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "auto",
  height: 100,
  margin: "0px 10px",
});

export const nav_icon = style({
  width: 40,
  height: 40,
  color: "rgba(0,0,0,0.6)",
});

export const nav_text = style({
  fontWeight: vars.fontWeight.large,
  marginTop: 10,
  color: "rgba(0,0,0,0.7)",
});
