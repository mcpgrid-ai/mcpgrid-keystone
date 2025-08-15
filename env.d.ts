declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLOUDINARY_API_KEY: string;
      CLOUDINARY_API_SECRET: string;
      CLOUDINARY_CLOUD_NAME: string;
      CLOUDINARY_FOLDER_ROOT: string;
      DATABASE_URL: string;
      NODE_ENV: "development" | "production";
      SESSION_SECRET: string;
      MEILISEARCH_HOST: string;
      MEILISEARCH_API_KEY: string;
    }
  }
}

export {};
