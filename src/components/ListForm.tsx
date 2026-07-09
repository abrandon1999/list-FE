import { type CSSProperties, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  onForm: (formData: FormData) => void;
}
export default function ListForm({ children, onForm }: Props) {
  return (
    <form action={onForm} style={formStyle}>
      {children}
    </form>
  );
}

const formStyle: CSSProperties = {
  padding: "10px",
};
