type Item = {
  id: string;
  item: string;
};
interface Props {
  item: Item;
  onDelete: (id: string) => void;
}
const ListItem = ({ item, onDelete }: Props) => {
  return (
    <li style={listItemStyle}>
      <span style={itemTextStyle}>{item.item}</span>
      <button
        type="button"
        aria-label={`Delete ${item.item}`}
        style={deleteButtonStyle}
        onClick={() => onDelete(item.id)}
      >
        Delete
      </button>
    </li>
  );
};

const listItemStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "1rem",
  width: "min(100%, 32rem)",
  minHeight: "3rem",
  marginBottom: "0.75rem",
  padding: "0.875rem 1rem",
  border: "1px solid #e6e0ee",
  borderLeft: "4px solid #7c3aed",
  borderRadius: "0.75rem",
  backgroundColor: "#ffffff",
  color: "#2d2638",
  fontFamily: "inherit",
  fontSize: "1rem",
  lineHeight: 1.5,
  listStyle: "none",
  overflowWrap: "anywhere",
  boxShadow: "0 2px 8px rgba(45, 38, 56, 0.08)",
};

const itemTextStyle: React.CSSProperties = {
  minWidth: 0,
  overflowWrap: "anywhere",
};

const deleteButtonStyle: React.CSSProperties = {
  flexShrink: 0,
  padding: "0.5rem 0.75rem",
  border: "1px solid #fecaca",
  borderRadius: "0.5rem",
  backgroundColor: "#fff1f2",
  color: "#be123c",
  fontFamily: "inherit",
  fontSize: "0.875rem",
  fontWeight: 600,
  cursor: "pointer",
};

export default ListItem;
