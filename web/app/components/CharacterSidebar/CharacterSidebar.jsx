import { Link } from "remix";

export const CharacterSidebar = ({ character }) => {
  let i = 0;
  return (
    <ul className="character_sidebar">
      {Object.keys(character).map((key) => {
        i++;

        let keyName = key;

        switch (keyName) {
          case "_createdAt":
          case "_id":
          case "_rev":
          case "_type":
          case "_updatedAt":
          case "slug":
          case "description":
          case "dateofbirth":
          case "dateofdeath":
          case "image":
          case "dislikes":
            return;
          case "likes":
            keyName = "Likes" + "/" + "Dislikes";
            key = "likesdislikes";
            break;
          case "name":
            keyName = character.name;
            key = "";
            break;
        }

        return (
          <li className="character_list_item" key={i}>
            <Link to={"/characters/" + character?.slug.current + "/" + key}>
              {keyName}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CharacterSidebar;
