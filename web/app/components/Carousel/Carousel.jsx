// react | remix
import { useState } from "react";
import { Link } from "remix";
// third-party
import imageUrlBuilder from "@sanity/image-url";
import client from "~/lib/sanity/client";

const builder = imageUrlBuilder(client);

export const Carousel = ({ data, name, path }) => {
  const maxAmount = data?.length;
  const [carouselIndex, setCarouselIndex] = useState(0);
  let carouselListItem;
  let newIndex;

  const next = () => {
    carouselListItem = document.querySelectorAll(".carousel_list_item");
    newIndex = carouselIndex + 1;

    if (carouselIndex < maxAmount - 1) {
      setCarouselIndex(newIndex);
      carouselListItem.forEach((item) => {
        const carouselItemWidth = item.clientWidth;
        const newTransformValue = 0 - carouselItemWidth * newIndex;

        if (item.classList.contains(name)) {
          item.style.transform = `translateX(${newTransformValue}px)`;
        }
      });
    }
  };

  const back = () => {
    carouselListItem = document.querySelectorAll(".carousel_list_item");
    newIndex = carouselIndex - 1;

    if (carouselIndex > 0) {
      setCarouselIndex(newIndex);
      carouselListItem.forEach((item) => {
        const carouselItemWidth = item.clientWidth;
        const newTransformValue =
          0 - carouselItemWidth * carouselIndex + carouselItemWidth;

        if (item.classList.contains(name)) {
          item.style.transform = `translateX(${newTransformValue}px)`;
        }
      });
    }
  };

  return (
    <>
      <ul className="carousel_list">
        {data.map((item, index) => {
          return (
            <li className={`carousel_list_item ${name}`} key={index}>
              <div className="carousel_list_item_style">
                <Link to={`${path}${item?.slug.current}`}>
                  <div className="carousel_image_container">
                    {!item.image ? (
                      <img src="/file-solid.svg" alt="carouselImage" />
                    ) : (
                      <img
                        src={builder.image(item.image).url()}
                        alt="carouselImage"
                      />
                    )}
                  </div>
                  <h2>{item?.name}</h2>
                  <p className="carousel_card_description">
                    {item?.description}
                  </p>
                  <div className="carousel_item_read_more">Read More</div>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="carousel_arrows">
        <button onClick={back}>
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        {/* TODO Future Browse Button? */}
        <button onClick={next}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </>
  );
};

export default Carousel;
