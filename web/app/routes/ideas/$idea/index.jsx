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

  if (!idea || !idea.length > 0) {
    return { idea: null };
  }

  return {
    idea,
  };
};

export const meta = () => {
  let idea;

  if (idea) {
    idea = data.idea;
    return {
      title: `Idea - ${idea[0]?.name || "ERROR"}`,
    };
  }

  return {
    title: "Idea not found",
  };
};
export const Idea = () => {
  const data = useLoaderData();

  if (!data.idea) {
    throw new Error("Idea not found");
  }

  const idea = data.idea[0];

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
        <TextComponent data={idea} />
      </div>
    </section>
  );
};

export default Idea;
