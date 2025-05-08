import IconBox from "../Icon/IconBox";
import IconPending from "../Icon/IconPending";
import IconSafe from "../Icon/IconSafe";
import IconStockBottom from "../Icon/IconStockBottom";
import IconStockTop from "../Icon/IconStockTop";
import IconUser from "../Icon/IconUser";

export const grapData = [
  {
    id: 1,
    title: "Total User",
    number: "40,689",
    statusIcon: <IconStockTop />,
    status: true,
    parcent: "8.5%",
    para: "Up from yesterday",
    icon: <IconUser />,
  },
  {
    id: 2,
    title: "Total Order",
    number: "10,293",
    statusIcon: <IconStockTop />,
    status: true,
    para: "Up from past week",
    parcent: "1.3%",
    icon: <IconBox />,
  },
  {
    id: 3,
    title: "Total Sales",
    number: "$89,000",
    statusIcon: <IconStockBottom />,
    status: false,
    para: "Down from yesterday",
    parcent: "4.3%",
    icon: <IconSafe />,
  },
  {
    id: 4,
    title: "Total Pending",
    number: "2040",
    statusIcon: <IconStockTop />,
    status: true,
    para: "Up from yesterday",
    parcent: "1.8%",
    icon: <IconPending />,
  },
];
