// remix
import { useLoaderData } from "remix";
// third party
import client from "~/lib/sanity/client";
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
import LocationEvents from "~/components/LocationEvents/LocationEvents";
import Character from "~/routes/characters/$character";

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
        <div class="container">
          <div class="location_image_container">
            {!location.image ? (
              <img src="/building-columns-solid.svg" alt="location" />
            ) : (
              <img src={builder.image(location?.image)} alt="location" />
            )}
          </div>
        </div>
      </section>
      <section id="location">
        <div class="container">
          <h1>{location?.name}</h1>
          <p>{location?.description}</p>
          <div class="separator"></div>
        </div>
      </section>
      <section>
        <div class="container">
          <h1>Location Events</h1>
          <LocationEvents location={location} stories={stories} />
        </div>
      </section>
    </>
  );
};

export default Location;
