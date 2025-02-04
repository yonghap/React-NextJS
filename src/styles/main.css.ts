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

export const info__icon = style({
  marginLeft: "6px",
});

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

export const icon__weather = style({
  display: "inline-block",
  width: "6.4rem",
  height: "6.4rem",
  backgroundSize: "cover",
  textIndent: "-9999px",
});

export const icon__weather__small = style({
  width: "1.8rem",
  height: "1.8rem",
});

import * as icon_weather from "@/assets/images/icon_weather";

export const icon__weather1 = style({
  backgroundImage: "url(" + icon_weather.icon_weather_sunny.src + ")",
});
export const icon__weather2 = style({
  backgroundImage: "url(" + icon_weather.icon_weather_cloudy.src + ")",
});
export const icon__weather3 = style({
  backgroundImage: "url(" + icon_weather.icon_weather_cloudy2.src + ")",
});
export const icon__weather4 = style({
  backgroundImage: "url(" + icon_weather.icon_weather_cloudy.src + ")",
});
export const night = style({
  backgroundImage: "url(" + icon_weather.icon_weather_sunnynight.src + ")",
});
