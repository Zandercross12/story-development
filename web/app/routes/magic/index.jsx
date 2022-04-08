// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
// components
import TextComponent from "~/components/TextComponent/TextComponent";
import Carousel from "~/components/Carousel/Carousel";
// styles
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
  const page = await client.fetch(groq`*[_type == "pages" && name == "Magic"]`);
  const magicConcept = await client.fetch(groq`*[_type == "magic"]`);
  const magicAbilities = await client.fetch(groq`*[_type == "magicAbilities"]`);

  return {
    page,
    magicConcept,
    magicAbilities,
  };
};

export const Magic = () => {
  const data = useLoaderData();
  return (
    <>
      <section id="magic">
        <div className="container">
          <TextComponent data={data?.page} />
        </div>
      </section>
      <section id="magicConcept">
        <div className="container">
          <h1>Magic Concepts</h1>
          {/* NOTE The ids below are subject to change to data */}
          <Carousel
            data={data?.magicConcept}
            name={"magicConcepts"}
            path="concepts/"
          />
        </div>
      </section>
      <section id="magicAbilities">
        <div className="container">
          <h1>Magic Abilities</h1>
          <Carousel
            data={data?.magicAbilities}
            name={"magicAbilities"}
            path="abilities/"
          />
        </div>
      </section>
    </>
  );
};

export default Magic;
