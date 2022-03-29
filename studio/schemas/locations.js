export default {
  name: "locations",
  title: "Locations",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      description: "Name of Location",
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
      name: "events",
      title: "Events",
      description: "List the events that occurred at this location.",
      type: "array",
      of: [{ type: "reference", to: [{ type: "story" }] }],
    },
    {
      name: "description",
      title: "Description",
      description: "Description for the location",
      type: "text",
    },
  ],
};
