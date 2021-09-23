import React, { useEffect } from 'react';
import NoteList from './NoteList';
import { useDispatch } from 'react-redux';
import { getNotesAsync } from '../features/notes/notesSlice';
import ViewNote from './ViewNote';

const NotesScreen = ({ match }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNotesAsync());
  }, []);

  return (
    <div>
      <NoteList />
      <ViewNote />
    </div>
  );
};

export default NotesScreen;
