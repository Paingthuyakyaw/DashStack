import type { RouteObject } from "react-router";

export const InboxBinRoute: RouteObject[] = [
  {
    path: "bin",
    lazy: async () => ({
      Component: (await import("@/pages/inbox/bin")).default,
    }),
  },
];
