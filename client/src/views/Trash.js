import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Note from "../components/Note/Note";
import { useDispatch } from "react-redux";
import { getNotes } from "../features/note/noteSlice";

const Trash = () => {
  const { notes, status } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const trashedNotes = notes.reduce(function (filtered, note) {
    if (note.trashed) {
      filtered.push(note);
    }
    return filtered;
  }, []);

  if (status === "loading") {
    return <div></div>;
  }

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
