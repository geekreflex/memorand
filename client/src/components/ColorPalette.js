import React from "react";

const ColorPalette = () => {
  const getColor = (e) => {
    console.log(e.target.dataset.color);
  };

  return (
    <div className="note-color-palette">
      <span
        data-color="#202124"
        style={{ backgroundColor: "#202124" }}
        onClick={getColor}
      ></span>
      <span
        data-color="green"
        style={{ backgroundColor: "green" }}
        onClick={getColor}
      ></span>
      <span
        data-color="orange"
        style={{ backgroundColor: "orange" }}
        onClick={getColor}
      ></span>
      <span
        data-color="blue"
        style={{ backgroundColor: "blue" }}
        onClick={getColor}
      ></span>
      <span
        data-color="purple"
        style={{ backgroundColor: "purple" }}
        onClick={getColor}
      ></span>
      <span
        data-color="red"
        style={{ backgroundColor: "red" }}
        onClick={getColor}
      ></span>
    </div>
  );
};

export default ColorPalette;
