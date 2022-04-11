// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
import imageUrlBuilder from "@sanity/image-url";
// components
// styles

export const Ability = () => {
  return (
    <>
      <section>
        <div className="container">
          <h1>Magic Name</h1>
          <p>Magic Description</p>
        </div>
      </section>
      <section>
        <div className="container">
          <h1>Action</h1>
          <p></p>
        </div>
      </section>
    </>
  );
};

export default Ability;
