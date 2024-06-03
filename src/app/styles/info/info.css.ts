import { vars } from "@style/theme.css";
import { style } from "@vanilla-extract/css";

export const sidebar_container = style({
  border: "1px solid red",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
export const list_item = style({
  margin: "1rem 0",
});
export const link_text = style({
  color: vars.themeColor.color.text,
  fontSize: vars.fontSize.regular,
  opacity: "0.8",
  fontWeight: vars.fontWeight.medium,
  transition: "color .1s ease-in-out",
  ":hover": {
    color: vars.themeColor.color.accent,
    opacity: 1,
  },
});

export const text_active = style({
  color: vars.themeColor.color.accent,
  opacity: 1,
});
