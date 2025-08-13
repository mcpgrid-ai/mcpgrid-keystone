// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { text, timestamp } from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";
import { Session } from "../lists.types";

export const Page = list<Lists.Server.TypeInfo<Session>>({
  access: allowAll,
  ui: {
    listView: {
      initialColumns: ["title", "slug"],
    },
  },
  fields: {
    title: text({
      validation: {
        isRequired: true,
      },
    }),
    slug: text({
      isIndexed: "unique",
      validation: {
        isRequired: true,
      },
      ui: {
        itemView: {
          fieldMode: "read",
        },
      },
    }),
    subtitle: text(),
    description: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    createdAt: timestamp({
      ui: {
        createView: {
          fieldMode: "hidden",
        },
        itemView: {
          fieldMode: "read",
        },
      },
      defaultValue: {
        kind: "now",
      },
    }),
    updatedAt: timestamp({
      ui: {
        createView: {
          fieldMode: "hidden",
        },
        itemView: {
          fieldMode: "read",
        },
      },
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
