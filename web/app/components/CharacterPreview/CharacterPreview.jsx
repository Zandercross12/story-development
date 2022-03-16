import { Link } from "remix";

export const CharacterPreview = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/characters">
            <div className="image_container">
              <img src="/default_avatar.svg" alt="Me" />
            </div>
            <h1>[Character Name]</h1>
            <p>[Character Description]</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
