import type { Context } from ".keystone/types";
import { SERVER_CATEGORIES } from "./serverCategories.const";
import { FREQUENTLY_ASKED_QUESTIONS } from "./frequentlyAskedQuestions.const";
import { PAGES } from "./pages.const";

export const seed = async (context: Context) => {
  const categoriesRequest = context.db.ServerCategory.findMany({});
  const faqsRequest = context.db.FrequentlyAskedQuestion.findMany({});
  const pagesRequest = context.db.Page.findMany({});

  const [categories, faqs, pages] = await Promise.all([
    categoriesRequest,
    faqsRequest,
    pagesRequest,
  ]);

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

  if (pages.length === 0) {
    await context.db.Page.createMany({
      data: PAGES,
    });
  }
};
