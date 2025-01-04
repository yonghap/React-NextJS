import { style, globalStyle } from "@vanilla-extract/css";

globalStyle("html, body, ul, li, ol, p", {
  margin: 0,
  padding: 0,
});

globalStyle("div,ul,li,p,span", {
  boxSizing: "border-box",
});
globalStyle("html,body", {
  height: "100%",
});

globalStyle("body", {
  background:
    "url('https://store.fastly.steamstatic.com/public/images/v6/colored_body_top.png?v=2') no-repeat center top",
  backgroundSize: "cover",
});

globalStyle("a,img", {
  verticalAlign: "top",
});

globalStyle("img", {
  maxWidth: "100%",
});
