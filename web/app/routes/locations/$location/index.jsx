// remix
import { useLoaderData } from "remix";
// third party
import client from "~/lib/sanity/client";
import groq from "groq";
// components
import LocationEvents from "~/components/LocationEvents/LocationEvents";
// styles
import styles from "../../../components/LocationEvents/LocationEvents.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export const loader = async (context) => {
  const slug = context.params.location;

  const location = await client.fetch(
    groq`*[_type == "locations" && slug.current == $slug]`,
    { slug }
  );

  const storyRef = await client.fetch(groq`*[_type == "story"]`);

  return {
    location,
    storyRef,
  };
};

export const meta = ({ data }) => {
  let location;

  if (data.location.length > 0) {
    location = data.location[0];

    return {
      title: `Location - ${location.name || "N/A"}`,
    };
  }

  return {
    title: "Location Not Found",
  };
};

export const Location = () => {
  const data = useLoaderData();

  if (!data.location || !data.location.length > 0) {
    throw new Error("Location Not Found");
  }

  const location = data.location[0];

  const stories = data.storyRef;

  // TODO: Add Sort Feature

  return (
    <>
      <section>
        <div className="container">
          <div className="location_image_container">
            {!location.image ? (
              <img src="/building-columns-solid.svg" alt="location" />
            ) : (
              <img src={builder.image(location?.image)} alt="location" />
            )}
          </div>
        </div>
      </section>
      <section id="location">
        <div className="container">
          <h1>{location?.name}</h1>
          <p>{location?.description}</p>
          <div className="separator"></div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>Location Events (Latest)</h1>
          <LocationEvents location={location} stories={stories} />
        </div>
      </section>
    </>
  );
};

export default Location;
