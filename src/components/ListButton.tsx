import { type CSSProperties } from "react";

export default function ListButton() {
  return (
    <button type="submit" style={buttonStyle}>
      Enter Item
    </button>
  );
}

const buttonStyle: CSSProperties = {
  display: "inline-block",
  minHeight: "3rem",
  padding: "0.75rem 1.5rem",
  border: "none",
  borderRadius: "0.75rem",
  background: "linear-gradient(135deg, #8b5cf6, #6d28d9)",
  color: "#ffffff",
  fontFamily: "inherit",
  fontSize: "1rem",
  fontWeight: 600,
  lineHeight: 1.5,
  letterSpacing: "0.01em",
  cursor: "pointer",
  boxShadow: "0 4px 12px rgba(109, 40, 217, 0.28)",
  transition: "transform 150ms ease, box-shadow 150ms ease",
};
