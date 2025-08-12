import type { Context } from ".keystone/types";
import { SERVER_CATEGORIES } from "./serverCategories.const";
import { FREQUENTLY_ASKED_QUESTIONS } from "./frequentlyAskedQuestions.const";

export const seed = async (context: Context) => {
  const categoriesRequest = context.db.ServerCategory.findMany({});
  const faqsRequest = context.db.FrequentlyAskedQuestion.findMany({});

  const [categories, faqs] = await Promise.all([
    categoriesRequest,
    faqsRequest,
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
};
