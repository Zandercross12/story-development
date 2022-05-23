export default {
  name: "volumes",
  title: "Volumes",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Volume Title",
      description: "What is the title of this volume?",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      description: "Copy of name",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      description: "What is this volume about? Write about it.",
      type: "text",
    },
    {
      name: "image",
      title: "Volume Image",
      description: "Image for the volume.",
      type: "image",
    },
    {
      name: "opinion",
      title: "Personal Opinion",
      description: "Write your opinion on the volume.",
      type: "text",
    },
    {
      name: "published",
      title: "Published",
      description: "Publish this volume draft?",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "novel",
      title: "Novel",
      description: "Which novel is this volume part of?",
      type: "reference",
      to: [{ type: "novels" }],
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "partname",
              title: "Part Name",
              description: "What is the name of this part?",
              type: "string",
            },
            {
              name: "part",
              title: "Part",
              type: "array",
              of: [{ type: "block" }],
            },
          ],
        },
      ],
    },
  ],
};
