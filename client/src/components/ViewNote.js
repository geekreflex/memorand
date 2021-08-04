import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNoteModal } from "../features/action/actionSlice";
import { clearNote, updateNote } from "../features/note/noteSlice";
import NoteAction from "./NoteAction";

const ViewNote = () => {
  const { note, status } = useSelector((state) => state.notes);
  const { noteModal } = useSelector((state) => state.action);

  const [title, setTitle] = useState();
  const [body, setBody] = useState();

  const [editTitle, setEditTitle] = useState();
  const [editBody, setEditBody] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    setTitle(note.title);
    setBody(note.body);
    setEditTitle(note.title);
    setEditBody(note.body);
  }, [note]);

  const hideNote = () => {
    dispatch(toggleNoteModal());
    dispatch(clearNote());
  };

  const saveNoteChanges = () => {
    const payload = {
      data: { title, body },
      noteId: note._id,
    };
    console.log("saved");
    // console.log(body);
    dispatch(updateNote(payload));
  };

  return (
    <div className={noteModal ? "view-note" : "view-note hidden Modal"}>
      <div className="overlay" onClick={hideNote}></div>
      <div
        className="view-note-wrap"
        style={{
          backgroundColor: note.color,
          borderColor: note.color === "#202124" ? "#5f6368" : note.color,
        }}
      >
        <div className="view-note-info">
          <div
            contentEditable="true"
            role="textbox"
            aria-multiline="true"
            dir="ltr"
            tabIndex="0"
            className="vni-title"
            suppressContentEditableWarning="true"
            onBlur={saveNoteChanges}
            onInput={(e) => setTitle(e.currentTarget.textContent)}
          >
            {editTitle}
          </div>
          <div
            contentEditable="true"
            role="textbox"
            aria-multiline="true"
            dir="ltr"
            tabIndex="0"
            className="vni-body"
            suppressContentEditableWarning="true"
            onBlur={saveNoteChanges}
            onInput={(e) => setBody(e.currentTarget.textContent)}
          >
            {editBody}
          </div>
        </div>
        <NoteAction note={note} viewNoteClass="view-note-class" />
      </div>
    </div>
  );
};

export default ViewNote;
