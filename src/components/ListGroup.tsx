import ListItem from "./ListItem";
type ListItem = {
  id: string;
  item: string;
};
interface Props {
  data: ListItem[];
  onDelete: (id: string) => void;
}
const ListGroup = ({ data, onDelete }: Props) => {
  return (
    <ul>
      {data.map((item) => (
        <ListItem key={item.id} item={item} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ListGroup;
