import { style } from "@vanilla-extract/css";

export const navStyle = style({
  backgroundColor: "#2d2d2d",
  position: "fixed",
  width: "30%",
  margin: "0 auto",
  top: "20px",
  borderRadius: "50px",
  padding: "20px 0px",
  left: "50%",
  zIndex: 10,
  transform: "translateX(-50%)",
});

export const ulStyle = style({
  display: "flex",
  justifyContent: "center",
  gap: "50px",
});

export const liStyle = style({
  transition: "all 0.1s ease-in-out",
  ":hover": {
    transform: "scale(1.05)",
  },
});
