import type { RouteObject } from "react-router";
import { InboxStarRoute } from "./inbox-start.route";
import { InboxSentRoute } from "./inbox-sent.route";
import { InboxDraftRoute } from "./inbox-draft.route";
import { InboxSpanRoute } from "./inbox-span.route";
import { InboxImportTantRoute } from "./inbox-important.route";
import { InboxBinRoute } from "./inbox-bin.route";

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
      ...InboxStarRoute,
      ...InboxSentRoute,
      ...InboxDraftRoute,
      ...InboxSpanRoute,
      ...InboxImportTantRoute,
      ...InboxBinRoute,
    ],
  },
];
