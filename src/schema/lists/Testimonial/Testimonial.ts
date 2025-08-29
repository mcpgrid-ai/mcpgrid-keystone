import { list } from "@keystone-6/core";
import { text, timestamp } from "@keystone-6/core/fields";
// eslint-disable-next-line import/no-extraneous-dependencies
import { Lists } from ".keystone/types";
import { allowAll } from "@keystone-6/core/access";
import { cloudinaryImage } from "@keystone-6/cloudinary";
import { Session } from "../lists.types";

export const Testimonial = list<Lists.Testimonial.TypeInfo<Session>>({
  access: allowAll,
  fields: {
    fullName: text({
      validation: {
        isRequired: true,
      },
    }),
    title: text({
      validation: {
        isRequired: true,
      },
    }),
    avatar: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        apiKey: process.env.CLOUDINARY_API_KEY,
        apiSecret: process.env.CLOUDINARY_API_SECRET,
        folder: `${process.env.CLOUDINARY_FOLDER_ROOT}/testimonial`,
      },
    }),
    feedback: text({
      ui: {
        displayMode: "textarea",
      },
      validation: {
        isRequired: true,
      },
    }),
    createdAt: timestamp({
      ui: {
        itemView: {
          fieldMode: "read",
        },
        createView: {
          fieldMode: "hidden",
        },
      },
      defaultValue: {
        kind: "now",
      },
    }),
  },
});
