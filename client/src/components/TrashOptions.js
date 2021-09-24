import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { IoTrashOutline, IoArrowUndoOutline } from 'react-icons/io5';
import { toggleTrashNote, trashNoteAsync } from '../features/notes/notesSlice';
import {
  toggleConfirmDelModal,
  setDelNoteId,
} from '../features/actions/actionsSlice';

const TrashOptions = ({ noteId }) => {
  const dispatch = useDispatch();

  const handleRestoreNote = (e) => {
    //
    e.stopPropagation();
    dispatch(toggleTrashNote(noteId));
    dispatch(trashNoteAsync(noteId));
  };

  const handleConfirmNoteDelete = (e) => {
    //
    e.stopPropagation();
    dispatch(setDelNoteId(noteId));
    dispatch(toggleConfirmDelModal());
  };

  return (
    <TrashOptionsWrap>
      <div onClick={handleRestoreNote} title="Restore Note">
        <IoArrowUndoOutline />
      </div>
      <div onClick={handleConfirmNoteDelete} title="Delete Note">
        <IoTrashOutline />
      </div>
    </TrashOptionsWrap>
  );
};

const TrashOptionsWrap = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  padding: 10px;
  bottom: 0;

  div {
    font-size: 18px;
    color: #ddd;
    cursor: pointer;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`;

export default TrashOptions;
