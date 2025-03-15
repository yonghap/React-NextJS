import { style } from "@vanilla-extract/css";

export const wrap = style({
  maxWidth: "460px",
  minHeight: "100vh",
  margin: "0 auto",
  borderLeft: "1px solid #ddd",
  borderRight: "1px solid #ddd",
  backgroundColor: "#eee",
});

export const blue = style({
	color:'#0000cc'
})

export const red = style({
	color:'#cc0000'
})

export const bar = style({
	margin:"0 2px",
	color:'#ccc'
})

export const row = style({
  maxWidth: "1000px",
  margin: "0 auto",
});

export const row__small = style({
  maxWidth: "180px",
  padding: "30px 20px",
  border: "1px solid #666",
  borderRadius: "10px",
});

export const boxs = style({
  padding: "20px",
});

export const box = style({
  marginBottom: "15px",
  padding: "30px 20px 30px",
  backgroundColor: "#fff",
});

export const box__title = style({
  marginBottom: "15px",
  fontSize: "1.2rem",
});

export const unit = style({
	fontSize:"0.6em",
	fontWeight:"normal",
	verticalAlign:"top"
})