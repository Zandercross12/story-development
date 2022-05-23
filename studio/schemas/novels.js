export default {
  name: "novels",
  title: "Novels",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name of Novel",
      description: "What is the name of this novel?",
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
      description: "What is this novel about? Write about it.",
      type: "text",
    },
    {
      name: "cover",
      title: "Cover Image",
      description: "Cover image for the novel.",
      type: "image",
    },
    {
      name: "teaser",
      title: "Teaser",
      description:
        "Teaser text for the novel. Try to get them interested in the story.",
      type: "text",
    },
    {
      name: "completed",
      title: "Completed",
      description: "Is this novel finished?",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "opinion",
      title: "Personal Opinion",
      description: "Write your opinion on the book.",
      type: "text",
    },
  ],
};
