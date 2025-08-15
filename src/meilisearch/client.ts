import { MeiliSearch } from "meilisearch";

let client: MeiliSearch;

export const meilisearch = () => {
  if (!client) {
    client = new MeiliSearch({
      apiKey: process.env.MEILISEARCH_API_KEY,
      host: process.env.MEILISEARCH_HOST,
    });
    return client;
  }
  return client;
};
