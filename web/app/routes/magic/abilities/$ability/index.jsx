// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
// components
// styles
import styles from "~/styles/ability.css";

const builder = imageUrlBuilder(client);

export const links = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

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
          <div className="ability_image_container">
            {ability?.image ? (
              <img
                src={builder.image(ability.image).url()}
                alt="abilityImage"
              />
            ) : (
              <img src="/file-solid.svg" alt="abilityImage" />
            )}
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>{ability?.name}</h1>
          <p>{ability?.description || "No Description"}</p>
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
            }) || "No Action"}
          </p>
        </div>
      </section>
    </>
  );
};

export default Ability;
