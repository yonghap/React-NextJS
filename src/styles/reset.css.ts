import { style, globalStyle, globalFontFace } from "@vanilla-extract/css";
// @import url('https://fonts.googleapis.com/css2?family=Gowun+Batang&family=Noto+Sans+KR:wght@100..900&display=swap');

globalStyle("html, body, ul, li, ol, p,h1,h2,h3,h4,h5,h6", {
  margin: 0,
  padding: 0,
});

globalStyle("div,ul,li,p,span", {
  boxSizing: "border-box",
});
globalStyle("html,body", {
  height: "100%",
  fontFamily: "Hahmlet",
});

globalStyle("ul,li,ol", {
  listStyle: "none",
});
globalStyle("a,img", {
  verticalAlign: "top",
});
globalStyle("a", {
  textDecoration: "none",
});

globalStyle("img", {
  maxWidth: "100%",
});

globalStyle("button", {
  border: "none",
  background: "none",
  cursor: "pointer",
});

globalFontFace("Hahmlet", {
  src: "url(https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2110@1.0/Hahmlet-Regular.woff2) format('woff2')",
  fontStyle: "normal",
  fontDisplay: "swap",
});
