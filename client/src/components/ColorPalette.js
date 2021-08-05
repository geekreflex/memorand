import React from "react";
import { useDispatch } from "react-redux";
import { setColor, setNoteColor } from "../features/note/noteSlice";

const ColorPalette = ({ noteId, color }) => {
  const palette = [
    { color: "#202124" },
    { color: "#5c2b29" },
    { color: "#614919" },
    { color: "#5b2245" },
    { color: "#1e3a57" },
    { color: "#442f19" },
    { color: "#1d504b" },
    { color: "#2d555e" },
  ];

  const dispatch = useDispatch();

  const getColor = (e) => {
    e.stopPropagation();
    let payload = {
      color: e.target.dataset.color,
      noteId,
    };
    dispatch(setColor(payload));
    dispatch(setNoteColor(payload));
  };

  return (
    <div className="note-color-palette">
      {palette.map((plt) => (
        <span
          key={plt.color}
          data-color={plt.color}
          className={plt.color === "#202124" ? "shade" : ""}
          style={{
            backgroundColor: plt.color,
            border: plt.color === color ? "2px solid #888" : "none",
          }}
          onClick={getColor}
        ></span>
      ))}
    </div>
  );
};

export default ColorPalette;
