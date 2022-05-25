// react | remix
import { useLoaderData, Link } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
// components
// styles

const builder = imageUrlBuilder(client);

export const loader = async ({ params }) => {
  const slug = params.novel;
  const novels = await client.fetch(
    groq`*[_type == "novels" && slug.current == $slug][0]`,
    { slug }
  );

  const novelId = novels._id;

  const allVolumes = await client.fetch(groq`*[_type == "volumes"]`);

  const volumes = allVolumes.filter((volume) => volume.novel._ref === novelId);

  return { novels, volumes };
};

export const meta = ({ data }) => {
  const novels = data?.novels;

  return {
    title: `Read ${novels?.name}`,
  };
};

export const Read = () => {
  const data = useLoaderData();

  const novels = data?.novels;
  const volumes = data?.volumes.reverse();

  return (
    <section id="read">
      <div className="container">
        <h1>Read {novels?.name}</h1>
        <h3>Volume List</h3>
        <br />
        <ul>
          {volumes?.map((volume) => {
            const creationDate = new Date(volume._createdAt);
            const date = creationDate.toLocaleDateString();

            return (
              <li>
                -{" "}
                <button className="blue_link">
                  {volume?.name} - {date} -{" "}
                  {volume.published ? "Finished" : "Unfinished"}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Read;
