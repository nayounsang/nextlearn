import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "grid",
  gridTemplateColumns: "1fr 2fr",
  gap: 20,
  width: "80%",
  margin: "0 auto",
});

export const posterStyle = style({
  borderRadius: 20,
  maxWidth: "70%",
  placeSelf: "center",
});

export const titleStyle = style({
  color: "white",
  fontSize: 36,
  fontWeight: 600,
});

export const infoStyle = style({
  display: "flex",
  flexDirection: "column",
  marginTop: 20,
  gap: 20,
});
