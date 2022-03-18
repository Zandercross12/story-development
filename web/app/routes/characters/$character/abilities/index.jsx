// remix
import { useLoaderData } from "remix";
// third party
import client from "~/lib/sanity/client";
import groq from "groq";
// components
import CharacterSidebar from "~/components/CharacterSidebar/CharacterSidebar";
// styles
import styles from "../../../../components/Characteristics/Characteristics.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export const loader = async (context) => {
  const slug = context.params.character;

  const character = await client.fetch(
    groq`*[_type == "characters" && slug.current == $slug]`,
    { slug }
  );

  const reference = await client.fetch(groq`*[_type == "magicAbilities"]`);
  return {
    character,
    reference,
  };
};

export const Abilities = () => {
  const data = useLoaderData();

  const character = data.character[0];

  const magicAbilities = data.reference;

  console.log(magicAbilities);

  let i = 0;

  return (
    <>
      <CharacterSidebar character={character} />
      <section>
        <div className="container">
          <h1>Abilities</h1>
          <ul>
            {character.abilities.map((ability) => {
              console.log(ability);
              i++;

              const abilityRef = ability._ref;
              return (
                <li key={i}>
                  <h2></h2>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Abilities;
