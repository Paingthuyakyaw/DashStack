import { Chart } from "./components/chart";
import RangeCard from "./components/range-crad";

const Dashboard = () => {
  return (
    <div>
      <h2 className=" font-semibold text-2xl">Dashboard</h2>
      <div className=" pt-4 grid gap-5 grid-cols-1 md:grid-cols-4">
        <RangeCard />
      </div>
      <div className=" mt-5">
        <Chart />
      </div>
    </div>
  );
};

export default Dashboard;
