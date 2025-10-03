// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { ListHooks } from "@keystone-6/core/types";
import { merge } from "lodash";

export const update: ListHooks<Lists.Server.TypeInfo> = {
  resolveInput: {
    update: async ({ resolvedData }) => {
      console.log("resolvedData", resolvedData);
      return merge({}, resolvedData, {
        updatedAt: new Date(),
      });
    },
  },
};
