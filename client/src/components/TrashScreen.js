import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import Note from './Note';
import { IoTrashOutline } from 'react-icons/io5';
import ConfrimDeleteModal from './ConfirmDeleteModal';

const TrashScreen = () => {
  const { notes } = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const trashedNotes = notes.reduce((filtered, note) => {
    if (note.trashed) {
      filtered.push(note);
    }
    return filtered;
  }, []);

  if (!trashedNotes.length) {
    return (
      <EmptyTrash>
        <i>
          <IoTrashOutline />
        </i>
        <p>No notes in Trash</p>
      </EmptyTrash>
    );
  }

  return (
    <div className="container">
      <ConfrimDeleteModal />
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

const EmptyTrash = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ddd;
  i {
    font-size: 150px;
    color: #555;
  }
  p {
    font-size: 18px;
    font-weight: 600;
  }
`;

export default TrashScreen;
