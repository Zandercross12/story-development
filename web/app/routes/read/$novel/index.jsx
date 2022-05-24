// remix | react
import { useLoaderData, Link } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
// components

export const loader = async (context) => {
  const slug = context.params.novel;
  const novel = await client.fetch(
    groq`*[_type == "novels" && slug.current == $slug]`,
    { slug }
  );
  return { novel };
};

export const meta = ({ data }) => {
  const { novel } = data;
  return {
    title: `${novel[0]?.name}`,
  };
};

export const Novel = () => {
  const data = useLoaderData();
  const novel = data?.novel[0];

  console.log(novel);

  return (
    <>
      {/* Insert Cover Image Here */}
      <section id="novel">
        <div className="container">
          <h1>{novel?.name}</h1>
          <h3>Description:</h3>
          <br />
          <p>{novel?.description}</p>
        </div>
      </section>
      <section id="teaser">
        <div className="container">
          <h3>Teaser:</h3>
          <br />
          <p>{novel?.description}</p>
        </div>
      </section>
      <section id="opinion">
        <div className="container">
          <h3>Author's Opinion:</h3>
          <br />
          <p>{novel?.opinion}</p>
        </div>
      </section>
      <section id="completion">
        <div className="container">
          <h3>Completion Status:</h3>
          <br />
          <p>{`${novel?.completed}`}</p>
        </div>
      </section>
      <section id="read">
        <div className="container">
          <h3>Read</h3>
          <br />
          <Link to="test">Click Me to Read</Link>
        </div>
      </section>
    </>
  );
};
export default Novel;
