// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { ListHooks } from "@keystone-6/core/types";
import { meilisearch } from "../../../../../../meilisearch";
import { logger } from "../../../../../../logger";

export const create: ListHooks<Lists.Server.TypeInfo> = {
  afterOperation: {
    create: async ({ item, context }) => {
      try {
        const category = await context.db.ServerCategory.findOne({
          where: { id: item.categoryId },
        });

        const { status: addDocumentsStatus } = await meilisearch()
          .index("server")
          .addDocuments([{ ...item, category }], {
            primaryKey: "id",
          });

        logger.info(
          `Meiliearch index server create ${item.title} status ${addDocumentsStatus}`
        );
      } catch (error) {
        logger.error(error);
      }
    },
  },
};
