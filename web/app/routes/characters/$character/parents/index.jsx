// remix
import { Link, useLoaderData } from "remix";
// third party
import client from "~/lib/sanity/client";
import groq from "groq";
// components
import CharacterSidebar from "~/components/CharacterSidebar/CharacterSidebar";
// styles
import styles from "../../../../components/Characteristics/Characteristics.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export const loader = async (context) => {
  const slug = context.params.character;

  const character = await client.fetch(
    groq`*[_type == "characters" && slug.current == $slug]`,
    { slug }
  );

  const parentsRef = await client.fetch(groq`*[_type == "characters"]`);

  return {
    character,
    parentsRef,
  };
};

export const Parents = () => {
  const data = useLoaderData();

  if (!data.character.length > 0) {
    throw new Error("Character Not Found");
  }

  const character = data.character[0];
  const parentsReference = data.parentsRef;

  if (!character.parents || !character.parents.length > 0) {
    throw new Error("No Parents Found");
  }

  let i = 0;

  return (
    <>
      <CharacterSidebar character={character} />
      <section>
        <div className="container_sidebar">
          <h1>Parents</h1>
          <ul>
            {character?.parents?.map((parent) => {
              i++;

              const parentReferenceId = parent?._ref;

              let parentRef;

              if (parentReferenceId) {
                parentRef = parentsReference.find(
                  (parents) => parents._id === parentReferenceId
                );
              }

              return (
                <li key={i}>
                  <div className="separator"></div>
                  <br />
                  <h2>{parentRef?.name}</h2>
                  <br />
                  <p>{parentRef?.description}</p>
                  <br />
                  <Link
                    to={"/characters/" + parentRef?.slug.current}
                    title="Read More"
                    className="link_underline"
                  >
                    Read More
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Parents;
