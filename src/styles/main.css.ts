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
  fontSize: "2.6rem",
  fontWeight: "bold",
  lineHeight: "2.6rem",
  color: "#333",
});
export const info__text = style({
	margin:"5px 0"
})
export const info__yesterday = style({
	fontSize:"0.8rem",
	color:"#444"
})
export const info__location = style({
	fontSize:"0.8rem",
	color:"#444"
})

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
  margin: "10px 0",
  fontSize: ".8rem",
  color: "#666",
});
export const daily__listday = style({
  flexBasis: "60px",
  color: "#333",
  fontWeight: "bold",
});
export const daily__textday = style({
	fontSize:'0.9em',
	fontWeight:'normal',
	color: "#888",
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
	backgroundRepeat:"no-repeat",
	textIndent:'-9999px'
});
export const icon__weather__large = style({
	width:'140px',
	height:'140px',
	backgroundSize:"980px 840px"
});
export const icon__weather__small = style({
	width: "30px",
	height: "30px",
	backgroundSize:"210px 180px"
});
// 맑음
export const icon__weather__1 = style({
	backgroundPosition:"0 0"
});
export const icon__weather__1__night = style({
	backgroundPosition:"50% 40%"
});
// 구름많음
export const icon__weather__3 = style({
	backgroundPosition:"100% 20%"
});
export const icon__weather__3__night = style({
	backgroundPosition:"100% 40%"
});
// 흐림
export const icon__weather__4 = style({
	backgroundPosition:"100% 60%"
});
export const icon__weather__4__night = style({
	backgroundPosition:"100% 60%"
});
// 비
export const icon__weather__5 = style({
	backgroundPosition:"17% 0"
});
export const icon__weather__5__night = style({
	backgroundPosition:"17% 0"
});
// 비/눈
export const icon__weather__6 = style({
	backgroundPosition:"17% 60%"
});
export const icon__weather__6__night = style({
	backgroundPosition:"17% 60%"
});
// 눈
export const icon__weather__7 = style({
	backgroundPosition:"34% 0"
});
export const icon__weather__7__night = style({
	backgroundPosition:"83% 0"
});
// 소나기
export const icon__weather__8 = style({
	backgroundPosition:"50% 0"
});
export const icon__weather__8__night = style({
	backgroundPosition:"50% 0"
});
// 빗방울
export const icon__weather__9 = style({
	backgroundPosition:"100% 80%"
});
export const icon__weather__9__night = style({
	backgroundPosition:"66% 80%"
});
//빗방울/눈날림
export const icon__weather__10 = style({
	backgroundPosition:"67% 0"
});
export const icon__weather__10__night = style({
	backgroundPosition:"83% 20%"
});
// 눈날림
export const icon__weather__11 = style({
	backgroundPosition:"0 20%"
});
export const icon__weather__11__night = style({
	backgroundPosition:"0 20%"
});