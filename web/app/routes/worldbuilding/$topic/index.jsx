// react | remix
import { useLoaderData } from "remix";
// sanity-client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
// components
import DropdownContent from "~/components/DropdownContent/DropdownContent";
// styles
import styles from "~/components/DropdownContent/DropdownContent.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export const loader = async (context) => {
  const slug = context.params.topic;
  const worldBuilding = await client.fetch(
    groq`*[_type == "worldBuilding" && slug.current == $slug]`,
    { slug }
  );

  if (!worldBuilding || !worldBuilding.length > 0) {
    return {
      worldBuilding: null,
    };
  }

  return { worldBuilding };
};

export const meta = ({ data }) => {
  let worldBuilding;

  if (worldBuilding) {
    worldBuilding = data.worldBuilding;
    return {
      title: `World Building - ${worldBuilding[0]?.name || "ERROR"}`,
    };
  }
  return {
    title: "World Building not found",
  };
};

export const Topic = () => {
  const data = useLoaderData();

  if (!data.worldBuilding) {
    throw new Error("World Building not found");
  }

  const topic = data.worldBuilding[0];

  return (
    <>
      <section id="topic">
        <div className="container">
          <h1>World Building Topic: {topic?.name}</h1>
          {topic?.lore
            ? topic?.lore.map((item, index) => {
                return (
                  <div key={index}>
                    <DropdownContent item={item} />
                  </div>
                );
              })
            : "None"}
        </div>
      </section>
    </>
  );
};

export default Topic;
