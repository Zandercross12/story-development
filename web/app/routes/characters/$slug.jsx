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

  return character;
};

export const Character = () => {
  const data = useLoaderData();

  console.log(data[0]);

  return (
    <ul className="character_sidebar">
      {Object.keys(data[0]).map((key) => {
        const value = data[0][key];

        return (
          <li key={value._id}>
            <h1>{key}</h1>
          </li>
        );
      })}
    </ul>
  );
};

export default Character;
