import { Outlet } from "react-router";
import NavSlider from "./nav-slide";

const Inbox = () => {
  return (
    <div className=" grid grid-cols-10 gap-2 ">
      <div className=" col-span-2">
        <NavSlider />
      </div>
      <div className=" col-span-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Inbox;
