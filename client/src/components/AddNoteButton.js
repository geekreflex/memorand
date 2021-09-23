import React from 'react';
import { IoAddSharp } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { openNewNoteModal } from '../features/actions/actionsSlice';
import styled from 'styled-components';

const AddNoteButton = () => {
  const dispatch = useDispatch();

  const showAddNewModal = () => {
    dispatch(openNewNoteModal());
  };
  return (
    <AddButton onClick={showAddNewModal}>
      <IoAddSharp />
    </AddButton>
  );
};

const AddButton = styled.button`
  position: fixed;
  right: 50px;
  bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 40px;
  border: 2px solid #5f6368;
  color: #202124;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  background-color: #ddd;
`;

export default AddNoteButton;
