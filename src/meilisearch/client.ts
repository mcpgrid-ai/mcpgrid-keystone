import { MeiliSearch } from "meilisearch";

export const meilisearch = new MeiliSearch({
  apiKey: process.env.MEILISEARCH_API_KEY,
  host: process.env.MEILISEARCH_HOST,
});
