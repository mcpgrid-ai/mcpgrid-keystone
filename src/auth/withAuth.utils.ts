import { createAuth } from "@keystone-6/auth";

const { withAuth } = createAuth({
  listKey: "Admin",
  identityField: "email",
  sessionData: "name email role",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"],
  },
});

export { withAuth };
