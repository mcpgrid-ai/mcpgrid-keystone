// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { ListHooks } from "@keystone-6/core/types";
import { meilisearch } from "../../../../../../meilisearch";
import { logger } from "../../../../../../logger";

export const remove: ListHooks<Lists.Server.TypeInfo> = {
  afterOperation: {
    delete: async ({ originalItem }) => {
      try {
        const { status } = await meilisearch
          .index("server")
          .deleteDocument(originalItem.id);

        logger.info(
          `Meiliearch index server delete ${originalItem.title} status ${status}`
        );
      } catch (error) {
        logger.error(error);
      }
    },
  },
};
