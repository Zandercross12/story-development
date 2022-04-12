// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
// components
// styles

export const loader = async (context) => {
  const slug = context.params.ability;
  const magicAbility = await client.fetch(
    groq`*[_type == "magicAbilities" && slug.current == $slug]`,
    { slug }
  );

  return {
    magicAbility,
  };
};

export const Ability = () => {
  const data = useLoaderData();

  const ability = data.magicAbility[0];

  return (
    <>
      <section>
        <div className="container">
          <h1>{ability?.name}</h1>
          <p>{ability?.description}</p>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>Action</h1>
          <p>
            {ability?.action?.map((actionItem, index) => {
              return (
                <div key={index}>
                  {actionItem.children[0].text}
                  <br />
                </div>
              );
            })}
          </p>
        </div>
      </section>
    </>
  );
};

export default Ability;
