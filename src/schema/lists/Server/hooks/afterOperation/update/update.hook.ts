// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { ListHooks } from "@keystone-6/core/types";
import { meilisearch } from "../../../../../../meilisearch";
import { logger } from "../../../../../../logger";

export const update: ListHooks<Lists.Server.TypeInfo> = {
  afterOperation: {
    update: async ({ item, context }) => {
      try {
        const category = await context.db.ServerCategory.findOne({
          where: { id: item.categoryId },
        });

        const { status: addDocumentsStatus } = await meilisearch
          .index("server")
          .updateDocuments([{ ...item, category }], {
            primaryKey: "id",
          });

        logger.info(
          `Meiliearch index server update ${item.title} status ${addDocumentsStatus}`
        );
      } catch (error) {
        logger.error(error);
      }
    },
  },
};
