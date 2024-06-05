import { style } from "@vanilla-extract/css";

export const info_container = style({
  gridRow: "2 / 3",
  gridColumn: "1 / 4",
  display: "grid",
  gridTemplateColumns: "14rem auto",
});

export const info_main_wrapper = style({
  paddingLeft: "2rem",
  paddingTop: "2rem",
  gridAutoRows: "manmax(3rem, auto)",
});
