export default {
    name: "magicAbilities",
    title: "Magic Abilities",
    type: "document",
    fields: [{
            name: "name",
            title: "Magic Name",
            description: "What is the name of this power?",
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
            description: "What type of magic is it?",
            type: "text",
        },
        {
            name: "action",
            title: "Action",
            description: "What does this magic do?",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};