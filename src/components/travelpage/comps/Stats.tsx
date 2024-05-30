import { IItem } from "../../../types/types";

export const Stats = ({ items }: { items: IItem[] }) => {
  const numItems = items.length;

  //early return to skip unecessary calculations
  if (numItems < 1) {
    return (
      <footer className="bg-teal-500 text-center font-bold py-10 italic">
        Start adding some items to your packing list! 🚀
      </footer>
    );
  }

  //trying out reduce, items.filter((item) => item.packed).length is more readable and preferred
  const numPacked = items.reduce((acc, curr) => (curr.packed ? (acc += 1) : acc), 0);
  const percentagePacked = ((numPacked / numItems) * 100).toFixed(0);

  return (
    <footer className="bg-teal-500 text-center font-bold py-10 italic">
      {percentagePacked === "100"
        ? "You got everything! Ready to go! ✈️"
        : `💼You have ${numItems} items on your list ${
            numItems > 0 ? ` and you have packed ${numPacked} item(s) (${percentagePacked}%)` : "."
          }`}
    </footer>
  );
};
