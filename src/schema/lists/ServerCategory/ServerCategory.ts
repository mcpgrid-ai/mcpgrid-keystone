// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { list } from "@keystone-6/core";
import { checkbox, text, timestamp } from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";
import { cloudinaryImage } from "@keystone-6/cloudinary";
import { Session } from "../lists.types";

export const ServerCategory = list<Lists.ServerCategory.TypeInfo<Session>>({
  access: allowAll,
  ui: {
    listView: {
      initialColumns: ["title", "slug"],
    },
  },
  fields: {
    title: text({
      isIndexed: "unique",
      validation: {
        isRequired: true,
      },
    }),
    slug: text({
      isIndexed: "unique",
      validation: {
        isRequired: true,
      },
      ui: {
        itemView: {
          fieldMode: "read",
        },
      },
    }),
    icon: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        folder: `${process.env.CLOUDINARY_FOLDER_ROOT}/server-categories`,
      },
    }),
    isDefault: checkbox(),
    createdAt: timestamp({
      ui: {
        createView: {
          fieldMode: "hidden",
        },
        itemView: {
          fieldMode: "read",
        },
      },
      defaultValue: {
        kind: "now",
      },
    }),
    updatedAt: timestamp({
      ui: {
        createView: {
          fieldMode: "hidden",
        },
        itemView: {
          fieldMode: "read",
        },
      },
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
