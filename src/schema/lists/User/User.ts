// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { text, timestamp } from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";
import { Session } from "../lists.types";

export const User = list<Lists.User.TypeInfo<Session>>({
  access: allowAll,
  ui: {
    labelField: "email",
    hideCreate: true,
    hideDelete: true,
  },
  fields: {
    identityId: text({
      isIndexed: "unique",
      validation: {
        isRequired: true,
      },
    }),
    name: text({
      validation: {
        isRequired: true,
      },
    }),
    email: text({
      validation: {
        isRequired: true,
      },
      isIndexed: "unique",
    }),
    updatedAt: timestamp({
      defaultValue: { kind: "now" },
    }),
    createdAt: timestamp({
      defaultValue: { kind: "now" },
    }),
  },
});
