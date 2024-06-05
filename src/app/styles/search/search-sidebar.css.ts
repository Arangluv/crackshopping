/* eslint-disable */

import { vars } from "@style/theme.css";
import { style } from "@vanilla-extract/css";

export const sidebar_container = style({
  gridRow: "2 / 3",
  gridColumn: "1 / 2",
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
});

export const category_item_wrapper = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "1rem",
  transition: "all .5s ease-in-out",
});

export const category_title = style({
  fontSize: vars.fontSize.regular,
  fontWeight: vars.fontWeight.medium,
  marginBottom: "1rem",
  width: "100%",
});

export const list_wrapper = style({
  display: "flex",
  flexDirection: "column",
  width: "95%",
  borderBottom: `1px solid ${vars.themeColor.color.border}`,
});

export const list_dropdown_wrapper = style([
  list_wrapper,
  {
    borderBottom: "none",
  },
]);

export const see_more_wrapper = style({
  width: "95%",
  paddingBottom: "1rem",
  borderBottom: `1px solid ${vars.themeColor.color.border}`,
});

export const see_more_btn = style({
  backgroundColor: "transparent",
  border: "none",
  padding: 0,
  color: vars.themeColor.color.primary,
  ":hover": {
    cursor: "pointer",
    color: vars.themeColor.color.accent,
  },
});

export const list_item = style({
  marginBottom: ".5rem",
  selectors: {
    "&:last-child": {
      marginBottom: "1rem",
    },
  },
});

export const list_checkbox = style({
  marginRight: ".5rem",
  accentColor: vars.themeColor.color.primary,
});
