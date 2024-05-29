import { IItem } from "../../../types/types";
import { Item } from "./Item";

const initialItems: IItem[] = [
  { id: 1, description: "Passport", quantity: 1, packed: false },
  { id: 2, description: "Socks", quantity: 4, packed: false },
  { id: 3, description: "Toothbrush", quantity: 1, packed: false },
  { id: 4, description: "Shirts", quantity: 4, packed: false },
  { id: 5, description: "charger", quantity: 1, packed: true },
];

export const PackingList = () => {
  return (
    <div className="min-h-screen-70 bg-amber-900 text-white py-12 px-0 flex flex-col justify-between items-center">
      <ul className="grid gap-4 gap-x-40 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-start justify-center">
        {initialItems.map((item) => (
          <Item key={`PackingList: + ${item.id}`} {...item} />
        ))}
      </ul>
    </div>
  );
};
