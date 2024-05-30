/* eslint-disable */

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
export const main_content_container = style({
  gridRow: "2 / 3",
  gridColumn: "1 / 4",
  display: "grid",
  gridTemplateColumns: "1fr 4fr",
  gridTemplateRows: "repeat(5, 1fr)",
  border: "1px solid red",
});
export const grid_item = style({
  border: "1px solid blue",
});
