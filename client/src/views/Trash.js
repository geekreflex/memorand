import React from "react";
import { useSelector } from "react-redux";
import Note from "../components/Note";

const Trash = () => {
  const { notes } = useSelector((state) => state.notes);

  const trashedNotes = notes.reduce(function (filtered, note) {
    if (note.trashed) {
      filtered.push(note);
    }
    return filtered;
  }, []);

  return (
    <div className="trash-main">
      {trashedNotes.length ? (
        <div className="trash-notes note-list">
          {trashedNotes.map((note) => (
            <Note key={note._id} note={note} trash={true} />
          ))}
        </div>
      ) : (
        <div className="trash-wrap">
          <div className="trash-wrap-img">
            <img alt="Trash" src="icons8-trash-512.png" />
          </div>
          <p>Okay nothing to see here! Go ahead and delete something</p>
        </div>
      )}
    </div>
  );
};

export default Trash;
