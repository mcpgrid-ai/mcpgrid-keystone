// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { text, timestamp } from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";
import { Session } from "../lists.types";

export const Waitlist = list<Lists.Config.TypeInfo<Session>>({
  access: allowAll,
  ui: {
    labelField: "email",
  },
  fields: {
    email: text({
      isIndexed: "unique",
      validation: {
        isRequired: true,
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
  },
});
