// remix
import { Link, useLoaderData } from "remix";
// third party
import client from "~/lib/sanity/client";
import groq from "groq";

export const loader = async () => {
  return await client.fetch(groq`*[_type == "story"]`);
};

export const LocationEvents = ({ data }) => {
  const eventsRef = useLoaderData();

  console.log(eventsRef);

  return (
    <>
      <h1></h1>
    </>
  );
};

export default LocationEvents;
