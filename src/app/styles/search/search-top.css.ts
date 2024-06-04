import { vars } from "@style/theme.css";
import { style } from "@vanilla-extract/css";

export const search_top_container = style({
  gridRow: "1 / 2",
  gridColumn: "2 / 3",
  display: "grid",
  gridTemplateRows: "1fr 1fr 1fr",
});

export const recommended_keywords_wrapper = style({
  display: "flex",
  alignItems: "center",
});

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
});
