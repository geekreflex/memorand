import React, { useEffect } from "react";
import { IoColorPaletteOutline, IoEllipsisVertical } from "react-icons/io5";
import ColorPalette from "./ColorPalette";

const Note = ({ note }) => {
  let shortNote = note.body.slice(0, 40);
  let newShortNote = shortNote.slice(0, shortNote.lastIndexOf(" "));

  return (
    <div className="note">
      <div className="note-info">
        <h4>{note.title}</h4>
        <p>{newShortNote}</p>
      </div>
      <div className="note-action">
        <div className="color-palette">
          <IoColorPaletteOutline />
          <ColorPalette />
        </div>
        <div>
          <IoEllipsisVertical />
        </div>
      </div>
    </div>
  );
};

export default Note;
