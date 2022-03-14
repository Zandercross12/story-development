// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// components
import { TextComponent } from "../../components/TextComponent/TextComponent";
// third-party
import groq from "groq";
import { CharacterPreview } from "~/components/CharacterPreview/CharacterPreview";

export const loader = async () => {
  const page = await client.fetch(
    groq`*[_type == "pages" && name == "Characters"]`
  );

  return page;
};

export default function Characters() {
  const data = useLoaderData();

  return (
    <>
      <section id="characters">
        <div className="container">
          <TextComponent data={data} />
        </div>
      </section>
      <section id="latest">
        <div className="container">
          <h1>Latest Characters</h1>
          <CharacterPreview />
        </div>
      </section>
    </>
  );
}
