import React from 'react';
import styled from 'styled-components';
import Options from './Options';
import { useDispatch, useSelector } from 'react-redux';
import { storeNote } from '../features/notes/notesSlice';
import { toggleViewNoteModal } from '../features/actions/actionsSlice';
import TrashOptions from '../components/TrashOptions';

const Note = ({ note, match, view }) => {
  const truncateNote = () => {
    let shortNote = note.body.slice(0, 100);
    return shortNote.slice(0, shortNote.lastIndexOf(' '));
  };

  const dispatch = useDispatch();
  const { viewModal } = useSelector((state) => state.actions);

  const showNote = (e) => {
    document.body.style.overflow = 'hidden';
    e.stopPropagation();

    console.log(match);

    dispatch(storeNote(note._id));
    dispatch(toggleViewNoteModal());
  };

  return (
    <NoteWrap
      style={{
        backgroundColor: note.color,
        border:
          note.color === '#202124'
            ? '1px solid #5f6368'
            : `1px solid ${note.color}`,
      }}
      onClick={(e) => showNote(e)}
    >
      <NoteContent>
        <h4>{note.title}</h4>
        <p>{truncateNote()}</p>
      </NoteContent>
      {view === 'trash' ? (
        <TrashOptions noteId={note._id} />
      ) : (
        <Options color={note.color} noteId={note._id} />
      )}
    </NoteWrap>
  );
};

const NoteWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  height: 180px;
  cursor: default;
  &:hover {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

const NoteContent = styled.div`
  overflow: hidden;
  padding: 10px;

  h4 {
    color: #ddd;
    margin-bottom: 10px;
  }

  p {
    color: #ddd;
    font-size: 14px;
  }
`;

export default Note;
