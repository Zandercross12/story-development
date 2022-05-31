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
    groq`*[_type == "volumes" && slug.current == $slug][0]`,
    { slug }
  );

  return { volume, partname };
};

export const meta = ({ data }) => {
  const volume = data?.volume;
  return {
    title: `${volume?.name}`,
  };
};

export const Content = () => {
  const data = useLoaderData();

  const volume = data?.volume;
  const partname = data?.partname;

  const content = volume?.content.find(
    (contentItem) => contentItem.partslug.current === partname
  );

  return (
    <section id="content">
      <div className="container">
        <h1>{content?.partname}</h1>
        {content?.part.map((partItem) => {
          const path = partItem.children;

          return (
            <>
              {path.map((textItems, index) => {
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

                return <span key={`${partItem._key} + ${index}`}>{text}</span>;
              })}
              <br />
              <br />
            </>
          );
        })}
        <Pagination volume={volume} partname={partname} />
      </div>
    </section>
  );
};
export default Content;
