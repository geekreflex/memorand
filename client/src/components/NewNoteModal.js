import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../features/action/actionSlice";
import { createNote } from "../features/note/noteSlice";

const NewNoteModal = () => {
  const { modal } = useSelector((state) => state.action);
  const { status } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const removeModal = () => {
    dispatch(closeModal());
  };

  const resizeInputField = (e) => {
    let textarea = e.target;
    let heightLimit = 200;

    textarea.style.height = "";
    textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
  };

  const submitNote = () => {
    const note = {
      title,
      body,
    };

    dispatch(createNote(note));
    setTitle("");
    setBody("");
    if (status === "idle") {
      removeModal();
    }
  };

  return (
    <div className={modal ? "new-note-modal" : "new-note-modal hidden-modal"}>
      <div className="overlay" onClick={removeModal}></div>
      <div className="new-note-wrap">
        <div className="new-note-hd">
          <h4>Flex Your New Note</h4>
        </div>
        <div className="form-wrap">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-control">
              <input
                type="text"
                placeholder="What's the title?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-control">
              <textarea
                placeholder="Start typing here"
                value={body}
                onInput={resizeInputField}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
          </form>
        </div>
        <div className="modal-btn">
          <button className="btn secondary" onClick={removeModal}>
            Cancel
          </button>
          <button className="btn primary" onClick={submitNote}>
            Add Note
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNoteModal;
