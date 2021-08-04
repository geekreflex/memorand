import React from "react";
import ColorPalette from "./ColorPalette";
import { IoColorPaletteOutline, IoEllipsisVertical } from "react-icons/io5";

const NoteAction = ({ note, viewNoteClass }) => {
  return (
    <div className={`note-action ${viewNoteClass}`}>
      <div className="color-palette" onClick={(e) => e.stopPropagation()}>
        <IoColorPaletteOutline />
        <ColorPalette noteId={note._id} color={note.color} />
      </div>
      <div className="color-more">
        <IoEllipsisVertical />
        <div className="color-more-menu">
          <span>Delete</span>
          <span>Favorite</span>
        </div>
      </div>
    </div>
  );
};

export default NoteAction;
