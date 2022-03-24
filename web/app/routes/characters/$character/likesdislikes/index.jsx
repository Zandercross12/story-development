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

export const LikesDislikes = () => {
  const data = useLoaderData();

  const character = data.character[0];

  return (
    <>
      <CharacterSidebar character={character} />
      <section>
        <div className="container">
          <h1>Likes/Dislikes</h1>
          <h2>Likes:</h2>
          <br />
          <p>
            {character?.likes.map((likedItem) => {
              return <span className="comma_list">{likedItem}</span>;
            })}
          </p>
        </div>
      </section>
      <section>
        <div className="container">
          <h2>Dislikes:</h2>
          <br />
          <p>
            {character?.dislikes.map((dislikedItem) => {
              return <span className="comma_list">{dislikedItem}</span>;
            })}
          </p>
        </div>
      </section>
    </>
  );
};

export default LikesDislikes;
