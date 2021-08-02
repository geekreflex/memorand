import React from "react";
import { IoAddSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { openModal } from "../features/action/actionSlice";

const NewNoteButton = () => {
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(openModal());
  };

  return (
    <div className="new-note-btn" onClick={showModal}>
      <IoAddSharp />
    </div>
  );
};

export default NewNoteButton;
