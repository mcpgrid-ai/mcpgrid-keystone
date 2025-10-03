// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { group, list } from "@keystone-6/core";
import {
  checkbox,
  relationship,
  text,
  timestamp,
  json,
} from "@keystone-6/core/fields";
import { allowAll } from "@keystone-6/core/access";
import { cloudinaryImage } from "@keystone-6/cloudinary";
import { Session } from "../lists.types";
import { hooks } from "./hooks";

export const Server = list<Lists.Server.TypeInfo<Session>>({
  hooks,
  access: allowAll,
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
    isOfficial: checkbox(),
    description: text({
      ui: {
        displayMode: "textarea",
      },
      validation: {
        isRequired: true,
      },
    }),
    overview: text({
      ui: {
        displayMode: "textarea",
      },
      validation: {
        isRequired: true,
      },
    }),
    icon: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        folder: `${process.env.CLOUDINARY_FOLDER_ROOT}/servers`,
      },
    }),
    category: relationship({
      ref: "ServerCategory",
      ui: {
        hideCreate: true,
      },
    }),
    homepage: text({
      validation: {
        isRequired: true,
      },
    }),
    tools: json({
      defaultValue: {},
    }),
    settings: json({
      defaultValue: {},
    }),
    ...group({
      label: "GitHub Information",
      fields: {
        githubUrl: text({
          label: "URL",
          isIndexed: "unique",
          validation: {
            isRequired: true,
          },
        }),
        githubOwner: text({
          label: "Owner",
          validation: {
            isRequired: true,
          },
        }),
        githubLicense: text({
          label: "License",
        }),
        githubLanguage: text({
          label: "Language",
        }),
        githubPublishedAt: timestamp({
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
    }),
    ...group({
      label: "SEO Information",
      fields: {
        keywords: text({
          label: "Keywords",
          defaultValue: "",
          ui: {
            displayMode: "textarea",
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
