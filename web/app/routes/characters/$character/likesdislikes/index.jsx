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

  if (!data.character.length > 0) {
    throw new Error("Character Not Found");
  }

  const character = data.character[0];

  return (
    <>
      <CharacterSidebar character={character} />
      <section>
        <div className="container_sidebar">
          <h1>Likes/Dislikes</h1>
          <h2>Likes:</h2>
          <br />
          <p>
            {character?.likes
              ? character?.likes?.map((likedItem, index) => {
                  return (
                    <span key={index + "liked"} className="comma_list">
                      {likedItem}
                    </span>
                  );
                })
              : "None"}
          </p>
        </div>
      </section>
      <section>
        <div className="container_sidebar">
          <h2>Dislikes:</h2>
          <br />
          <p>
            {character?.dislikes
              ? character?.dislikes?.map((dislikedItem, index) => {
                  return (
                    <span key={index + "disliked"} className="comma_list">
                      {dislikedItem}
                    </span>
                  );
                })
              : "None"}
          </p>
        </div>
      </section>
    </>
  );
};

export default LikesDislikes;
