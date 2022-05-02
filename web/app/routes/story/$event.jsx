// react | remix
import { useLoaderData } from "remix";
// sanity-client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";

export const loader = async (context) => {
  const slug = context.params.event;
  const events = await client.fetch(
    groq`*[_type == "story" && slug.current == $slug]`,
    { slug }
  );

  return {
    events,
  };
};

export const meta = ({ data }) => {
  const { events } = data;
  return {
    title: events[0].name || "Error",
  };
};

export const Event = () => {
  const data = useLoaderData();

  const { events } = data;

  return (
    <>
      <section>
        <div className="container">
          <h1>{events[0]?.name || "No Title"}</h1>
          <p>{events[0]?.description || "No Description"}</p>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>Participants</h1>
          {/* TODO WORK ON PARTICIPANTS */}
        </div>
      </section>
    </>
  );
};

export default Event;
