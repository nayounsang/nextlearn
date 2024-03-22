import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
  Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif`,
  backgroundColor: "black",
  color: "white",
  fontSize: 18,
  paddingTop: 150,
});

globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});

globalStyle("a:hover", {
  textDecoration: "underline",
});
