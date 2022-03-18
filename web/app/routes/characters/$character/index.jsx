// remix
import { useLoaderData } from "remix";
// third party
import client from "~/lib/sanity/client";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
// components
import CharacterSidebar from "~/components/CharacterSidebar/CharacterSidebar";
// styles
import styles from "../../../components/Characteristics/Characteristics.css";

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

const builder = imageUrlBuilder(client);

export const Character = () => {
  const data = useLoaderData();

  const character = data.character[0];

  return (
    <>
      <CharacterSidebar character={character} />

      <section>
        <div className="container_sidebar">
          <div className="image_container">
            {!character.image ? (
              <img src="/default_avatar.svg" alt="character" />
            ) : (
              <img src={builder.image(character.image)} alt="character" />
            )}
          </div>
          <h1 className="capitalize">name</h1>
          <p>{character.name}</p>
        </div>
      </section>
      {character.description && (
        <section>
          <div className="container_sidebar">
            <h1 className="capitalize">description</h1>
            <p>{character.description}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default Character;
