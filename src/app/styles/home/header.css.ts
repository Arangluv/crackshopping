/* eslint-disable */

import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const header_container = style({
  display: "grid",
  width: "100%",
  height: "100%",
  gridColumn: "1 / 4",
  gridRow: "1 / 2",
  border: "1px solid red",
  gridTemplateColumns: "1fr 3fr 1fr",
  gridTemplateRows: "1fr 1fr",
});

export const grid_item = style({
  border: "1px solid blue",
});

// logo image part

export const logo_wrapper = style({
  position: "relative",
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
  border: "1px solid purple",
});

export const search_bar_form = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "70%",
  height: "25%",
});
export const search_label = style({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  boxSizing: "border-box",
});
export const search_input = style({
  width: "70%",
  height: "100%",
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
  width: "30%",
  boxSizing: "border-box",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  borderTopRightRadius: "10px",
  borderBottomRightRadius: "10px",
  color: vars.themeColor.color.background,
  border: "1px solid",
  borderColor: vars.themeColor.color.primary,
  backgroundColor: vars.themeColor.color.primary,
});
export const search_result_wrapper = style({
  position: "absolute",
  bottom: "-20px",
  left: "50%",
  transform: "translateX(-50%)",
});
