import React from "react";

export const DropdownContent = ({ item }) => {
  let i = 0;
  return (
    <div className="dropdown_content_item">
      <i className="fa-solid fa-arrow-right"></i>
      <h2 className="dropdown_content_title">{item?.categoryName}</h2>
      {item?.categoryInfo.map((children) => {
        i++;
        return (
          <p className="dropdown_content_text" key={i}>
            {children.children[0].text}
          </p>
        );
      })}
      {/* TODO: NEXT: Add classnames to things for dropdown content */}
    </div>
  );
};
export default DropdownContent;
