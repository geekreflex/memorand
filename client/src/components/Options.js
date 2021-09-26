import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { usePopper } from 'react-popper';
import { IoEllipsisVertical } from 'react-icons/io5';
import ColorPalette from './ColorPalette';
import OutsideClickHandler from 'react-outside-click-handler';
import {
  clearNote,
  createNoteAsync,
  toggleTrashNote,
  trashNoteAsync,
} from '../features/notes/notesSlice';
import { closeViewNoteModal } from '../features/actions/actionsSlice';

const Options = ({ color, noteId }) => {
  const [visible, setVisibility] = useState(false);
  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);

  const { styles, attributes, update } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: 'bottom',
      modifiers: [
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [0, 10],
          },
        },
      ],
    }
  );

  const hide = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setVisibility(false);
  };

  const handleOptionsClick = async (event) => {
    event.preventDefault();
    event.stopPropagation();
    setVisibility(!visible);
    await update();
  };

  const handleDeleteNote = () => {
    console.log(noteId);
    dispatch(toggleTrashNote(noteId));
    dispatch(trashNoteAsync(noteId));
    dispatch(closeViewNoteModal());
    dispatch(clearNote());
  };

  const handleDuplicateNote = () => {
    const existingNote = notes.find((note) => note._id === noteId);
    if (existingNote) {
      const payload = {
        title: existingNote.title,
        body: existingNote.body,
        color: existingNote.color,
      };

      dispatch(createNoteAsync(payload));
    }
  };

  return (
    <OptionsWrap>
      <OutsideClickHandler onOutsideClick={hide}>
        <OptionIconButton ref={referenceRef} onClick={handleOptionsClick}>
          <IoEllipsisVertical />
        </OptionIconButton>
      </OutsideClickHandler>
      <OptionsContainer
        className="optionsContainer"
        ref={popperRef}
        style={styles.popper}
        {...attributes.popper}
        onClick={handleOptionsClick}
      >
        <OutsideClickHandler onOutsideClick={hide}>
          <OptionList style={styles.offset} visible={visible}>
            <ColorPalette
              color={color}
              noteId={noteId}
              handleOptionsClick={handleOptionsClick}
            />
            <OptionListItems>
              <li onClick={handleDeleteNote}>Delete note</li>
              <li onClick={handleDuplicateNote}>Make a copy</li>
              <li>Add label</li>
            </OptionListItems>
          </OptionList>
        </OutsideClickHandler>
      </OptionsContainer>
    </OptionsWrap>
  );
};

const OptionsWrap = styled.div`
  position: absolute;
  justify-items: flex-end;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  bottom: 0;
`;

const OptionsContainer = styled.div`
  z-index: 9999;
  margin-left: -50px;
`;

const OptionList = styled.div`
  width: 150px;
  background-color: #202124;
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

const OptionIconButton = styled.div`
  background: transparent;
  color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
  }
  @media only screen and (max-width: 600px) {
    margin-right: 20px;
  }
`;

const OptionListItems = styled.ul`
  margin: 10px 0;
  li {
    color: #ddd;
    padding: 5px 10px;
    cursor: pointer;
    font-size: 14px;
  }
  li:hover {
    background-color: #333;
  }
`;

export default Options;
