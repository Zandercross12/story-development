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

  if (!character.length > 0) {
    return { character: null };
  }

  return {
    character,
  };
};

export const Backstory = () => {
  const data = useLoaderData();

  if (!data.character) {
    throw new Error("Character Not Found");
  }

  const character = data.character[0];

  return (
    <>
      <CharacterSidebar character={character} />
      <section>
        <div className="container_sidebar">
          <h1>Backstory</h1>
          <p>
            {character?.backstory.map((backstoryText, index) => {
              return (
                <span key={index + "backstory"}>
                  {backstoryText?.children[0].text} <br />
                </span>
              );
            })}
          </p>
        </div>
      </section>
    </>
  );
};

export default Backstory;
