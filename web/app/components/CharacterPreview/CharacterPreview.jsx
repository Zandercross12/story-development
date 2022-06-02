// remix
import { Link } from "remix";
// third-party
import imageUrlBuilder from "@sanity/image-url";
import client from "~/lib/sanity/client";

const builder = imageUrlBuilder(client);

export const CharacterPreview = ({ data }) => {
  return (
    <div>
      <ul className="character_list">
        {data.map((character, index) => {
          return (
            <li key={index + "preview"} className="list_character">
              <Link to={`/characters/${character.slug.current}`}>
                <div className="image_container">
                  {!character.image ? (
                    <img src="/default_avatar.svg" alt="character" />
                  ) : (
                    <img src={builder.image(character.image)} alt="character" />
                  )}
                </div>
                <h1>{character.name}</h1>
                <p>{character.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
