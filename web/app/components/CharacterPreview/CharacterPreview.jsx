import { Link } from "remix";
import imageUrlBuilder from "@sanity/image-url";
import client from "~/lib/sanity/client";

const builder = imageUrlBuilder(client);

export const CharacterPreview = ({ data }) => {
  console.log(data);
  return (
    <div>
      <ul className="character_list">
        {data.map((character) => {
          return (
            <li className="character_list_item">
              <Link to="/characters">
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
