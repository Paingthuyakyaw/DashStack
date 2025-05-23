import { grapData } from "@/common/fake-data/dashboard";

const RangeCard = () => {
  return (
    <>
      {grapData.map((item) => (
        <div className="">
          <div className=" rounded-xl p-3 dark:bg-secondary dark:border shadow bg-white  dark:border-stroke ">
            <div className=" flex items-center justify-between">
              <div className=" space-y-3">
                <p className=" text-sm text-gray-700 font-semibold dark:text-gray-300">
                  {item.title}
                </p>
                <p className=" text-xl font-bold text-foreground">
                  {item.number}
                </p>
              </div>
              <div className="">{item.icon}</div>
            </div>
            <div className=" flex text-sm gap-2 items-center mt-6">
              {item.statusIcon}

              <span
                className={`${item.status ? "text-teal-500" : "text-rose-500"}`}
              >
                {item.parcent}
              </span>
              <span>{item.para}</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RangeCard;
