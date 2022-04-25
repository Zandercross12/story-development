// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
// components
import TextComponent from "~/components/TextComponent/TextComponent";
import Timeline from "~/components/Timeline/Timeline";

export const loader = async () => {
  const page = await client.fetch(groq`*[_type == "pages" && name == "Story"]`);

  const mainTimeline = await client.fetch(
    groq`*[_type == "timeline" && name == "Story Timeline [ALL]"][0]`
  );

  const events = await client.fetch(groq`*[_type == "story"]`);

  return {
    page,
    mainTimeline,
    events,
  };
};

export const Story = () => {
  const data = useLoaderData();

  return (
    <>
      <section id="story">
        <div className="container">
          <TextComponent data={data.page} />
        </div>
      </section>
      <section id="timeline">
        <div className="container">
          <h1>{data?.mainTimeline?.name}</h1>
          <Timeline
            timeline={data?.mainTimeline}
            name={"mainTimeline"}
            events={data?.events}
          />
        </div>
      </section>
    </>
  );
};

export default Story;
