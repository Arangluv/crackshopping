/* eslint-disable */

import { vars } from "@style/theme.css";
import { style } from "@vanilla-extract/css";

export const main_container = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "1fr 8fr 1fr",
  width: "100vw",
  minHeight: "100vh",
  padding: "0px 10vw",
  boxSizing: "border-box",

  "@media": {
    "all and (min-width:1024px) and (max-width:1440px)": {
      padding: "0px 5vw",
    },
    "screen and (min-width:480px) and (max-width:767px)": {
      backgroundColor: "purple",
    },
    "screen and (max-width:479px)": {
      padding: "0 10px",
      "::-webkit-scrollbar": {
        display: "none",
      },
    },
  },
});

// main content part

export const main_content_container = style({
  gridRow: "2 / 3",
  gridColumn: "1 / 4",
  display: "grid",
  gridTemplateColumns: "1fr 4fr",
  gridTemplateRows: "repeat(5, 1fr)",
  minHeight: "100vh",
});
export const grid_item = style({});

// sidebar part

export const sidebar_container = style({
  gridColumn: "1 / 2",
  gridRow: "1 / 3",
});

export const list_wrapper = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  height: "100%",
  backgroundColor: vars.themeColor.color.primary,
  padding: "5px 0 5px 5px",
  zIndex: 100,
});

export const list_item_wrapper = style({
  display: "flex",
  alignItems: "center",
  color: vars.themeColor.color.background,
  width: "90%",
  height: 40,
  paddingLeft: 5,
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  transition: "all .1s ease-in-out",
  ":hover": {
    backgroundColor: vars.themeColor.color.background,
    color: vars.themeColor.color.accent,
  },
});

export const list_title = style({
  fontWeight: vars.fontWeight.large,
});

export const sub_wrapper = style({
  display: "none",
  zIndex: -1,
  selectors: {
    [`${list_item_wrapper}:hover &`]: {
      position: "absolute",
      display: "grid",
      padding: 5,
      gridTemplateColumns: "2fr 1fr",
      gridTemplateRows: "1fr 1fr",
      width: "60rem",
      minHeight: "150%",
      height: "auto",
      left: "100%",
      gap: 5,
      backgroundColor: "white",
      top: 0,
      marginLeft: "-1px",
      border: "1px solid",
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      borderColor: vars.themeColor.color.primary,
    },
  },
});
export const sub_list_wrapper = style({
  gridColumn: "1 / 2",
  gridRow: "1 / 3",
  display: "grid",
  gap: 5,
  gridTemplateColumns: "1fr 1fr",
  gridAutoRows: "minmax(100px, auto)",
});
export const list_content_wrapper = style({
  display: "flex",
  flexDirection: "column",
  padding: 5,
});

export const sub_list_parent_title = style({
  fontWeight: vars.fontWeight.large,
  display: "block",
  marginBottom: 10,
  ":hover": {
    color: vars.themeColor.color.accent,
  },
});

export const sub_list_child_title = style({
  display: "block",
  marginBottom: 8,
  ":hover": {
    color: vars.themeColor.color.accent,
  },
});

export const sub_list_image_wrapper = style({
  overflow: "hidden",
  borderRadius: 5,
});

export const sub_list_image = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

// main top part
export const main_top_container = style({
  gridColumn: "2 / 3",
  gridRow: "1 / 3",
  backgroundColor: vars.themeColor.color.secondary,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr",
  padding: 5,
  gap: 5,
});

const common_wrapper = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: 5,
});

export const site_banner_wrapper = style([
  common_wrapper,
  {
    gridColumn: "1 / 3",
    gridRow: "1 / 2",
  },
]);

export const adsense_wrapper = style([
  common_wrapper,
  {
    gridColumn: "3 / 4",
    gridRow: "1 / 2",
  },
]);

export const promotion_image_wrapper = style([
  common_wrapper,
  {
    gridColumn: "1 / 2",
    gridRow: "2 / 3",
  },
]);

export const supportor_wrapper = style([
  common_wrapper,
  {
    gridColumn: "2 / 4",
    gridRow: "2 / 3",
  },
]);

// common main sub theme part
const sub_theme_wrapper = style({
  display: "grid",
  border: "1px solid red",
  gridTemplateRows: "3fr 7fr",
  padding: 5,
});

export const sub_theme_title = style({
  border: "1px solid black",
  fontSize: vars.fontSize.medium,
  display: "flex",
  alignItems: "center",
});

export const product_item_wrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "red",
  fontSize: vars.fontSize.XLarge,
});

// today's product part
export const today_product_container = style([
  sub_theme_wrapper,
  {
    gridColumn: "1 / 3",
    gridRow: "3 / 4",
  },
]);

// top deal
export const top_deal_container = style([
  sub_theme_wrapper,
  {
    gridColumn: "1 / 3",
    gridRow: "4 / 5",
  },
]);

// adsense part

export const adsense_container = style({
  gridColumn: "1 / 3",
  gridRow: "5 / 6",
});
