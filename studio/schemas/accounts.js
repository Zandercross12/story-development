export default {
  name: "accounts",
  title: "Accounts",
  type: "document",
  fields: [
    {
      name: "first_name",
      title: "First Name",
      description: "What is your first name?",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "last_name",
      title: "Last Name",
      description: "What is your last name?",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      description: "Copy of first + last name.",
      type: "slug",
      options: {
        source: (accounts) => `${accounts.first_name}${accounts.last_name}`,
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "password",
      title: "Password",
      description: "Password to sign in.",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "email",
      title: "Email",
      description: "Email for contacting",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "about",
      title: "About",
      description: "Tell us a little about yourself!",
      type: "text",
    },
  ],
};
