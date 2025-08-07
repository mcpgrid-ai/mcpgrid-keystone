import { config } from "@keystone-6/core";
import { lists } from "./src/schema";
import { withAuth, session } from "./src/auth";

export default withAuth(
  config({
    db: {
      provider: "postgresql",
      url: process.env.DATABASE_URL,
    },
    server: {
      extendExpressApp: (app) => {
        app.get("/api/health-check", (_, res) => {
          res.status(200).send("Ok");
        });
      },
    },
    lists,
    session,
  })
);
