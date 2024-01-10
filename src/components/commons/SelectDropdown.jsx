/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const SelectDropdown = ({ selected, setSelected, items, className, style }) => {
  return (
    <div className="select_dropdown">
      <div className={`${className}`} style={style}>
        {selected ? selected : "Select one"}
      </div>
      <div className="select_dropdown_content">
        {items?.map((item, index) => (
          <div
            onClick={() => setSelected(item)}
            key={index}
            className="select_item"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectDropdown;
