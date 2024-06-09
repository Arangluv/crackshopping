/* eslint-disable */

import { vars } from "@style/theme.css";
import { style } from "@vanilla-extract/css";

export const sidebar_container = style({
  gridRow: "2 / 3",
  gridColumn: "1 / 2",
  display: "flex",
  flexDirection: "column",
  height: "fit-content",
  "@media": {
    "screen and (max-width:479px)": {
      gridColumn: "none",
      gridRow: "2 / 3",
      flexDirection: "row",
      height: "4rem",
      alignItems: "center",
      paddingLeft: ".7rem",
    },
  },
});

export const category_item_wrapper = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginBottom: "1rem",
  transition: "all .5s ease-in-out",
  "@media": {
    "screen and (max-width:479px)": {
      flexDirection: "row",
      marginBottom: 0,
      width: "auto",
      marginRight: "1rem",
      padding: ".5rem .7rem",
      backgroundColor: vars.themeColor.color.secondary,
      borderRadius: 5,
    },
  },
});
export const category_icon = style({
  display: "none",
  "@media": {
    "screen and (max-width:479px)": {
      display: "inline",
      width: 20,
      height: 20,
    },
  },
});
export const category_title = style({
  fontSize: vars.fontSize.regular,
  fontWeight: vars.fontWeight.medium,
  marginBottom: "1rem",
  width: "100%",
  "@media": {
    "screen and (max-width:479px)": {
      marginBottom: 0,
      fontSize: vars.fontSize.small,
    },
  },
});

export const list_wrapper = style({
  display: "flex",
  flexDirection: "column",
  width: "95%",
  borderBottom: `1px solid ${vars.themeColor.color.border}`,
  "@media": {
    "screen and (max-width:479px)": {
      display: "none",
    },
  },
});

export const mobile_only_list_wrapper = style([
  list_wrapper,
  {
    "@media": {
      "screen and (max-width:479px)": {
        display: "flex",
        position: "fixed",
        zIndex: 999,
        backgroundColor: "white",
        width: "100%",
        height: "30vh",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        bottom: 0,
        left: 0,
        borderTop: `1px solid ${vars.themeColor.color.border}`,
        paddingLeft: "2rem",
        paddingTop: "2rem",
      },
    },
  },
]);

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
  "@media": {
    "screen and (max-width:479px)": {
      display: "none",
    },
  },
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
