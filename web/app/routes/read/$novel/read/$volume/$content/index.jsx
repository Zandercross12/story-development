// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";

export const loader = async ({ params }) => {
  const slug = params.volume;
  const partname = params.content;

  const volume = await client.fetch(
    groq`*[_type == "volumes" && slug.current == $slug][0]`,
    { slug }
  );

  return { volume, partname };
};

export const meta = () => {
  return {
    title: "Read",
  };
};

export const Content = () => {
  const data = useLoaderData();

  const volume = data?.volume;
  const partname = data?.partname;

  const content = volume?.content.find(
    (content) => content.partslug.current === partname
  );

  console.log(content);
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
      </div>
    </section>
  );
};
export default Content;
