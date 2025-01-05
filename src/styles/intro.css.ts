import { style } from "@vanilla-extract/css";

export const intro = style({
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const intro__wrap = style({
  textAlign: "center",
});

export const intro__logo = style({
  maxWidth: "80px",
  margin: "0 auto",
});

export const intro__title = style({
  margin: "10px 0",
  fontSize: "1.2rem",
  color: "#fff",
});

export const intro__button = style({
  marginTop: "20px",
  padding: "1px 15px",
  borderRadius: "2px",
  background: "linear-gradient( to bottom, #a4d007 5%, #536904 95%)",
  color: "#D2E885",
  lineHeight: "26px",
});
