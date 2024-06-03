import { style } from "@vanilla-extract/css";

export const info_container = style({
  gridRow: "2 / 3",
  gridColumn: "1 / 4",
  display: "grid",
  gridTemplateColumns: "14rem auto",
});

export const grid_item = style({
  border: "1px solid red",
});
