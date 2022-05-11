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

  const relationsRef = await client.fetch(groq`*[_type == "characters"]`);

  return {
    character,
    relationsRef,
  };
};

export const relations = () => {
  const data = useLoaderData();

  const character = data.character[0];
  const relationsReference = data.relationsRef;

  let i = 0;
  return (
    <>
      <CharacterSidebar character={character} />
      <section>
        <div className="container_sidebar">
          <h1>Relations</h1>
          <ul>
            {character?.relations.map((relation) => {
              i++;

              const relationReferenceId = relation?.related._ref;

              let relationRef;

              if (relationReferenceId) {
                relationRef = relationsReference.find(
                  (relations) => relations._id === relationReferenceId
                );
              }

              return (
                <li key={i}>
                  <div className="separator"></div>
                  <br />
                  <h2>{relationRef?.name}</h2>
                  <br />
                  <p>{relationRef?.description}</p>
                  <br />
                  <h3>How are they related</h3>
                  <br />
                  <p>{relation?.relationinfo}</p>
                  <br />
                  <Link
                    to={"/characters/" + relationRef?.slug.current}
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

export default relations;
