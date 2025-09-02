import { config } from "@keystone-6/core";
import { get } from "lodash";
import { lists } from "./src/schema";
import { withAuth, session } from "./src/auth";
import { seed } from "./src/seed";

export default withAuth(
  config({
    db: {
      provider: "postgresql",
      url: process.env.DATABASE_URL,
      onConnect: async (context) => {
        await seed(context);
      },
    },
    server: {
      cors: {
        origin: get(process.env, "CORS_ORIGINS", "")
          .split(",")
          .map((v) => v.trim())
          .filter((v) => !!v),
      },
      extendExpressApp: (app) => {
        app.get("/health", (_, res) => {
          res.status(200).send("Ok");
        });
      },
    },
    lists,
    session,
  })
);
