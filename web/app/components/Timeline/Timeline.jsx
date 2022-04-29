// react | remix
import React, { useState } from "react";
import { Link } from "remix";

const Dates = ({ preview }) => {
  if (preview?.startDate && preview?.endDate) {
    return (
      <>
        {preview?.startDate} - {preview?.endDate}
      </>
    );
  } else {
    return <>{preview?.startDate || preview?.endDate}</>;
  }
};

export const Timeline = ({ timeline, events, name }) => {
  const [preview, setPreview] = useState(undefined);

  const next = () => {};

  const back = () => {};

  return (
    <>
      <div className="timeline_preview_container">
        <div className="timeline_preview">
          {preview ? (
            <>
              <div class="timeline_image_container">
                <img
                  src="https://dummyimage.com/700x200.jpg"
                  alt="placeholderImage"
                />
              </div>
              <h1>{preview?.name}</h1>
              <h5>
                <Dates preview={preview} />
              </h5>
              <br />
              <p>{preview?.description}</p>
              <br />
              <Link
                className="timeline_learn_more"
                to={`/story/${preview?.slug.current}`}
              >
                Learn More
              </Link>
            </>
          ) : (
            <>
              <h1>Nothing Selected</h1>
              <p>Select a timeline point down below</p>
              <br />
              <i className="fa-solid fa-circle-dot"></i>
              <p>^</p>
            </>
          )}
        </div>
      </div>
      <ul className="timeline_list">
        {timeline?.events.map((item, index) => {
          const itemEvent = events.find((event) => event?._id === item?._ref);
          // TODO: Add images to sanity events
          return (
            <li className={`timeline_list_item ${name}`} key={index}>
              {index === 0 && <i className="fa-solid fa-minus"></i>}
              <button
                onClick={(target) => {
                  const selectedButtons = document.getElementsByClassName(
                    "timeline_button_selected"
                  );
                  Array.from(selectedButtons).forEach((button) => {
                    button.classList.remove("timeline_button_selected");
                  });
                  target.target.classList.add("timeline_button_selected");
                  setPreview(itemEvent);
                }}
                title={itemEvent?.name}
              >
                <i className="fa-solid fa-circle-dot"></i>
              </button>
              <i className="fa-solid fa-minus"></i>
            </li>
          );
        })}
      </ul>
      <div className="timeline_arrows">
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

export default Timeline;
