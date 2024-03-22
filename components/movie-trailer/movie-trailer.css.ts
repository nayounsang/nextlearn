import { style } from "@vanilla-extract/css";

export const containerStyle = style({
  width: "80%",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: 20,
  marginTop: 100,
  paddingBottom: 100,
});

export const videoStyle = style({
  maxWidth: "90%",
  borderRadius: 10,
  opacity: 0.8,
  transition: "opacity 0.2s ease-in-out",
  ":hover": {
    opacity: 1,
  },
});
