import React from "react";
import { useSelector } from "react-redux";

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
      {trashedNotes ? (
        <div className="trash-notes">
          {trashedNotes.map((note) => (
            <div>{note.title}</div>
          ))}
        </div>
      ) : (
        <div className="trash-wrap">
          <div className="trash-wrap-img">
            <img src="icons8-trash-512.png" />
          </div>
          <p>Okay nothing to see here! Go ahead and delete something</p>
        </div>
      )}
    </div>
  );
};

export default Trash;
