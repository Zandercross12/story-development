// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
// components
import TextComponent from "~/components/TextComponent/TextComponent";
import LocationPreview from "~/components/LocationPreview/LocationPreview";
// styles
import styles from "~/components/LocationPreview/LocationPreview.css";

export const links = () => [
  {
    rel: "stylesheet",
    href: styles,
  },
];

export const loader = async () => {
  const page = await client.fetch(
    groq`*[_type == "pages" && name == "Locations"]`
  );

  const locations = await client.fetch(groq`*[_type == "locations"]`);

  return { page, locations };
};

export const Locations = () => {
  const data = useLoaderData();

  return (
    <>
      <section id="locations">
        <div className="container">
          <TextComponent data={data.page} />
        </div>
      </section>
      <section>
        <div class="container">
          <h1>Latest Locations</h1>
          <LocationPreview data={data.locations} />
        </div>
      </section>
    </>
  );
};

export default Locations;
