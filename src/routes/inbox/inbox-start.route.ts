import type { RouteObject } from "react-router";

export const InboxStarRoute: RouteObject[] = [
  {
    path: "star",
    lazy: async () => ({
      Component: (await import("@/pages/inbox/star")).default,
    }),
  },
];
