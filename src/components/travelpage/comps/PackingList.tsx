import { IItem } from "../../../types/types";
import { Item } from "./Item";

export const PackingList = ({
  items,
  onDeleteItem,
  onPackItem,
}: {
  items: IItem[];
  onDeleteItem: (id: number) => void;
  onPackItem: (id: number) => void;
}) => {
  return (
    <div className="min-h-screen-70 bg-amber-900 text-white py-12 px-0 flex flex-col justify-between items-center">
      <ul className="grid gap-4 gap-x-40 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-start justify-center">
        {items.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} onPackItem={onPackItem} key={`PackingList: + ${item.id}`} />
        ))}
      </ul>
    </div>
  );
};
