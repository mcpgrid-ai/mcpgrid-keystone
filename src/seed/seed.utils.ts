import type { Context } from ".keystone/types";
import { SERVER_CATEGORIES } from "./serverCategories.const";
import { FREQUENTLY_ASKED_QUESTIONS } from "./frequentlyAskedQuestions.const";
import { PAGES } from "./pages.const";
import { CONFIG } from "./config.const";

export const seed = async (context: Context) => {
  const categoriesRequest = context.db.ServerCategory.findMany({
    take: 100,
  });
  const faqsRequest = context.db.FrequentlyAskedQuestion.findMany({
    take: 100,
  });
  const pagesRequest = context.db.Page.findMany({
    take: 100,
  });
  const configRequest = context.db.Config.findOne({
    where: {
      id: "1",
    },
  });

  const [categories, faqs, pages, config] = await Promise.all([
    categoriesRequest,
    faqsRequest,
    pagesRequest,
    configRequest,
  ]);

  const pagesSlugs = pages.map(({ slug }) => slug);
  const pagesToCreate = PAGES.filter(({ slug }) => !pagesSlugs.includes(slug));

  if (categories.length === 0) {
    await context.db.ServerCategory.createMany({
      data: SERVER_CATEGORIES,
    });
  }

  if (faqs.length === 0) {
    await context.db.FrequentlyAskedQuestion.createMany({
      data: FREQUENTLY_ASKED_QUESTIONS,
    });
  }

  if (pagesToCreate.length !== 0) {
    await context.db.Page.createMany({
      data: pagesToCreate,
    });
  }

  if (!config) {
    await context.db.Config.createOne({
      data: CONFIG,
    });
  }
};
