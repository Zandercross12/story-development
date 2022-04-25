// react | remix
import React, { useState } from "react";

export const Timeline = ({ timeline, events, name }) => {
  console.log(timeline, "\n\n\n", events);

  const next = () => {};

  const back = () => {};

  return (
    <>
      <ul className="timeline_list">
        {timeline?.events.map((item, index) => {
          return (
            <li className={`timeline_list_item ${name}`} key={index}>
              {index === 0 && <i class="fa-solid fa-minus"></i>}
              <button>
                <i class="fa-solid fa-circle-dot"></i>
              </button>
              <i class="fa-solid fa-minus"></i>
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
