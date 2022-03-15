export default {
    name: "timeline",
    title: "Timeline",
    type: "document",
    fields: [{
            name: "name",
            title: "Timeline Name",
            description: "What is the name for this timeline?",
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
            name: "events",
            title: "Events",
            description: "Events that happened on the timeline",
            type: "array",
            of: [{ type: "reference", to: [{ type: "story" }] }],
        },
    ],
};