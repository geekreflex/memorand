import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Note from './Note';

const TrashScreen = () => {
  const { notes } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const trashedNotes = notes.reduce((filtered, note) => {
    if (note.trashed) {
      filtered.push(note);
    }
    return filtered;
  }, []);
  return (
    <div className="container">
      <TrashedNotesWrap>
        {trashedNotes.map((note) => (
          <Note key={note._id} note={note} view="trash" />
        ))}
      </TrashedNotesWrap>
    </div>
  );
};

const TrashedNotesWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
  margin-bottom: 100px;
  margin-top: 100px;
`;

export default TrashScreen;
