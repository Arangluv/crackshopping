import { style } from "@vanilla-extract/css";

export const search_main_container = style({
  gridRow: "2 / 3",
  gridColumn: "1 / 4",
  display: "grid",
  gridTemplateRows: "minmax(10rem, 12rem) minmax(80vh, auto)",
  gridTemplateColumns: "minmax(16rem, 18rem) minmax(10rem, auto)",
  border: "1px solid red",
  height: "100vh",
  width: "100%",
});

export const grid_item = style({
  border: "1px solid red",
});
