// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
// components
import Pagination from "~/components/Pagination/Pagination";

export const loader = async ({ params }) => {
  const slug = params.volume;
  const partname = params.content;

  const volume = await client.fetch(
    groq`*[_type == "volumes" && slug.current == $slug]`,
    { slug }
  );

  if (!volume.length > 0) {
    return { volume: null };
  }

  return { volume, partname };
};

export const meta = ({ data }) => {
  let volume;

  if (data.volume) {
    volume = data?.volume;

    return {
      title: `${volume?.name}`,
    };
  }

  return {
    title: "Volume - N/A",
  };
};

export const Content = () => {
  const data = useLoaderData();

  if (!data.volume) {
    throw new Error("Volume Not Found");
  }

  const volume = data?.volume[0];
  const partname = data?.partname;

  const content = volume?.content.find(
    (contentItem) => contentItem.partslug.current === partname
  );

  if (!content) {
    throw new Error("Chapter/Part Not Found");
  }

  return (
    <section id="content">
      <div className="container">
        <h1>{content?.partname}</h1>
        {content?.part.map((partItem, index) => {
          const path = partItem.children;

          return (
            <div key={index + "partItem"}>
              {path.map((textItems, index2) => {
                const marks = textItems.marks;

                let text = textItems.text;

                if (text === "---") {
                  text = (
                    <>
                      <br />
                      <br />
                      <hr />
                    </>
                  );
                }

                if (marks[0] === "strong") {
                  text = <strong>{text}</strong>;
                } else if (marks[0] === "em") {
                  text = <em>{text}</em>;
                }

                return <span key={index + "textItems" + index2}>{text}</span>;
              })}
              <br />
              <br />
            </div>
          );
        })}
        <Pagination volume={volume} partname={partname} />
      </div>
    </section>
  );
};
export default Content;
