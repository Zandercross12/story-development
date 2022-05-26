// react | remix
import { Link } from "remix";
// third-party
import imageUrlBuilder from "@sanity/image-url";
import client from "~/lib/sanity/client";

const builder = imageUrlBuilder(client);

export const BookList = ({ data }) => {
  return (
    <>
      <ul className="book_list">
        {data.map((book) => {
          return (
            <li className="book_item" key={book.id}>
              <div className="book_container">
                <Link to={`/read/${book.slug.current}`}>
                  <h1>{book?.name}</h1>
                  <div className="image_container">
                    {!book.image ? (
                      <img src="/book-solid.svg" alt="book" />
                    ) : (
                      <img src={builder.image(book.image)} alt="book" />
                    )}
                  </div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BookList;
