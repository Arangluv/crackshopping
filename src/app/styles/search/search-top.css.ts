/* eslint-disable */

import { vars } from "@style/theme.css";
import { style } from "@vanilla-extract/css";

export const search_top_container = style({
  gridRow: "1 / 2",
  gridColumn: "2 / 3",
  display: "grid",
  gridTemplateRows: "1fr 1fr 1fr",
  "@media": {
    "screen and (max-width:479px)": {
      gridColumn: "1 / 3",
    },
  },
});

export const flex_box_align_center = style({
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  "@media": {
    "screen and (max-width:479px)": {
      padding: "0 0.7rem",
    },
  },
});

export const keywords_wrapper = style([
  flex_box_align_center,
  {
    "@media": {
      "screen and (max-width:479px)": {
        borderTop: `1px solid ${vars.themeColor.color.secondary}`,
        borderBottom: `1px solid ${vars.themeColor.color.secondary}`,
      },
    },
  },
]);

export const recommended_keywords = style({
  border: `1px solid ${vars.themeColor.color.primary}`,
  color: vars.themeColor.color.primary,
  padding: "0.7rem",
  borderRadius: 10,
  transition: "all .1s ease-in-out",
  ":hover": {
    backgroundColor: vars.themeColor.color.primary,
    color: vars.themeColor.color.background,
  },
  selectors: {
    "&:not(:first-child)": {
      marginLeft: "1rem",
    },
  },
  "@media": {
    "screen and (max-width:479px)": {
      fontSize: vars.fontSize.micro,
      padding: 0,
      border: "none",
      lineHeight: 1.3,
      fontWeight: vars.fontWeight.medium,
    },
  },
});

export const text_accent = style({
  fontWeight: vars.fontWeight.medium,
  color: vars.themeColor.color.accent,
});

export const result_quantity_text = style({
  fontSize: vars.fontSize.regular,
  "@media": {
    "screen and (max-width:479px)": {
      fontSize: vars.fontSize.middleSmall,
    },
  },
});

export const sorted_wrapper = style({
  display: "flex",
  alignItems: "center",
  backgroundColor: vars.themeColor.color.secondary,
});

export const sorted_item = style({
  ":hover": {
    cursor: "pointer",
  },
  selectors: {
    "&:not(:first-child)": {
      padding: "0 1rem",
      borderLeft: `1px solid ${vars.themeColor.color.border}`,
    },
    "&:first-child": {
      paddingRight: "1rem",
      marginLeft: "1rem",
    },
  },
  "@media": {
    "screen and (max-width:479px)": {
      fontSize: vars.fontSize.small,
    },
  },
});
