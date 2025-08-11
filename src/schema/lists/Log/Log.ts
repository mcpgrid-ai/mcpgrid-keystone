import { list } from "@keystone-6/core";
import { json, select, text, timestamp } from "@keystone-6/core/fields";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { allowAll } from "@keystone-6/core/access";
import { Session } from "../lists.types";

export const Log = list<Lists.Log.TypeInfo<Session>>({
  access: allowAll,
  ui: {
    hideCreate: () => true,
  },
  fields: {
    title: text({
      validation: {
        isRequired: true,
      },
    }),
    type: select({
      type: "enum",
      options: [
        {
          label: "HandleOnMcpFileCreatedUpdatedFailed",
          value: "HandleOnMcpFileCreatedUpdatedFailed",
        },
      ],
      ui: {
        itemView: {
          fieldMode: "read",
        },
      },
    }),
    error: json({
      defaultValue: {},
    }),
    createdAt: timestamp({
      ui: {
        itemView: {
          fieldMode: "read",
        },
        createView: {
          fieldMode: "hidden",
        },
      },
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
