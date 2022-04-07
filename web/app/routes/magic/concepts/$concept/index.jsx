// react | remix
import { useLoaderData } from "remix";
// sanity client
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
  const slug = context.params.concept;
  const magicConcept = await client.fetch(
    groq`*[_type == "magic" && slug.current == $slug]`,
    { slug }
  );

  return {
    magicConcept,
  };
};

export const Concept = () => {
  const data = useLoaderData();

  const concept = data.magicConcept[0];

  return (
    <>
      {/* Insert Image Here */}
      <section>
        <div className="container">
          <h1>Magic Concept Title: {concept?.name}</h1>
          <p>{concept?.description}</p>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>Concept Information</h1>
          {concept?.about.map((item, index) => {
            return (
              <div key={index}>
                <DropdownContent item={item} />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Concept;
