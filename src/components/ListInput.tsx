const ListInput = () => {
  return (
    <input
      type="text"
      name="list-item"
      aria-label="New list item"
      placeholder="Add an item..."
      autoComplete="off"
      style={inputStyle}
    />
  );
};
const MARGIN = "20px";

const inputStyle: React.CSSProperties = {
  width: "min(100%, 32rem)",
  minHeight: "3rem",
  padding: "0.75rem 1rem",
  border: "1px solid #d8d1e3",
  borderRadius: "0.75rem",
  backgroundColor: "#ffffff",
  color: "#2d2638",
  fontFamily: "inherit",
  fontSize: "1rem",
  lineHeight: 1.5,
  caretColor: "#7c3aed",
  boxShadow: "0 2px 8px rgba(45, 38, 56, 0.08)",
  outline: "none",
  marginTop: MARGIN,
  marginBottom: MARGIN,
};

export default ListInput;
