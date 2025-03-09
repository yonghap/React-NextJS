import { style } from "@vanilla-extract/css";

export const info__wrap = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const info__box = style({
  textAlign: "right",
});

export const info__temperature = style({
  height: "2.4rem",
  fontSize: "2.4rem",
  fontWeight: "bold",
  lineHeight: "2.4rem",
  color: "#333",
});

// 시간대별 날씨
export const hourly__list = style({
  display: "flex",
  flexWrap: "nowrap",
  overflowX: "scroll",
  gap: "20px",
  textAlign: "center",
});
export const hourly__listwrap = style({
  flex: "0 0 auto",
  fontSize: ".8rem",
  color: "#666",
});
export const hourly__listtime = style({
  fontWeight: "bold",
});

export const hourly__icon = style({
  margin: "5px 0",
});

export const air__list = style({
  display: "flex",
  justifyContent: "space-between",
  textAlign: "center",
});
export const air__listwrap = style({
  fontSize: ".8rem",
});
export const air__listdate = style({
  color: "#666",
});

export const air__listitem = style({
  fontWeight: "bold",
});

export const air__icon = style({
  margin: "5px 0",
});

export const daily__listwrap = style({
  display: "flex",
  justifyContent: "space-between",
  margin: "5px 0",
  fontSize: ".8rem",
  color: "#666",
});
export const daily__listday = style({
  flexBasis: "60px",
  color: "#333",
  fontWeight: "bold",
});
export const daily__listtemp = style({
  flexBasis: "70px",
  fontWeight: "700",
  textAlign: "right",
});

import { sp_weather } from "@/assets/images/index";

export const icon__weather = style({
	display: "inline-block",
	backgroundImage: "url(" + sp_weather.src + ")",
	textIndent:'-9999px'
});
export const icon__weather__large = style({
	width:'140px',
	height:'140px',
	backgroundSize:"980px 840px"
});
// 맑음
export const icon__weather__1 = style({
	backgroundPosition:"0 0"
});
// 구름많음
export const icon__weather__2 = style({
	backgroundPosition:"-840px -140px"
});
// 흐림
export const icon__weather__3 = style({
	backgroundPosition:"-840px -420px"
});
// 비
export const icon__weather__4 = style({
	backgroundPosition:"-140px 0"
});
// 비/눈
export const icon__weather__5 = style({
	backgroundPosition:"-560px 0"
});
// 눈
export const icon__weather__6 = style({
	backgroundPosition:"-280px 0"
});
// 빗방울
export const icon__weather__7 = style({
	backgroundPosition:"-840px -560px"
});
//빗방울/눈날림
export const icon__weather__8 = style({
	backgroundPosition:"-140px -420px"
});
// 눈날림
export const icon__weather__9 = style({
	backgroundPosition:"0 -140px"
});
export const icon__weather__small = style({
	width: "1.8rem",
	height: "1.8rem",
});