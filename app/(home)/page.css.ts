import { style } from "@vanilla-extract/css";

export const pageStyle = style({
  display: "grid",
  gridTemplateColumns: "repeat(5, 1fr)",
  gap: "25px",
  maxWidth: "90%",
  width: "100%",
  margin: "0 auto",
});
