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
  padding: "15px 0",
  backgroundColor: "#ddd",
});

export const box = style({
  margin: "0 15px 0",
  padding: "10px",
  backgroundColor: "#fff",
});

export const info__wrap = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const info__temperature = style({
  fontSize: "3rem",
  fontWeight: "bold",
});

export const icon__sky = style({
  display: "inline-block",
  width: "30px",
  height: "30px",
});

export const icon__sky4 = style({
  background: "url(/src/assets/images/hail.png)",
});
