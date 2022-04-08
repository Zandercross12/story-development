// remix
import { Link } from "remix";
// third-party
import imageUrlBuilder from "@sanity/image-url";
import client from "~/lib/sanity/client";

const builder = imageUrlBuilder(client);

// TODO: Combine Location Preview with Character Preview to be one component

export const LocationPreview = ({ data }) => {
  return (
    <div>
      <ul className="location_list">
        {data.map((location) => {
          return (
            <li className="list_location">
              <Link to={`/locations/${location.slug.current}`}>
                <div className="image_container">
                  {!location.image ? (
                    <img src="/building-columns-solid.svg" alt="location" />
                  ) : (
                    <img src={builder.image(location.image)} alt="location" />
                  )}
                </div>
                <h1>{location.name}</h1>
                <p>{location.description}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LocationPreview;
