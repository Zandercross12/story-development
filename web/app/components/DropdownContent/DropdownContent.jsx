import React, { useState } from "react";

export const DropdownContent = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  let i = 0;
  return (
    <button onClick={toggle} className="dropdown_button">
      <div className="dropdown_content_item">
        <h2>
          {isOpen ? (
            <i className="fa-solid fa-arrow-down"></i>
          ) : (
            <i className="fa-solid fa-arrow-right"></i>
          )}{" "}
          {item?.categoryName}
        </h2>

        {item?.categoryInfo.map((children) => {
          i++;
          return (
            <p
              className={`dropdown_content_text ${
                !isOpen && "dropdown_content_text_hidden"
              }`}
              key={i}
            >
              {children.children[0].text}
            </p>
          );
        })}
      </div>
    </button>
  );
};
export default DropdownContent;
