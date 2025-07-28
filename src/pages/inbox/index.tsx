import { Outlet } from "react-router";
import NavSlider from "./nav-slide";

const Inbox = () => {
  return (
    <div className=" flex grid-cols-10 gap-2 ">
      <div className=" w-[350px] col-span-2">
        <NavSlider />
      </div>
      <div className=" w-full col-span-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Inbox;
