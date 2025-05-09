import { Chart } from "./components/chart";
import { CustomerChart } from "./components/customer-chart";
import { Estimate } from "./components/estimate-chart";
import RangeCard from "./components/range-crad";
import { SafeChart } from "./components/sale-chart";

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
      <div className=" gap-5 mt-5 grid grid-cols-3">
        <CustomerChart />
        <SafeChart />
        <Estimate />
      </div>
    </div>
  );
};

export default Dashboard;
