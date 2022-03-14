export default {
    name: "pages",
    title: "Pages",
    type: "document",
    fields: [{
            name: "name",
            title: "Name",
            description: "Keep page names short",
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
            name: "content",
            title: "Content",
            description: "Put page content text here",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};