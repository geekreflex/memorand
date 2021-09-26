import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { toggleConfirmDelModal } from '../features/actions/actionsSlice';
import { deleteNote, deleteNoteAsync } from '../features/notes/notesSlice';

const ConfirmDeleteModal = () => {
  const { confirmDelModal, delNoteId } = useSelector((state) => state.actions);

  const dispatch = useDispatch();

  const closeConfirmDelModal = () => {
    dispatch(toggleConfirmDelModal());
  };

  const handleDeleteNote = () => {
    dispatch(deleteNote(delNoteId));
    dispatch(deleteNoteAsync(delNoteId));
    closeConfirmDelModal();
  };

  return (
    <ConfirmDelModalWrap visible={confirmDelModal}>
      <div className="overlay" onClick={closeConfirmDelModal}></div>
      <ConfirmDelModal>
        <p>Delete note forever?</p>
        <div className="action-btns">
          <button onClick={closeConfirmDelModal}>Cancel</button>
          <button onClick={handleDeleteNote}>Delete</button>
        </div>
      </ConfirmDelModal>
    </ConfirmDelModalWrap>
  );
};

const ConfirmDelModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 99999;
  padding: 0 20px;
`;

const ConfirmDelModal = styled.div`
  position: relative;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  background-color: #202124;
  padding: 20px;
  color: #fff;
  z-index: 9;
  border-radius: 5px;
  border: 1px solid #5f6368;

  @media only screen and (max-width: 600px) {
    min-width: 100%;
  }

  p {
    margin-bottom: 30px;
  }

  .action-btns {
    display: flex;
    justify-content: flex-end;
  }

  .action-btns button {
    background-color: transparent;
    border: none;
    outline: none;
    color: #ddd;
    font-size: 14px;
    font-weight: 600;
    margin-left: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

export default ConfirmDeleteModal;
