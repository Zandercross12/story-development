// remix
import { useLoaderData } from "remix";
import client from "~/lib/sanity/client";
// third party
import groq from "groq";
// styles
import styles from "../../components/CharacterSidebarItem/CharacterSidebarItem.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export const loader = async (context) => {
  const slug = context.params.slug;

  const character = await client.fetch(
    groq`*[_type == "characters" && slug.current == $slug]`,
    { slug }
  );

  const refMagicAbilities = await client.fetch(
    groq`*[_type == "magicAbilities"]`
  );
  const refCharacter = await client.fetch(groq`*[_type == "characters"]`);

  return {
    character,
    refCharacter,
    refMagicAbilities,
  };
};

export const Character = () => {
  const data = useLoaderData();

  const character = data.character[0];
  const magicAbilities = data.refMagicAbilities;

  console.log(character);

  let i = 0;

  return (
    <ul className="character_sidebar">
      {Object.keys(character).map((key) => {
        const value = character[key];
        i++;

        switch (key) {
          case "_createdAt":
          case "_id":
          case "_rev":
          case "_type":
          case "_updatedAt":
          case "slug":
            return;
            break;
        }
        return (
          <li key={i}>
            <button>{key}</button>
          </li>
        );
      })}
    </ul>
  );
};

export default Character;
