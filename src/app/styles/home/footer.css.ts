/* eslint-disable */

import { style } from "@vanilla-extract/css";
import { vars } from "@style/theme.css";

export const footer_wrapper = style({
  gridRow: "3 / 4",
  gridColumn: "1 / 4",
  display: "grid",
  backgroundColor: vars.themeColor.color.primary,
  gridTemplateRows: "minmax(3rem, auto),5rem",
});

export const nav_wrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const copyright_wrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
});
export const nav_link = style({
  color: vars.themeColor.color.background,
  fontSize: vars.fontSize.regular,
  margin: "0 2rem",
});

export const copy_right = style({
  fontSize: vars.fontSize.small,
  opacity: "0.8",
  color: vars.themeColor.color.background,
  marginBottom: "0.5rem",
});
