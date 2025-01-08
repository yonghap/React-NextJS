import { style } from "@vanilla-extract/css";

export const profile__box = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
});
export const profile__image = style({
  width: "40px",
  borderRadius: "5px",
});
export const profile__name = style({
  marginLeft: "6px",
  color: "#fff",
});

export const profile__list = style({
  marginTop: "15px",
  color: "#fff",
});

export const profile__item = style({
  textAlign: "center",
});
export const profile__link = style({
  display: "block",
  color: "#fff",
  lineHeight: "34px",
});
