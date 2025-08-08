import type { Context } from ".keystone/types";
import { SERVER_CATEGORIES } from "./serverCategories.const";

export const seed = async (context: Context) => {
  const categories = await context.db.ServerCategory.findMany({});

  if (categories.length === 0) {
    await context.db.ServerCategory.createMany({
      data: SERVER_CATEGORIES,
    });
  }
};
