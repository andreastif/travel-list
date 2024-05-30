import { IItem } from "../../../types/types";

export const Stats = ({ items }: { items: IItem[] }) => {
  const packedItems = items.reduce((acc, cur) => (cur.packed ? (acc = acc + 1) : acc), 0);
  return (
    <footer className="bg-teal-500 text-center font-bold py-10 italic">
      💼You have {items.length > 0 ? items.length : "0"} items on your list
      {items.length > 0
        ? ` and you have packed ${packedItems} item(s) (${((packedItems / items.length) * 100).toFixed(0)}%)`
        : "."}
    </footer>
  );
};
