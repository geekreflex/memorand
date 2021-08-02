import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

const NoteList = () => {
  const { notes } = useSelector((state) => state.notes);

  return (
    <div className="note-list">
      {notes?.map((note) => {
        return <Note key={note._id} note={note} />;
      })}
    </div>
  );
};

export default NoteList;
