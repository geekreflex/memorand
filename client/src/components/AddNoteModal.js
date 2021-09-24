import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { closeNewNoteModal } from '../features/actions/actionsSlice';
import { createNoteAsync } from '../features/notes/notesSlice';
import ColorPalette from './ColorPalette';

const AddNoteModal = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const { addModal, initialColor } = useSelector((state) => state.actions);

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
      color: initialColor,
    };

    dispatch(createNoteAsync(note));
    closeAddNewModal();
    setTitle('');
    setBody('');
  };

  const closeAddNewModal = () => {
    dispatch(closeNewNoteModal());
    setTitle('');
    setBody('');
  };

  return (
    <ModalWrap visible={addModal}>
      <div className="overlay" onClick={closeAddNewModal}></div>
      <Modal
        bgcolor={initialColor}
        style={{
          border:
            initialColor === '#202124'
              ? '1px solid #5f6368'
              : `1px solid ${initialColor}`,
        }}
      >
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
              autoFocus={true}
            />

            <ModalAction>
              <ColorPalette color={initialColor} noteId="#1" />
              <div className="btn-action">
                <button onClick={closeAddNewModal}>Cancel</button>
                <button onClick={handleNoteSubmit}>Add Note</button>
              </div>
            </ModalAction>
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

  @media only screen and (max-width: 600px) {
    .button-wrap {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    }
  }
`;

const Modal = styled.div`
  position: relative;
  min-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ bgcolor }) => bgcolor};
  padding: 20px;
  color: #ddd;
  z-index: 99;
  border-radius: 5px;
  border: 1px solid #5f6368;

  .form-group {
    background-color: transparent;
    width: 100%;
    border: none;
    outline: none;
  }

  @media only screen and (max-width: 600px) {
    min-width: 100%;
    height: 100%;
    position: fixed;
    border-radius: 0;
    border: none;
  }
`;

const Input = styled.input`
  margin-bottom: 20px;
  font-size: 25px;
  font-weight: 600;
  color: #ddd;
  ::placeholder {
    color: #ddd;
  }
`;

const TextArea = styled.textarea`
  display: flex;
  height: 100px;
  max-height: 400px;
  resize: vertical;
  font-size: 14px;
  font-weight: 600;
  color: #ddd;
  ::placeholder {
    color: #ddd;
  }
  @media only screen and (max-width: 600px) {
    height: 100%;
    resize: none;
    max-height: auto;
  }
`;

const ModalAction = styled.div`
  .btn-action {
    display: flex;
    justify-content: flex-end;
  }
  .btn-action button {
    outline: none;
    border: none;
    background: transparent;
    padding: 10px 20px;
    color: #ddd;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 5px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
  @media only screen and (max-width: 600px) {
    position: absolute;
    bottom: 0;
  }
`;

export default AddNoteModal;
