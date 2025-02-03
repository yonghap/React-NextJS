import { style } from "@vanilla-extract/css";

export const wrap = style({
  maxWidth: "460px",
  minHeight: "100vh",
  margin: "0 auto",
  borderLeft: "1px solid #ddd",
  borderRight: "1px solid #ddd",
});

export const row = style({
  maxWidth: "1000px",
  margin: "0 auto",
});

export const row__small = style({
  maxWidth: "180px",
  padding: "30px 20px",
  border: "1px solid #666",
  borderRadius: "10px",
  background: "rgba(37,45,53,0.9)",
});

export const boxs = style({
  padding: "15px",
  backgroundColor: "#eee",
});

export const box = style({
  margin: "0 15px 15px",
  padding: "15px 15px 30px",
  backgroundColor: "#fff",
});

export const box__title = style({
  marginBottom: "12px",
  fontSize: "1.2rem",
});
