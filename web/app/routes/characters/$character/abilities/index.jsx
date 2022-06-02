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

  if (!character.length > 0) {
    return { character: null };
  } else if (!reference.length > 0) {
    return { reference: null };
  }

  return {
    character,
    reference,
  };
};

export const Abilities = () => {
  const data = useLoaderData();

  if (!data.character) {
    throw new Error("Character Not Found");
  } else if (!data.reference) {
    throw new Error("Reference Not Found");
  }

  const character = data.character[0];

  const magicAbilities = data.reference;

  if (!character.abilities || !character.abilities.length > 0) {
    throw new Error("Character Abilities Not Found");
  }

  return (
    <>
      <CharacterSidebar character={character} />
      <section>
        <div className="container_sidebar">
          <h1>Abilities</h1>
          <ul>
            {character?.abilities?.map((ability, index) => {
              const abilityRefId = ability?._ref;

              let abilityRef;

              if (abilityRefId) {
                abilityRef = magicAbilities.find(
                  (abilities) => abilities._id === abilityRefId
                );
              }

              return (
                <li key={index + "ability"}>
                  <h2>{abilityRef?.name}</h2>
                  <br />
                  <p>{abilityRef?.description}</p>
                  <br />
                  <h3>Action</h3>
                  <br />
                  <p>
                    {abilityRef?.action.map((actionText, index2) => {
                      return (
                        <span key={index2 + "actionText"}>
                          {actionText.children[0].text} <br />
                        </span>
                      );
                    })}
                  </p>
                  <br />
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
