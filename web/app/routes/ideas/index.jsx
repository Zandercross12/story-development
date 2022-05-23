// react | remix
import { Link, useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
// components
import TextComponent from "~/components/TextComponent/TextComponent";
// style

export const loader = async () => {
  const page = await client.fetch(groq`*[_type == "pages" && name == "Ideas"]`);

  const ideas = await client.fetch(groq`*[_type == "ideas"]`);
  return {
    page,
    ideas,
  };
};

export const meta = () => {
  return {
    title: "Ideas",
  };
};

export const Ideas = () => {
  const data = useLoaderData();

  return (
    <>
      <section id="ideas">
        <div className="container">
          <TextComponent data={data?.page} />
        </div>
      </section>
      <section id="ideas-list">
        <div className="container">
          <h1>Ideas List</h1>
          {data?.ideas?.map((idea) => {
            return (
              <div key={idea._id}>
                -{" "}
                <Link className="blue_link" to={`${idea?.slug.current}`}>
                  {idea?.name}
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Ideas;
