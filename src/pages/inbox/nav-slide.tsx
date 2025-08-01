import { InboxData, slideMail } from "@/common/fake-data/inbox/inbox";
import { Button } from "@/components/ui/button";
import { useStoer } from "@/store/client";
import { useLocation, useNavigate } from "react-router";

const NavSlider = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { star } = useStoer();

  const count = new Map([
    ["Inbox", InboxData.length],
    ["Starred", star.length],
  ]);

  return (
    <div className=" dark:bg-neutral-800 bg-gray-100 border p-4 w-full h-[90vh] rounded-md ">
      <Button
        size={"lg"}
        className=" cursor-pointer active:scale-95 text-white w-full "
      >
        Compose
      </Button>
      <div className=" mt-3 space-y-3 ">
        {slideMail.map((item) => (
          <div key={item.id}>
            <h5 className=" text-sm font-semibold">{item.title}</h5>
            <div className=" mt-1 space-y-1 text-sm">
              {item.children.map((da) => (
                <div
                  key={da.id}
                  onClick={() => navigate(da.link)}
                  className={` p-2 rounded-md  cursor-pointer flex items-center justify-between ${
                    pathname == da.link && " bg-blue-500/20 text-blue-600"
                  }`}
                >
                  <div className=" flex items-center gap-2">
                    <p>{da.icon(" w-5 h-4 ")}</p>
                    <p>{da.title}</p>
                  </div>
                  <p>{count.get(da.title) || da.count}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavSlider;
