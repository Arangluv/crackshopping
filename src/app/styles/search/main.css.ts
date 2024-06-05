/* eslint-disable */

import { vars } from "@style/theme.css";
import { style } from "@vanilla-extract/css";

export const search_main_container = style({
  gridRow: "2 / 3",
  gridColumn: "1 / 4",
  display: "grid",
  gridTemplateRows: "minmax(10rem, 12rem) minmax(80vh, auto)",
  gridTemplateColumns: "minmax(16rem, 18rem) minmax(10rem, auto)",
  minHeight: "100vh",
  width: "100%",
});

// search product item main part

export const product_list_wrapper = style({
  borderBottom: `1px solid ${vars.themeColor.color.border}`,
});

export const product_main_container = style({
  gridRow: "2 / 3",
  gridColumn: "2 / 3",
  display: "grid",
  gridAutoRows: "20rem",
  padding: 5,
  gap: "1.5rem",
});

export const product_link = style({
  boxSizing: "border-box",
  width: "100%",
  height: "100%",
  display: "block",
});

export const product_detail_wrapper = style({
  display: "grid",
  height: "100%",
  gridTemplateColumns: "14rem calc(100% - 14rem)",
  gridTemplateRows: "1fr 1fr 1fr",
  gap: 5,
});

export const product_image_wrapper = style({
  gridRow: "1 / 4",
  gridColumn: "1 / 2",
  overflow: "hidden",
  marginRight: "1rem",
});

export const product_image = style({
  width: "100%",
  height: "100%",
  objectFit: "contain",
  transition: "all .1s ease-in-out",
  selectors: {
    [`${product_detail_wrapper}:hover &`]: {
      transform: "scale(1.1)",
    },
  },
});

export const product_title_wrapper = style({
  display: "flex",
  alignItems: "center",
});

export const product_price_wrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "100%",
  alignItems: "center",
});

export const price_info_wrapper = style({});

export const supported_retailer_wrapper = style({
  display: "flex",
  alignItems: "center",
});
export const logo_wrapper = style({
  height: "80%",
});
export const retailer_logo = style({
  height: "100%",
});

export const product_title_text = style({
  fontSize: vars.fontSize.regular,
  fontWeight: vars.fontWeight.medium,
  width: "80%",
  lineHeight: 1.5,
});

export const price_text = style({
  fontSize: vars.fontSize.medium,
  fontWeight: vars.fontWeight.large,
  color: vars.themeColor.color.primary,
  marginRight: "0.5rem",
});

export const price_additional_info = style({
  color: "rgba(0,0,0,0.8)",
});

export const product_additional_info_wrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
});

export const info_sub_wrapper = style({
  height: "100%",
  display: "flex",
  alignItems: "center",
  paddingRight: "2rem",
});

export const offer_and_feature_wrapper = style({
  display: "grid",
  gridTemplateRows: "6fr 4fr",
  padding: "1rem 0",
  paddingRight: "2rem",
});
export const product_offers_text = style({
  color: vars.themeColor.color.secondaryText,
});
export const featured_offers_text = style({
  fontWeight: vars.fontWeight.medium,
});

export const review_icon = style({
  color: "#FF9600",
});

export const review_count_text = style({
  marginLeft: ".3rem",
  color: vars.themeColor.color.secondaryText,
});
