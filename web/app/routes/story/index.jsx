// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
// components
import TextComponent from "~/components/TextComponent/TextComponent";

export const loader = async () => {
  const page = await client.fetch(groq`*[_type == "pages" && name == "Story"]`);

  return page;
};

export const Story = () => {
  const data = useLoaderData();

  return (
    <>
      <section id="story">
        <div className="container">
          <TextComponent data={data} />
        </div>
      </section>
      <section id="timeline">
        <div class="container">
          <h1>Timeline</h1>
        </div>
      </section>
    </>
  );
};

export default Story;
