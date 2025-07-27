import type { RouteObject } from "react-router";

export const InboxImportTantRoute: RouteObject[] = [
  {
    path: "important",
    lazy: async () => ({
      Component: (await import("@/pages/inbox/important")).default,
    }),
  },
];
