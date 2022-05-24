// react | remix
import { useLoaderData } from "remix";
// sanity client
import client from "~/lib/sanity/client";
// third-party
import groq from "groq";
// components
import TextComponent from "~/components/TextComponent/TextComponent";
import BookList from "../../components/BookList/BookList";
// styles
import styles from "~/components/BookList/BookList.css";

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

export const loader = async () => {
  const page = await client.fetch(groq`*[_type == "pages" && name == "Read"]`);

  const books = await client.fetch(groq`*[_type == "novels"]`);

  return {
    page,
    books,
  };
};

export const meta = () => {
  return {
    title: "Read",
  };
};

export const Read = () => {
  const data = useLoaderData();

  return (
    <>
      <section id="read">
        <div className="container">
          <TextComponent data={data?.page} />
        </div>
      </section>
      <section id="bookList">
        <div className="container">
          <BookList data={data?.books} />
        </div>
      </section>
    </>
  );
};

export default Read;
