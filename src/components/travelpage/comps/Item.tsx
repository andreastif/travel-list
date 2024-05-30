import { IItem } from "../../../types/types";

export const Item = ({
  item,
  onDeleteItem,
  onPackItem,
}: {
  item: IItem;
  onDeleteItem: (id: number) => void;
  onPackItem: (id: number) => void;
}) => {
  return (
    <li className="mx-1">
      <div className="flex flex-row justify-between border-2 rounded-md border-solid border-violet-500 bg-violet-500 max-w-56 max-h-24 items-center px-1 py-4">
        <input className="ml-2 size-4" type="checkbox" onChange={() => onPackItem(item.id)} checked={item.packed} />
        <p className={`mx-2 py-2 `}>{item.quantity}#</p>
        <div className={`${item.packed ? "line-through" : ""} overflow-x-scroll overflow-y-scroll my-2 mx-2 py-2`}>
          <p className={`mx-2 py-2 uppercase max-h-20`}>{item.description}</p>
        </div>
        <button onClick={() => onDeleteItem(item.id)} className="btn-xs btn-circle btn m-2">
          ❌
        </button>
      </div>
    </li>
  );
};
