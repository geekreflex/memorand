import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NoteList from "../components/NoteList";
import { getNotes } from "../features/note/noteSlice";
import NewNoteButton from "../components/NewNoteButton";
import NewNoteModal from "../components/NewNoteModal";
import ViewNote from "../components/ViewNote";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { nav } = useSelector((state) => state.action);

  useEffect(() => {
    dispatch(getNotes());
  });

  return (
    <div className="dashboard-main">
      <NoteList />
      <NewNoteButton />
      <NewNoteModal />
      <ViewNote />
    </div>
  );
};

export default Dashboard;
