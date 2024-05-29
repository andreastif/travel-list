import { Form } from "./comps/Form";
import { Logo } from "./comps/Logo";
import { PackingList } from "./comps/PackingList";
import { Stats } from "./comps/Stats";

export const TravelPage = () => {
  return (
    <>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </>
  );
};
