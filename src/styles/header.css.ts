import { style } from "@vanilla-extract/css";

export const header__wrap = style({
  display: "flex",
  justifyContent: "space-between",
  padding: "20px",
});

export const logo = style({
  display: "flex",
  maxWidth: "36px",
  alignItems: "center",
  fontSize: "1rem",
  color: "#fff",
});

export const title = style({
  marginLeft: "6px",
});
