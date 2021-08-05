import React from "react";
import ColorPalette from "./ColorPalette";
import { toggleTrashNote, trashNoteAsync } from "../features/note/noteSlice";
import { useDispatch } from "react-redux";
import { IoColorPaletteOutline, IoEllipsisVertical } from "react-icons/io5";
import { toggleNoteModal } from "../features/action/actionSlice";

const NoteAction = ({ note, viewNoteClass }) => {
  const dispatch = useDispatch();

  const addNoteToTrash = (e) => {
    e.stopPropagation();
    dispatch(toggleTrashNote(note._id));
    dispatch(trashNoteAsync(note._id));
  };

  return (
    <div className={`note-action ${viewNoteClass}`}>
      <div className="color-palette" onClick={(e) => e.stopPropagation()}>
        <IoColorPaletteOutline />
        <ColorPalette noteId={note._id} color={note.color} />
      </div>
      <div className="color-more">
        <IoEllipsisVertical />
        <div className="color-more-menu">
          <span onClick={addNoteToTrash}>Delete</span>
        </div>
      </div>
    </div>
  );
};

export default NoteAction;
