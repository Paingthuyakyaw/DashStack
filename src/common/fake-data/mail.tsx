import { IconMailFilled, IconStar } from "@tabler/icons-react";

export const slideMail = [
  {
    id: 1,
    title: "My Email",
    children: [
      {
        id: 11,
        title: "Inbox",
        count: 1253,
        icon: (className?: string) => <IconMailFilled className={className} />,
      },
      {
        id: 12,
        title: "Starred",
        count: 5,
        icon: (className?: string) => <IconStar className={className} />,
      },
    ],
  },
  {
    id: 3,
    title: "Label",
    children: [],
  },
];
