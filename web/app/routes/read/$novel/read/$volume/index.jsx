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

  return (
    <section id="volume">
      <div className="container">
        <h1>{volumes?.name}</h1>
        <p>
          <strong>Author's Opinion:</strong> {volumes?.opinion}
        </p>
        <br />
        <h3>Part List</h3>
        <br />
        {volumes?.content.map((content) => {
          return (
            <div className="content" key={content._key}>
              <h4>
                -{" "}
                <Link className="blue_link" to={content.partslug.current}>
                  {content.partname}
                </Link>
              </h4>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Volume;
