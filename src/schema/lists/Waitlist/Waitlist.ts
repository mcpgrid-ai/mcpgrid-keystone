// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { text } from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";
import { Session } from "../lists.types";

export const Waitlist = list<Lists.Config.TypeInfo<Session>>({
  access: allowAll,
  fields: {
    email: text({
      isIndexed: "unique",
      validation: {
        isRequired: true,
      },
    }),
  },
});
