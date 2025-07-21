import { slideMail } from "@/common/fake-data/mail";
import { Button } from "@/components/ui/button";

const NavSlider = () => {
  return (
    <div className=" dark:bg-neutral-800 border p-4 w-full h-[90vh] rounded-md ">
      <Button
        size={"lg"}
        className=" cursor-pointer active:scale-95 text-white w-full "
      >
        Compose
      </Button>
      <div className=" mt-3 space-y-3 ">
        {slideMail.map((item) => (
          <div key={item.id}>
            <h5>{item.title}</h5>
            <div className=" mt-1 space-y-1 text-sm">
              {item.children.map((da) => (
                <div
                  key={da.id}
                  className="  p-2 rounded-md  flex items-center justify-between"
                >
                  <div className=" flex items-center gap-2">
                    <p>{da.icon(" w-5 h-4 ")}</p>
                    <p>{da.title}</p>
                  </div>
                  <p>{da.count}</p>
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
