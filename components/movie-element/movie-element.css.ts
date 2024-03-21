import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  display: "grid",
  gridTemplateRows: "1fr auto",
  gap: "20px",
  cursor: "pointer",
  placeItems: "center",
});

export const imageStyle = style({
  maxWidth: "100%",
  minHeight: "100%",
  borderRadius: "10px",
  transition: "opacity 0.3s ease-in-out",
  opacity: 0.7,
  ":hover": {
    opacity: 1,
  },
});

export const textStyle = style({
  textAlign: "center",
});
