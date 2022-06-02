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

  if (!character.length > 0) {
    return { character: null };
  }

  return {
    character,
  };
};

export const meta = ({ data }) => {
  let character;
  if (data.character) {
    character = data?.character;
    return {
      title: `Character - ${character[0].name || "N/A"}`,
    };
  }

  return {
    title: "Character - N/A",
  };
};

const builder = imageUrlBuilder(client);

export const Character = () => {
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
          <div className="character_image_container">
            {!character.image ? (
              <img src="/default_avatar.svg" alt="character" />
            ) : (
              <img src={builder.image(character.image)} alt="character" />
            )}
          </div>
          <h1 className="capitalize">name</h1>
          <p>{character?.name}</p>
        </div>
      </section>
      {character?.description && (
        <section>
          <div className="container_sidebar">
            <h1 className="capitalize">description</h1>
            <p>{character?.description}</p>
          </div>
        </section>
      )}
      {character?.dateofbirth && (
        <section>
          <div className="container_sidebar">
            <h1 className="capitalize">date of birth</h1>
            <p>{character?.dateofbirth}</p>
          </div>
        </section>
      )}
      {character?.dateofdeath && (
        <section>
          <div className="container_sidebar">
            <h1 className="capitalize">date of death</h1>
            <p>{character?.dateofdeath}</p>
          </div>
        </section>
      )}
    </>
  );
};

export default Character;
