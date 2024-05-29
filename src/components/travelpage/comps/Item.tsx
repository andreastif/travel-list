import { IItem } from "../../../types/types";

export const Item = ({ ...item }: IItem) => {
  return (
    <li>
      <span className={`${item.packed ? "line-through" : ""} `}>
        {item.quantity} {item.description}
      </span>
      <button className="btn-xs btn-circle btn mx-1">❌</button>
    </li>
  );
};
