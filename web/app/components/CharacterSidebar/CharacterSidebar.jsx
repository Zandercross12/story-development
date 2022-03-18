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
          case "image":
          case "name":
            return;
          case "dateofbirth":
            keyName = "date of birth";
            break;
          case "dateofdeath":
            keyName = "date of death";
            break;
        }

        return (
          <li className="character_list_item" key={i}>
            <Link to={key}>{keyName}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CharacterSidebar;
