export default {
    name: "magic",
    title: "Magic",
    type: "document",
    fields: [{
            name: "name",
            title: "Magic Concept Name",
            description: "What is the name of this concept?",
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
            name: "about",
            title: "About",
            description: "Write about this concept",
            type: "array",
            of: [{
                type: "object",
                fields: [{
                        name: "categoryName",
                        title: "Category Name",
                        description: "Name for the information about the concept",
                        type: "string",
                    },
                    {
                        name: "categoryInfo",
                        title: "Category Information",
                        description: "Information about the concept",
                        type: "array",
                        of: [{ type: "block" }],
                    },
                ],
            }, ],
        },
    ],
};