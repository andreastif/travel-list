import { useState } from "react";
import { Form } from "./comps/Form";
import { Logo } from "./comps/Logo";
import { PackingList } from "./comps/PackingList";
import { Stats } from "./comps/Stats";
import { IItem } from "../../types/types";

export const TravelPage = () => {
  const [items, setItems] = useState<IItem[]>([]);

  const handleAddItems = (item: IItem) => {
    setItems((prev) => [...prev, item]);
  };

  const handleDeleteItem = (id: number) => {
    setItems((prev) => prev.filter((val) => val.id !== id));
  };

  const handlePackItem = (id: number) => {
    setItems((prev) => {
      return prev.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        }
        return item;
      });
    });
  };

  return (
    <>
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDeleteItem} onPackItem={handlePackItem} />
      <Stats />
    </>
  );
};
