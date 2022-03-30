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

export const Location = () => {
  const data = useLoaderData();

  const location = data.location[0];

  const stories = data.storyRef;

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
          <h1>Location Events</h1>
          <LocationEvents location={location} stories={stories} />
        </div>
      </section>
    </>
  );
};

export default Location;
