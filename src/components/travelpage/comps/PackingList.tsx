import { OptionProps, SingleValue, StylesConfig } from "react-select";
import { IItem } from "../../../types/types";
import { Item } from "./Item";
import Select from "react-select";
import { useState } from "react";

interface ISelectOption {
  readonly value: string;
  readonly label: string;
}

const selectOptions: ISelectOption[] = [
  { value: "input", label: "Sort by input order" },
  { value: "description", label: "Sort by description" },
  { value: "packed", label: "Sort by packed status" },
];

const selectStyles: StylesConfig<ISelectOption, false> = {
  control: (base) => ({
    ...base,
    borderColor: "rgb(254, 243, 199)",
    backgroundColor: "rgb(254, 243, 199)",
    borderRadius: "17px",
    color: "black !important",
    cursor: "pointer",
    fontStyle: "italic",
  }),
  option: (base, state: OptionProps<ISelectOption, false>) => ({
    ...base,
    backgroundColor: state.isFocused ? "rgba(137, 184, 206, 0.53)" : "rgb(254, 243, 199)",
    borderColor: "rgb(254, 243, 199)",
    color: "black !important",
    fontSize: "14px",
    fontStyle: "italic",
  }),
  menu: (base) => ({
    ...base,
    marginTop: "5px",
    border: "none",
    borderColor: "rgb(254, 243, 199)",
  }),
};

export const PackingList = ({
  items,
  onDeleteItem,
  onPackItem,
  onClearList,
}: {
  items: IItem[];
  onDeleteItem: (id: number) => void;
  onPackItem: (id: number) => void;
  onClearList: () => void;
}) => {
  const [selection, setSelection] = useState<ISelectOption>({ value: "input", label: "Sort by input order" });

  const handleSelect = (e: SingleValue<ISelectOption>) => {
    if (e !== null) {
      setSelection(e);
    }
  };

  // sorting based on derived state
  let sortedItems: IItem[] = items;
  if (selection.value === "input") sortedItems = items;
  if (selection.value === "description")
    sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
  if (selection.value === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="min-h-screen-70 bg-amber-900 text-white py-12 px-0 flex flex-col justify-between items-center">
      <ul className="grid gap-4 gap-x-40 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 content-start justify-center">
        {sortedItems.map((item) => (
          <Item item={item} onDeleteItem={onDeleteItem} onPackItem={onPackItem} key={`PackingList: + ${item.id}`} />
        ))}
      </ul>
      <div className="flex flex-col sm:flex-row gap-4 items-center mt-10">
        <Select
          className="w-56"
          styles={selectStyles}
          options={selectOptions}
          onChange={handleSelect}
          value={selection}
          placeholder={"Sort by..."}
        />
        <button className="btn btn-sm btn-success w-56  h-10 btn-circle" onClick={onClearList}>
          Clear List
        </button>
      </div>
    </div>
  );
};
