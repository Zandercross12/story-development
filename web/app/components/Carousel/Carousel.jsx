// react | remix
import { Link } from "remix";
// third-party
import imageUrlBuilder from "@sanity/image-url";
import client from "~/lib/sanity/client";

const builder = imageUrlBuilder(client);

export const Carousel = ({ data }) => {
  return (
    <ul className="carousel_list">
      {data.map((item, index) => {
        return (
          <li className="carousel_list_item" key={index}>
            <Link to="#">
              <div className="carousel_image_container">
                {!item.image ? (
                  <img src="/file-solid.svg" alt="carouselImage" />
                ) : (
                  <img src={builder.image(item?.image)} alt="carouselImage" />
                )}
              </div>
              <h2>{item?.name}</h2>
              <p className="carousel_card_description">{item?.description}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Carousel;
