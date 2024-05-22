import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const header_container = style({
  display: "grid",
  width: "100%",
  height: "100%",
  gridColumn: "1 / 4",
  gridRow: "1 / 2",
  border: "1px solid red",
  gridTemplateColumns: "1fr 3fr 1fr",
  gridTemplateRows: "1fr 1fr",
});

export const grid_item = style({
  border: "1px solid blue",
});

export const logo_wrapper = style({
  gridColumn: "1 / 2",
  gridRow: "1 / 3",
  width: "100%",
  height: "100%",
  backgroundColor: vars.themeColor.color.accent,
});
