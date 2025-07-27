import type { RouteObject } from "react-router";

export const InboxSentRoute: RouteObject[] = [
  {
    path: "sent",
    lazy: async () => ({
      Component: (await import("@/pages/inbox/sent")).default,
    }),
  },
];
