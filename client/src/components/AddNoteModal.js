import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closeNewNoteModal } from '../features/actions/actionsSlice';
import { createNoteAsync } from '../features/notes/notesSlice';

const AddNoteModal = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { addModal } = useSelector((state) => state.actions);

  const dispatch = useDispatch();

  const resizeTextArea = (e) => {
    let textarea = e.target;
    let heightLimit = 400;

    textarea.style.height = '';
    textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + 'px';
  };

  const handleNoteSubmit = () => {
    const note = {
      title,
      body,
    };

    dispatch(createNoteAsync(note));
    setTitle('');
    setBody('');
  };

  const closeAddNewModal = () => {
    dispatch(closeNewNoteModal());
  };

  return (
    <ModalWrap visible={addModal}>
      <div className="overlay" onClick={closeAddNewModal}></div>
      <Modal>
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <Input
              className="form-group"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <TextArea
              className="form-group"
              placeholder="Take a note..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              onInput={resizeTextArea}
              autoFocus
            />

            <div className="button-wrap">
              <button onClick={handleNoteSubmit}>Add Note</button>
            </div>
          </form>
        </div>
      </Modal>
    </ModalWrap>
  );
};

const ModalWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 99999;

  .button-wrap {
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px;
  }
`;

const Modal = styled.div`
  position: relative;
  min-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: #202124;
  padding: 20px;
  color: #fff;
  z-index: 9;
  border-radius: 5px;
  border: 1px solid #5f6368;

  .form-group {
    background-color: transparent;
    width: 100%;
    border: none;
    outline: none;
    color: #ddd;
  }
  @media only screen and (max-width: 600px) {
    min-width: 100%;
    height: 100%;
    position: fixed;
  }
`;

const Input = styled.input`
  margin-bottom: 20px;
  font-size: 25px;
`;

const TextArea = styled.textarea`
  display: flex;
  height: 100px;
  max-height: 400px;
  resize: vertical;
  @media only screen and (max-width: 600px) {
    height: 100%;
    resize: none;
    max-height: auto;
  }
`;

export default AddNoteModal;
