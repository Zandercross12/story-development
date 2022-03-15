export default {
    name: "story",
    title: "Story Events",
    type: "document",
    fields: [{
            name: "name",
            title: "Event Name",
            description: "What is this event called?",
            type: "string",
        },
        {
            name: "slug",
            title: "Slug",
            description: "Copy of the event name",
            type: "slug",
            options: {
                source: "name",
                maxLength: 96,
            },
        },
        {
            name: "description",
            title: "Event Description",
            description: "Brief description of the event",
            type: "text",
        },
        {
            name: "date",
            title: "Date",
            description: "When did this happen?",
            type: "date",
        },
        {
            name: "participants",
            title: "Participants",
            description: "Who was in this event?",
            type: "array",
            of: [{ type: "reference", to: [{ type: "characters" }] }],
        },
        {
            name: "result",
            title: "Result",
            description: "How did this event end?",
            type: "array",
            of: [{ type: "block" }],
        },
    ],
};