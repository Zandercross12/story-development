export default {
  name: "characters",
  title: "Characters",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      description: "Character name. Choose wisely.",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      description: "Copy of the name",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "description",
      title: "Description",
      description: "Write a brief description about the character",
      type: "text",
    },
    {
      name: "dateofbirth",
      title: "Date of Birth",
      description: "When was this character born?",
      type: "date",
    },
    {
      name: "dateofdeath",
      title: "Date of Death",
      description: "When did this character die?",
      type: "date",
    },
    {
      name: "parents",
      title: "Parents",
      description: "Who are the parents of this character?",
      type: "array",
      of: [{ type: "reference", to: [{ type: "characters" }] }],
    },
    {
      name: "backstory",
      title: "Backstory",
      description: "The backstory of this character",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "personality",
      title: "Personality",
      description:
        "What is the personality of this character? How do they act?",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "likes",
      title: "Likes",
      description: "What does this character like?",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "dislikes",
      title: "Dislikes",
      description: "What does this character dislike?",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "relations",
      title: "Relations",
      description: "Who does this character have relations to?",
      type: "array",
      of: [
        {
          name: "relationField",
          title: "Relation Field",
          type: "object",
          fields: [
            {
              name: "relationname",
              title: "Relation Name",
              type: "string",
            },
            {
              name: "related",
              title: "Related Character",
              description: "Name of related character",
              type: "reference",
              to: [{ type: "characters" }],
            },
            {
              name: "relationinfo",
              title: "Relation Information",
              description: "How is each character related?",
              type: "text",
            },
          ],
        },
      ],
    },

    {
      name: "growth",
      title: "Growth",
      description: "How has the character grown?",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "abilities",
      title: "Abilities",
      description: "What abilities/powers does this character have?",
      type: "array",
      of: [{ type: "reference", to: [{ type: "magicAbilities" }] }],
    },
    {
      name: "image",
      title: "Image",
      description: "Image of character",
      type: "image",
    },
  ],
};
