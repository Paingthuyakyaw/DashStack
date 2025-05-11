import CardItem from "./components/card-item";
import CarouseCard from "./components/carousel-card";

const Products = () => {
  return (
    <div>
      <h2 className=" font-semibold text-2xl">Products</h2>
      <div className=" mt-5 ">
        <CarouseCard />
      </div>
      <div className=" mt-5">
        <CardItem />
      </div>
    </div>
  );
};

export default Products;
