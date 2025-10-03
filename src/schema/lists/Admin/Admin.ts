// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { text, password, timestamp, select } from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";
import { Session } from "../lists.types";
import { AdminRole } from "./Admin.types";

export const Admin = list<Lists.Admin.TypeInfo<Session>>({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
    }),
    password: password({ validation: { isRequired: true } }),
    role: select({
      defaultValue: AdminRole.SuperAdmin,
      type: "enum",
      options: [
        {
          label: "Super Admin",
          value: AdminRole.SuperAdmin,
        },
      ],
      ui: {
        itemView: {
          fieldMode: "read",
        },
      },
    }),
    createdAt: timestamp({
      defaultValue: { kind: "now" },
    }),
  },
});
