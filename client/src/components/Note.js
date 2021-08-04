import React from "react";
import { FaThumbtack } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { storeNote } from "../features/note/noteSlice";
import { toggleNoteModal } from "../features/action/actionSlice";
import NoteAction from "./NoteAction";

const Note = ({ note }) => {
  let shortNote = note.body.slice(0, 70);
  let newShortNote = shortNote.slice(0, shortNote.lastIndexOf(" "));

  const dispatch = useDispatch();

  const showNote = (e) => {
    e.stopPropagation();
    dispatch(storeNote(note._id));
    dispatch(toggleNoteModal());
  };

  return (
    <div
      className={note.color === "#202124" ? "note bordered" : "note"}
      style={{
        backgroundColor: `${note.color}`,
        border: `1px solid ${note.color}`,
      }}
      onClick={(e) => showNote(e)}
    >
      <div className="note-pin">
        <FaThumbtack />
      </div>
      <div className="note-info">
        <h4>{note.title}</h4>
        <p>{newShortNote}</p>
      </div>
      <NoteAction note={note} className="note-hidden" />
    </div>
  );
};

export default Note;
