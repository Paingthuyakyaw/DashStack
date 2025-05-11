import { smartWatchItem } from "@/common/fake-data/products";
import { StarIcon } from "lucide-react";

const CardItem = () => {
  return (
    <div className=" grid gap-5 grid-cols-3">
      {smartWatchItem.map((wat) => (
        <div
          className=" dark:bg-white  overflow-hidden dark:border-stroke border-2   rounded-xl w-full"
          key={wat.id}
        >
          <img
            src={wat.img}
            className=" w-full h-[250px] object-contain"
            alt={wat.name}
          />

          <div className="  p-4 bg-white dark:bg-secondary ">
            <h5 className=" font-semibold text-foreground">{wat.name}</h5>
            <p className=" text-sm text-primary ">{wat.price}</p>
            <p className=" flex gap-2 items-center mt-2">
              {[...new Array(wat.rating)].map((_, idx) => (
                <StarIcon key={idx} className=" text-yellow-500  " size={14} />
              ))}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardItem;
