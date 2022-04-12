// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";

// components
import DropdownContent from "~/components/DropdownContent/DropdownContent";
// styles
import styles from "~/components/DropdownContent/DropdownContent.css";
import styles2 from "~/styles/concept.css";

const builder = imageUrlBuilder(client);

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: styles2,
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
          <div className="concept_image_container">
            {concept?.image ? (
              <img
                src={builder.image(concept.image).url()}
                alt="conceptImage"
              />
            ) : (
              <img src="/file-solid.svg" alt="conceptImage" />
            )}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>Magic Concept Title: {concept?.name}</h1>
          <p>{concept?.description}</p>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>Concept Information</h1>
          {concept?.about
            ? concept?.about?.map((item, index) => {
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

export default Concept;
