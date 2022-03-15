export default {
    name: "ideas",
    title: "Ideas",
    type: "document",
    fields: [{
            name: "name",
            title: "Idea Name",
            description: "What is the name of this idea?",
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
            name: "idea",
            title: "Idea",
            description: "What is this idea about? Write about it.",
            type: "array",
            of: [{ type: "block" }],
        },
        {
            name: "approved",
            title: "Approve",
            description: "Is this idea approved? Will it make it to the final product?",
            type: "boolean",
            initialValue: false,
        },
    ],
};