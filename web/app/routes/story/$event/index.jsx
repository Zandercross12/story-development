// react | remix
import { useLoaderData } from "remix";
// sanity-client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

export const loader = async (context) => {
  const slug = context.params.event;
  const events = await client.fetch(
    groq`*[_type == "story" && slug.current == $slug]`,
    { slug }
  );

  if (!events || !events.length > 0) {
    return {
      events: null,
    };
  }

  return {
    events,
  };
};

export const meta = ({ data }) => {
  let events;

  if (data.events) {
    events = data.events[0];

    return {
      title: events.name || "Error",
    };
  }

  return {
    title: "Events not found",
  };
};

export const Event = () => {
  const data = useLoaderData();

  if (!data.events) {
    throw new Error("Events not found");
  }

  const events = data.events;

  return (
    <>
      <section>
        <div className="container"></div>
      </section>
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
