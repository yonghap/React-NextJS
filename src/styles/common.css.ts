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
  padding: "15px",
  backgroundColor: "#fff",
});

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

export const info__icon = style({
  marginLeft: "6px",
});

export const icon__weather = style({
  display: "inline-block",
  width: "6.4rem",
  height: "6.4rem",
  backgroundSize: "cover",
  textIndent: "-9999px",
});

import * as icon_weather from "@/assets/images/icon_weather";

export const icon__weather1 = style({
  backgroundImage: "url(" + icon_weather.icon_weather_sunny.src + ")",
});
export const icon__weather2 = style({
  backgroundImage: "url(" + icon_weather.icon_weather_cloudy.src + ")",
});
export const icon__weather3 = style({
  backgroundImage: "url(" + icon_weather.icon_weather_cloudy.src + ")",
});
