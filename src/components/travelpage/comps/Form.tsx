import { useState } from "react";
import { IItem } from "../../../types/types";
import Select, { OptionProps, StylesConfig } from "react-select";
import { SingleValue } from "react-select";

interface IAmountOption {
  readonly value: string;
  readonly label: string;
}

const amountOptions: IAmountOption[] = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
  { value: "6", label: "6" },
  { value: "7", label: "7" },
  { value: "8", label: "8" },
  { value: "9", label: "9" },
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "12", label: "12" },
  { value: "13", label: "13" },
  { value: "14", label: "14" },
  { value: "15", label: "15" },
  { value: "16", label: "16" },
  { value: "17", label: "17" },
  { value: "18", label: "18" },
  { value: "19", label: "19" },
  { value: "20", label: "20" },
];

const selectStyles: StylesConfig<IAmountOption, false> = {
  control: (base) => ({
    ...base,
    borderColor: "rgb(254, 243, 199)",
    backgroundColor: "rgb(254, 243, 199)",
    borderRadius: "17px",
    color: "black !important",
    cursor: "pointer",
  }),
  option: (base, state: OptionProps<IAmountOption, false>) => ({
    ...base,
    backgroundColor: state.isFocused ? "rgba(137, 184, 206, 0.53)" : "rgb(254, 243, 199)",
    borderColor: "rgb(254, 243, 199)",
    color: "black !important",
  }),
  menu: (base) => ({
    ...base,
    marginTop: "5px",

    border: "none",
    borderColor: "rgb(254, 243, 199)",
  }),
};

export const Form = () => {
  const [description, setDescription] = useState("");
  const [selection, setSelection] = useState<IAmountOption>({ value: "1", label: "1" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // guard clause
    if (!description) {
      return;
    }

    // populate object
    const newItem: IItem = { description: description, quantity: +selection.value, packed: false, id: Date.now() };

    // reset
    setDescription("");
    setSelection({ value: "1", label: "1" });

    // debugging
    console.log(newItem);
  };

  const handleDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSelect = (e: SingleValue<IAmountOption>) => {
    if (e !== null) {
      setSelection(e);
    }
  };

  return (
    <div className="bg-orange-400 py-11 px-0 flex flex-col">
      <h3 className="text-xl mb-10 text-center">What do you need for your trip?😍</h3>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          className=" bg-yellow-100 rounded-3xl cursor-pointerfont-medium text-left py-2 px-6"
          type="text"
          placeholder="Item..."
          value={description}
          onChange={handleDescription}
        />
        <Select
          className="w-56"
          styles={selectStyles}
          options={amountOptions}
          onChange={handleSelect}
          value={selection}
        />
        <button className="btn btn-sm btn-success px-12 btn-circle">ADD</button>
      </form>
    </div>
  );
};
