import type { RouteObject } from "react-router";

export const InboxDraftRoute: RouteObject[] = [
  {
    path: "draft",
    lazy: async () => ({
      Component: (await import("@/pages/inbox/draft")).default,
    }),
  },
];
