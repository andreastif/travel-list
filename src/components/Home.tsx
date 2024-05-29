import { Outlet } from "react-router-dom";
import { Disclaimer } from "./Disclaimer";

export const Home = () => {
  return (
    <div className="bg-black-100/60">
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Disclaimer />
    </div>
  );
};
