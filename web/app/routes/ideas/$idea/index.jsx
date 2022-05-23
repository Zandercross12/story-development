// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
// components
import { TextComponent } from "~/components/TextComponent/TextComponent";
// styles
import styles from "~/styles/idea.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export const loader = async (context) => {
  const slug = context.params.idea;
  const idea = await client.fetch(
    groq`*[_type == "ideas" && slug.current == $slug]`,
    { slug }
  );

  return {
    idea,
  };
};

export const Idea = () => {
  const data = useLoaderData();
  const idea = data.idea[0];

  console.log(idea);

  const approved = idea?.approved ? "approved" : "unapproved";

  return (
    <section id="idea">
      <div className="container">
        <h1>
          {idea?.name} -{" "}
          <div className={approved}>
            {idea?.approved ? "Approved" : "Unapproved"}
          </div>
        </h1>
        <p>
          <TextComponent data={idea} />
        </p>
      </div>
    </section>
  );
};

export default Idea;
