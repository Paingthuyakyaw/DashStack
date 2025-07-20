import { useStoer } from "@/store/client";
import { HeartIcon, StarIcon } from "lucide-react";

const Favourite = () => {
  const { card, setCard } = useStoer();
  return (
    <div>
      <h2 className=" font-semibold text-2xl">Favourites</h2>

      <div className=" mt-2 grid gap-2 md:gap-5 grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {card.map((wat) => (
          <div
            className=" dark:bg-white  overflow-hidden dark:border-stroke border-2   rounded-xl w-full"
            key={wat.id}
          >
            <img
              src={wat.img}
              className=" w-full h-[180px] md:h-[250px] object-contain"
              alt={wat.name}
            />

            <div className="  p-4 bg-white dark:bg-secondary ">
              <div className=" flex items-center justify-between ">
                <h5 className=" font-semibold text-foreground">{wat.name}</h5>
                <p onClick={() => setCard(wat)} className=" cursor-pointer">
                  <HeartIcon
                    className={` w-5 h-5 stroke-3 ${
                      card.some((da) => da.id === wat.id) && "stroke-red-600"
                    } `}
                  />
                </p>
              </div>
              <p className=" text-sm text-primary ">{wat.price}</p>
              <p className=" flex gap-2 items-center mt-2">
                {[...new Array(wat.rating)].map((_, idx) => (
                  <StarIcon
                    key={idx}
                    className=" text-yellow-500  "
                    size={14}
                  />
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favourite;
