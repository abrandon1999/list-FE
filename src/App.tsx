import ListButton from "./components/ListButton";
import ListInput from "./components/ListInput";
import ListForm from "./components/ListForm";
import ListGroup from "./components/ListGroup";
import { useEffect, useState } from "react";

const BACKEND = import.meta.env.VITE_BACKEND_URL || "http://192.168.1.178:3000";

type ListItem = {
  id: string;
  item: string;
};
const isListItem = (value: unknown): value is ListItem => {
  if (typeof value !== "object" || value === null) return false;

  const item = value as Record<string, unknown>;
  return typeof item.id === "string" && typeof item.item === "string";
};

const isList = (value: unknown): value is ListItem[] =>
  Array.isArray(value) && value.every(isListItem);

const App = () => {
  console.log(BACKEND);
  const [list, setList] = useState<ListItem[]>([]);
  const [item, setItem] = useState<ListItem | null>();
  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch(`${BACKEND}/api/list`);
        if (!response.ok) throw new Error(`${response.status}`);
        const result: unknown = await response.json();
        if (!isList(result)) {
          throw new Error("The server returned an invalid list");
        }

        // result is safely narrowed to ListItem[] here.
        setList(result);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log("An unknown error occurred");
        }
      }
    };
    fetchList();
  }, [item]);
  return (
    <div>
      <ListForm onForm={handleForm}>
        <ListInput />
        <ListButton />
      </ListForm>
      <ListGroup data={list} onDelete={handleDelete} />
    </div>
  );
  async function handleForm(formData: FormData) {
    const item = formData.get("list-item") as string;
    const response = await fetch(`${BACKEND}/api/list`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ item: item }),
    });
    if (!response.ok) {
      throw new Error(`Response Status: ${response.status}`);
    }
    const newItem = (await response.json()) as ListItem;
    setItem(newItem);
  }
  async function handleDelete(id: string) {
    const response = await fetch(`${BACKEND}/api/list/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      console.log("Response Not Ok!!");
      throw new Error(`Response Status: ${response.status}`);
    }
    const deletedItem = (await response.json()) as ListItem;
    setItem(deletedItem);
  }
};

export default App;
