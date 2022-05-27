// react | remix
import { useLoaderData, Link } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
// components
// styles

export const loader = async ({ params }) => {
  const slug = params.volume;
  const volumes = await client.fetch(
    groq`*[_type == "volumes" && slug.current == $slug][0]`,
    { slug }
  );

  return {
    volumes,
  };
};

export const meta = ({ data }) => {
  const volumes = data?.volumes;
  return {
    title: `Read ${volumes?.name}`,
  };
};

export const Volume = () => {
  const data = useLoaderData();

  const volumes = data?.volumes;

  console.log(volumes);
  return (
    <section id="volume">
      <div className="container">
        <h1>Read {volumes?.name}</h1>
      </div>
    </section>
  );
};

export default Volume;
