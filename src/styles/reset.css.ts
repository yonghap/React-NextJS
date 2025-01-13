import { style, globalStyle } from "@vanilla-extract/css";

globalStyle("html, body, ul, li, ol, p,h1,h2,h3,h4,h5,h6", {
  margin: 0,
  padding: 0,
});

globalStyle("div,ul,li,p,span", {
  boxSizing: "border-box",
});
globalStyle("html,body", {
  height: "100%",
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
