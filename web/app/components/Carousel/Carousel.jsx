// react | remix
import { useState, useEffect } from "react";
import { Link } from "remix";
// third-party
import imageUrlBuilder from "@sanity/image-url";
import client from "~/lib/sanity/client";

const builder = imageUrlBuilder(client);

export const Carousel = ({ data, name }) => {
  const maxAmount = data?.length;
  const [carouselIndex, setCarouselIndex] = useState(0);
  let carouselListItem;
  let newIndex;

  const next = () => {
    carouselListItem = document.querySelectorAll(".carousel_list_item");
    newIndex = carouselIndex + 1;

    if (carouselIndex < maxAmount - 3) {
      setCarouselIndex(newIndex);
      carouselListItem.forEach((item, index) => {
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
      carouselListItem.forEach((item, index) => {
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
                <Link to="#">
                  <div className="carousel_image_container">
                    {!item.image ? (
                      <img src="/file-solid.svg" alt="carouselImage" />
                    ) : (
                      <img
                        src={builder.image(item?.image)}
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
        <button onClick={back}>left</button>
        <button onClick={next}>right</button>
      </div>
    </>
  );
};

export default Carousel;
