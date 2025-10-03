// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { group, list } from "@keystone-6/core";
import { text, timestamp } from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";
import { cloudinaryImage } from "@keystone-6/cloudinary";
import { Session } from "../lists.types";

export const Page = list<Lists.Server.TypeInfo<Session>>({
  access: allowAll,
  ui: {
    listView: {
      initialColumns: ["title", "slug"],
    },
  },
  fields: {
    title: text({
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
    subtitle: text(),
    description: text({
      ui: {
        displayMode: "textarea",
      },
    }),
    ...group({
      label: "SEO Information",
      fields: {
        seoTitle: text({
          label: "Title",
          defaultValue: "",
        }),
        seoDescription: text({
          label: "Description",
          defaultValue: "",
          ui: {
            displayMode: "textarea",
          },
        }),
        seoKeywords: text({
          label: "Keywords",
          defaultValue: "",
          ui: {
            displayMode: "textarea",
          },
        }),
        seoIcon: cloudinaryImage({
          label: "Icon",
          cloudinary: {
            cloudName: process.env.CLOUDINARY_CLOUD_NAME,
            apiKey: process.env.CLOUDINARY_API_KEY,
            apiSecret: process.env.CLOUDINARY_API_SECRET,
            folder: `${process.env.CLOUDINARY_FOLDER_ROOT}/seo`,
          },
        }),
      },
    }),
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
