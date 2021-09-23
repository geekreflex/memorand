import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { IoChevronBack } from 'react-icons/io5';
import { toggleViewNoteModal } from '../features/actions/actionsSlice';
import {
  updateNote,
  updateNoteAsync,
  clearNote,
} from '../features/notes/notesSlice';
import TimeAgo from './TimeAgo';

const ViewNote = () => {
  const { viewModal } = useSelector((state) => state.actions);
  const { note } = useSelector((state) => state.notes);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');

  useEffect(() => {
    setTitle(note.title);
    setBody(note.body);
    setEditTitle(note.title);
    setEditBody(note.body);
  }, [note]);

  const dispatch = useDispatch();

  const closeViewModal = () => {
    document.body.style.overflow = 'auto';
    dispatch(toggleViewNoteModal());
    dispatch(clearNote());
  };

  const saveNoteChanges = () => {
    const payload = {
      data: { title, body },
      noteId: note._id,
    };

    dispatch(updateNote(payload));
    dispatch(updateNoteAsync(payload));
  };

  return (
    <ViewNoteWrap visible={viewModal}>
      <div className="overlay" onClick={closeViewModal}></div>
      <ViewNoteModal style={{ backgroundColor: note.color }}>
        <div className="action-btn-wrap top">
          <ButtonIconBack onClick={closeViewModal}>
            <IoChevronBack />
          </ButtonIconBack>
        </div>
        <NoteInfo>
          <TimeAgo timestamp={note.updatedAt} />
          <ViewNoteTitle
            contentEditable="true"
            role="textbox"
            aria-multiline="true"
            dir="ltr"
            tabIndex="0"
            suppressContentEditableWarning="true"
            onBlur={saveNoteChanges}
            onInput={(e) => setTitle(e.currentTarget.textContent)}
          >
            {editTitle}
          </ViewNoteTitle>
          <ViewNoteBody
            contentEditable="true"
            role="textbox"
            aria-multiline="true"
            dir="ltr"
            tabIndex="0"
            suppressContentEditableWarning="true"
            onBlur={saveNoteChanges}
            onInput={(e) => setBody(e.currentTarget.innerText)}
          >
            {editBody}
          </ViewNoteBody>
        </NoteInfo>
        <div className="action-btn-wrap bottom"></div>
      </ViewNoteModal>
    </ViewNoteWrap>
  );
};

const ViewNoteWrap = styled.div`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  justify-content: center;
  align-items: center;
  z-index: 999999;
`;

const ViewNoteModal = styled.div`
  position: relative;
  width: 600px;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  border-radius: 5px;
  color: #ddd;
  z-index: 99999;

  @media only screen and (max-width: 600px) {
    position: fixed;
    top: 0;
    left: 0;
    max-width: 100%;
    height: 100%;
    border-radius: 0;
    .action-btn-wrap {
      display: flex !important;
      position: absolute;
      align-items: center;
      padding: 0 20px;
    }
  }

  .action-btn-wrap {
    width: 100%;
    height: 50px;
  }

  .top {
    display: none;
    top: 0;
  }

  .bottom {
    bottom: 0;
    background-color: #333;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const NoteInfo = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 650px;
  padding: 20px;
  @media only screen and (max-width: 600px) {
    position: absolute;
    top: 50px;
    max-height: calc(100% - 100px);
  }
`;

const ViewNoteTitle = styled.div`
  white-space: pre-wrap;
  word-wrap: break-word;
  outline: none;
  margin-bottom: 20px;
  font-size: 25px;
`;

const ViewNoteBody = styled.div`
  white-space: pre-wrap;
  word-wrap: break-word;
  outline: none;
  margin-bottom: 20px;
  line-height: 1.5rem;
  letter-spacing: 0.00625em;
  font-weight: 400;
`;

const ButtonIconBack = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
  color: #ddd;
  cursor: pointer;
`;

export default ViewNote;
