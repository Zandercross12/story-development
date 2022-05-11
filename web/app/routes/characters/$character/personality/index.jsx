// remix
import { useLoaderData } from "remix";
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

  return {
    character,
  };
};

export const Personality = () => {
  const data = useLoaderData();

  const character = data.character[0];

  let i = 0;

  return (
    <>
      <CharacterSidebar character={character} />
      <section>
        <div className="container_sidebar">
          <h1>Personality</h1>
          <p>
            {character?.personality.map((personalityText) => {
              return (
                <span key={i}>
                  {personalityText.children[0].text}
                  <br />
                  <br />
                </span>
              );
            })}
          </p>
        </div>
      </section>
    </>
  );
};

export default Personality;
