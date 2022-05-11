// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
import TextComponent from "~/components/TextComponent/TextComponent";

export const loader = async () => {
  const page = await client.fetch(
    groq`*[_type == "pages" && name == "Contact"]`
  );

  return page;
};

export const meta = () => {
  return {
    title: "Contact",
  };
};

export const Contact = () => {
  const data = useLoaderData();

  return (
    <section id="contact">
      <div className="container">
        <TextComponent data={data} />
      </div>
    </section>
  );
};

export default Contact;
