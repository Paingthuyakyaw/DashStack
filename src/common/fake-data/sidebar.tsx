import {
  BoxIcon,
  CalendarDaysIcon,
  CircleDollarSignIcon,
  ClipboardPlusIcon,
  ContactRoundIcon,
  HeartIcon,
  LayersIcon,
  LayoutDashboardIcon,
  MessageCircleMoreIcon,
  SquareActivityIcon,
  StickyNote,
  TableIcon,
} from "lucide-react";

export const sideBarData = [
  {
    id: 1,
    title: "Dashboard",
    link: "/",
    icon: <LayoutDashboardIcon />,
  },
  {
    id: 2,
    title: "Products",
    link: "/products",
    icon: <BoxIcon />,
  },
  {
    id: 3,
    title: "Favourites",
    link: "/favourites",
    icon: <HeartIcon />,
  },
  {
    id: 4,
    title: "Inbox",
    link: "/inbox",
    icon: <MessageCircleMoreIcon />,
  },
  {
    id: 5,
    title: "Order Lists",
    link: "/order",
    icon: <LayersIcon />,
  },
  {
    id: 6,
    title: "Product Stock",
    link: "/stock",
    icon: <SquareActivityIcon />,
  },
  {
    id: 7,
    title: "Pricing",
    link: "/pricing",
    icon: <CircleDollarSignIcon />,
  },
  {
    id: 8,
    title: "Calendar",
    link: "/calendar",
    icon: <CalendarDaysIcon />,
  },
  {
    id: 9,
    title: "To-Do",
    link: "/to-do",
    icon: <ClipboardPlusIcon />,
  },
  {
    id: 10,
    title: "Contact",
    link: "/contact",
    icon: <ContactRoundIcon />,
  },
  {
    id: 11,
    title: "Invoice",
    link: "/invoice",
    icon: <StickyNote />,
  },
  {
    id: 12,
    title: "Table",
    link: "/table",
    icon: <TableIcon />,
  },
];
