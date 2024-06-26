/* eslint-disable */

import { vars } from "@style/theme.css";
import { style } from "@vanilla-extract/css";

export const main_container = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows:
    "minmax(150px, auto) minmax(10vh, auto) minmax(150px, auto)",
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
      padding: 0,
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
  gap: 5,
  gridTemplateColumns: "1fr 4fr",
  gridTemplateRows: "repeat(5, minmax(200px, auto))",
  minHeight: "100vh",
  "@media": {
    "screen and (max-width:479px)": {
      gridTemplateRows: "repeat(6, minmax(200px, auto))",
    },
  },
});
export const grid_item = style({});

// sidebar part

export const sidebar_container = style({
  gridColumn: "1 / 2",
  gridRow: "1 / 3",
  boxSizing: "border-box",
  "@media": {
    "screen and (max-width:479px)": {
      gridColumn: "1 / 3",
      gridRow: "3 / 4",
    },
  },
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
  "@media": {
    "screen and (max-width:479px)": {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gridAutoRows: "auto",
      padding: "10px 5px 5px 5px",
      alignItems: "stretch",
      gap: "1rem",
      backgroundColor: "transparent",
    },
  },
});

export const list_item_wrapper = style({
  display: "flex",
  alignItems: "center",
  color: vars.themeColor.color.background,
  width: "90%",
  height: "3rem",
  paddingLeft: 5,
  borderTopLeftRadius: 5,
  borderBottomLeftRadius: 5,
  transition: "all .1s ease-in-out",
  ":hover": {
    backgroundColor: vars.themeColor.color.background,
    color: vars.themeColor.color.accent,
  },
  "@media": {
    "screen and (max-width:479px)": {
      display: "grid",
      gridTemplateRows: "2rem minmax(2rem, auto)",
      gap: 5,
      justifyItems: "center",
      width: "100%",
      height: "100%",
      backgroundColor: "transparent",
    },
  },
});

export const list_icon = style({
  display: "none",
  "@media": {
    "screen and (max-width:479px)": {
      display: "block",
      width: "2rem",
      height: "2rem",
      marginBottom: "0.5rem",
      color: vars.themeColor.color.text,
    },
  },
});

export const list_title = style({
  fontWeight: vars.fontWeight.large,
  "@media": {
    "screen and (max-width:479px)": {
      fontSize: vars.fontSize.small,
      color: vars.themeColor.color.text,
      display: "block",
      height: "100%",
      textAlign: "center",
    },
  },
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
  "@media": {
    "screen and (max-width:479px)": {
      display: "none",
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
  gridTemplateRows: "minmax(2rem, auto) minmax(2rem, auto)",
  padding: 5,
  gap: 5,
  "@media": {
    "screen and (max-width:479px)": {
      gridTemplateColumns: "1fr 1fr",
      gridColumn: "1 / 3",
      gridRow: "1 / 3",
    },
  },
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
    "@media": {
      "screen and (max-width:479px)": {
        gridColumn: "1 / 3",
        minHeight: "20rem",
      },
    },
  },
]);

export const adsense_wrapper = style([
  common_wrapper,
  {
    gridColumn: "3 / 4",
    gridRow: "1 / 2",
    "@media": {
      "screen and (max-width:479px)": {
        gridColumn: "2 / 3",
        gridRow: "2 / 3",
        height: "10rem",
      },
    },
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
    "@media": {
      "screen and (max-width:479px)": {
        display: "none",
      },
    },
  },
]);

// common main sub theme part
const sub_theme_wrapper = style({
  display: "grid",
  gridTemplateRows: "minmax(50px, auto) minmax(50px, auto) minmax(50px, auto)",
  padding: 5,
  marginTop: "2rem",
  "@media": {
    "screen and (max-width:479px)": {
      marginTop: 0,
    },
  },
});

export const sub_theme_title = style({
  fontSize: vars.fontSize.medium,
  display: "flex",
  alignItems: "center",
  fontStyle: "normal",
  color: vars.themeColor.color.accent,
  fontWeight: vars.fontWeight.large,
  marginBottom: "2rem",
  "@media": {
    "screen and (max-width:479px)": {
      paddingLeft: 5,
    },
  },
});
export const sub_title_emphasis = style({
  position: "relative",
  "::after": {
    position: "absolute",
    content: "",
    width: "100%",
    height: "30%",
    display: "block",
    backgroundColor: vars.themeColor.color.primary,
    opacity: "0.2",
    bottom: 0,
  },
});
export const product_item_wrapper = style({
  // carausel setting
  overflow: "hidden",
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: vars.fontSize.XLarge,
  "@media": {
    "screen and (max-width:479px)": {
      fontSize: vars.fontSize.small,
    },
  },
});

export const scroll_wrapper = style({
  display: "flex",
  width: "100%",
  height: "100%",
});

export const slider_wrapper = style({
  // flex: "flex-grow flex-shrink flex-basis"
  flex: "0 0 100%",
  minWidth: 0,
  display: "flex",
  justifyContent: "space-between",
});

export const slider_item_wrapper = style({
  display: "flex",
  flexDirection: "column",
  flex: "0 0 19%",
  minHeight: "300px",
  overflow: "hidden",
  "@media": {
    "screen and (max-width:479px)": {
      flex: "0 0 49%",
    },
  },
});

export const slider_item_image_wrapper = style({
  width: "100%",
  height: "16rem",
  "@media": {
    "screen and (max-width:479px)": {
      height: "12rem",
    },
  },
});
export const product_detail_link = style({
  display: "block",
  width: "100%",
  height: "100%",
});

export const product_image = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
});

export const product_info_wrapper = style({
  display: "grid",
  width: "100%",
  gridTemplateRows: "minmax(80px, 100px) 30px ",
  "@media": {
    "screen and (max-width:479px)": {
      gridTemplateRows: "minmax(4rem, 8rem)",
    },
  },
});

export const product_title = style({
  fontSize: vars.fontSize.regular,
  color: "rgba(0,0,0,0.8)",
  whiteSpace: "pre-wrap",
  padding: 5,
  paddingTop: 15,
});

export const product_price = style({
  padding: 5,
  fontSize: vars.fontSize.medium,
  fontWeight: vars.fontWeight.large,
  color: vars.themeColor.color.primary,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  "@media": {
    "screen and (max-width:479px)": {
      fontSize: vars.fontSize.regular,
    },
  },
});

export const progress_wrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const btn_icon = style({
  width: 20,
  height: 20,
  color: vars.themeColor.color.accent,
  opacity: 1,
  "@media": {
    "screen and (max-width:479px)": {
      display: "none",
    },
  },
});

export const prev_icon = style([
  btn_icon,
  {
    marginRight: 10,
  },
]);

export const next_icon = style([
  btn_icon,
  {
    marginLeft: 10,
  },
]);

export const icon_disable = style({
  opacity: 0.6,
});

export const progress_item = style({
  width: 12,
  height: 12,
  margin: "0 5px",
  borderRadius: "50%",
  backgroundColor: vars.themeColor.color.secondary,
  "@media": {
    "screen and (max-width:479px)": {
      width: 8,
      height: 8,
    },
  },
});

export const progress_active = style({
  backgroundColor: vars.themeColor.color.accent,
  transform: "scale(1.3)",
});
// today's product part
export const today_product_container = style([
  sub_theme_wrapper,
  {
    gridColumn: "1 / 3",
    gridRow: "3 / 4",
    "@media": {
      "screen and (max-width:479px)": {
        gridRow: "4 / 5",
      },
    },
  },
]);

// top deal
export const top_deal_container = style([
  sub_theme_wrapper,
  {
    gridColumn: "1 / 3",
    gridRow: "4 / 5",

    "@media": {
      "screen and (max-width:479px)": {
        gridRow: "6 / 7",
      },
    },
  },
]);

// adsense part

export const adsense_container = style({
  gridColumn: "1 / 3",
  gridRow: "5 / 6",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: `1px solid ${vars.themeColor.color.border}`,
  borderRadius: 5,
  marginTop: "2rem",
  "@media": {
    "screen and (max-width:479px)": {
      gridRow: "5 / 6",
      marginTop: "0",
      marginBottom: "1rem",
    },
  },
});

// Deleted after API approval (Overlay part)

export const overlay_container = style({
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.6)",
  zIndex: 999,
});

export const notice_wrapper = style({
  position: "relative",
  width: "60%",
  height: "80%",
  backgroundColor: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export const close_icon = style({
  position: "absolute",
  top: 30,
  right: 30,
  width: 40,
  height: 40,
  color: vars.themeColor.color.primary,
  ":hover": {
    cursor: "pointer",
  },
});

export const overlay_title = style({
  fontSize: vars.fontSize.XLarge,
  fontWeight: vars.fontWeight.large,
  marginBottom: "2rem",
});

export const overlay_text = style({
  fontSize: vars.fontSize.regular,
  width: "80%",
  color: vars.themeColor.color.secondaryText,
  marginBottom: "1.5rem",
  lineHeight: 1.3,
});

export const overlay_text_link = style([
  overlay_text,
  {
    fontWeight: vars.fontWeight.large,
  },
]);

export const overlay_link = style({
  color: vars.themeColor.color.primary,
  fontWeight: vars.fontWeight.large,
});
