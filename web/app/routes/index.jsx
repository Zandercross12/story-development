// react | remix
import { useLoaderData } from "remix";
// components
import { TextComponent } from "../components/TextComponent/TextComponent";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";

export const loader = async () => {
  const page = await client.fetch(groq`*[_type == "pages" && name == "Home"]`);

  return page;
};

export default function Index() {
  const data = useLoaderData();

  return (
    <section id="home">
      <div className="container">
        <TextComponent data={data} />
      </div>
    </section>
  );
}
