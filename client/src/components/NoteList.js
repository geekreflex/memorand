import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

const NoteList = () => {
  const { notes } = useSelector((state) => state.notes);

  const filteredNote = notes.reduce(function (filtered, note) {
    if (!note.trashed) {
      filtered.push(note);
    }
    return filtered;
  }, []);

  return (
    <div className="note-list">
      {filteredNote.map((note) => {
        return <Note key={note._id} note={note} />;
      })}
    </div>
  );
};

export default NoteList;
