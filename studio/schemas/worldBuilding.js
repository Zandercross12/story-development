export default {
    name: "worldBuilding",
    title: "World Building",
    type: "document",
    fields: [{
            name: "name",
            title: "Lore Category",
            description: "Name of lore",
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
            name: "lore",
            title: "Lore",
            description: "Write about the lore here",
            type: "array",
            of: [{
                type: "object",
                fields: [{
                        name: "title",
                        title: "Lore Name",
                        description: "Lore title here",
                        type: "string",
                    },
                    {
                        name: "loreItem",
                        title: "Lore",
                        description: "Write about lore below",
                        type: "array",
                        of: [{ type: "block" }],
                    },
                ],
            }, ],
        },
    ],
};