import type { RouteObject } from "react-router";

export const inboRouter: RouteObject[] = [
  {
    path: "/inbox",
    lazy: async () => ({
      Component: (await import("@/pages/inbox")).default,
    }),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("@/pages/inbox/mail")).default,
        }),
      },
    ],
  },
];
