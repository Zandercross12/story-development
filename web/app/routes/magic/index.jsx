// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
import TextComponent from "~/components/TextComponent/TextComponent";

export const loader = async () => {
  const page = await client.fetch(groq`*[_type == "pages" && name == "Magic"]`);

  return page;
};

export const Magic = () => {
  const data = useLoaderData();
  return (
    <section id="magic">
      <div className="container">
        <TextComponent data={data} />
      </div>
    </section>
  );
};

export default Magic;
