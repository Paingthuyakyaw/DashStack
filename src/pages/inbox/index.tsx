import { Outlet } from "react-router";
import NavSlider from "./nav-slide";

const Inbox = () => {
  return (
    <div className=" grid grid-cols-12 gap-2 ">
      <div className=" col-span-3">
        <NavSlider />
      </div>
      <div className=" col-span-9">
        <Outlet />
      </div>
    </div>
  );
};

export default Inbox;
