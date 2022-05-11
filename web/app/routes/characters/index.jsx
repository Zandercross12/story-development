// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// components
import { TextComponent } from "../../components/TextComponent/TextComponent";
import { CharacterPreview } from "~/components/CharacterPreview/CharacterPreview";
// third-party
import groq from "groq";
// styles
import styles from "../../components/CharacterPreview/CharacterPreview.css";

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
    groq`*[_type == "pages" && name == "Characters"]`
  );

  const characters = await client.fetch(groq`*[_type == "characters"]`);

  if (page[0].length === 0 || characters[0].length === 0) {
    throw new Response("Not Found", {
      status: 404,
    });
  }

  return {
    page,
    characters,
  };
};

export const meta = () => {
  return {
    title: "Characters",
  };
};

export default function Characters() {
  const data = useLoaderData();

  return (
    <>
      <section id="characters">
        <div className="container">
          <TextComponent data={data.page} />
        </div>
      </section>
      <section id="latest">
        <div className="container">
          <h1>Latest Characters</h1>
          <CharacterPreview data={data.characters} />
        </div>
      </section>
    </>
  );
}
