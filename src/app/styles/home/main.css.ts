/* eslint-disable */

import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const main_wrapper = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr 1fr 1fr",
  width: "100vw",
  minHeight: "100vh",
  height: "auto",
  padding: "0px 10vw",
  boxSizing: "border-box",
});

export const grid_item = style({
  border: "1px solid red",
});
