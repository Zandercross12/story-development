// react | remix
import { useLoaderData, Link } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
// components
// styles
import styles from "~/styles/read.css";

const builder = imageUrlBuilder(client);

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

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

  function toggleContent(parent) {
    const target = parent?.target;
    const targetId = target?.id;

    const query = `.${targetId}`;

    const targetContent = document.querySelector(query);

    targetContent.classList.toggle("hidden");
  }

  return (
    <section id="read">
      <div className="container">
        <h1>Read {novels?.name}</h1>
        <h3>Volume List</h3>
        <br />
        <ul>
          {volumes?.map((volume, index) => {
            const creationDate = new Date(volume._createdAt);
            const date = creationDate.toLocaleDateString();

            return (
              <li key={index + "volume"}>
                -{" "}
                <button
                  id={volume.slug.current}
                  onClick={toggleContent}
                  className="blue_link volume"
                >
                  {volume?.name} - {date} -{" "}
                  {volume.published ? "Finished" : "Unfinished"}
                </button>
                <ul className={`hidden ${volume.slug.current}`}>
                  {volume?.content.map((contentItem, index) => {
                    return (
                      <li key={index + "content"} className="indent_list">
                        -{" "}
                        <Link
                          className="part_link"
                          to={
                            volume?.slug.current +
                            "/" +
                            contentItem?.partslug.current
                          }
                        >
                          {contentItem?.partname}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default Read;
