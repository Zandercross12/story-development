// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
// components
import TextComponent from "~/components/TextComponent/TextComponent";
import Carousel from "~/components/Carousel/Carousel";
// style
import styles from "~/components/Carousel/Carousel.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export const loader = async () => {
  const page = await client.fetch(
    groq`*[_type == "pages" && name == "WorldBuilding"]`
  );

  const worldBuilding = await client.fetch(groq`*[_type == "worldBuilding"]`);

  return {
    page,
    worldBuilding,
  };
};

export const meta = () => {
  return {
    title: "WorldBuilding",
  };
};

export const WorldBuilding = () => {
  const data = useLoaderData();

  return (
    <>
      <section id="worldbuilding">
        <div className="container">
          <TextComponent data={data?.page} />
        </div>
      </section>
      <section id="worldbuilding-list">
        <div className="container">
          <h1>World Building Topics</h1>
          <Carousel data={data?.worldBuilding} name={"worldBuilding"} path="" />
        </div>
      </section>
    </>
  );
};

export default WorldBuilding;
