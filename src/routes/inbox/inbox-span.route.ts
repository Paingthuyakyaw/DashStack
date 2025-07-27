import type { RouteObject } from "react-router";

export const InboxSpanRoute: RouteObject[] = [
  {
    path: "span",
    lazy: async () => ({
      Component: (await import("@/pages/inbox/span")).default,
    }),
  },
];
