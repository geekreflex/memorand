import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { usePopper } from 'react-popper';
import { IoEllipsisVertical } from 'react-icons/io5';
import ColorPalette from './ColorPalette';
import OutsideClickHandler from 'react-outside-click-handler';
import { toggleTrashNote, trashNoteAsync } from '../features/notes/notesSlice';

const Options = ({ color, noteId }) => {
  const [visible, setVisibility] = useState(false);
  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const dispatch = useDispatch();

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
            offset: [20, 0],
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
  };

  return (
    <OptionsWrap>
      <OutsideClickHandler onOutsideClick={hide}>
        <OptionIconButton ref={referenceRef} onClick={handleOptionsClick}>
          <IoEllipsisVertical />
        </OptionIconButton>
      </OutsideClickHandler>
      <div
        className="optionsContainer"
        ref={popperRef}
        style={styles.popper}
        {...attributes.popper}
        onClick={handleOptionsClick}
      >
        <OutsideClickHandler onOutsideClick={hide}>
          <OptionList style={styles.offset} visible={visible}>
            <ColorPalette color={color} noteId={noteId} />
            <OptionListItems>
              <li onClick={handleDeleteNote}>Delete note</li>
              <li>Make a copy</li>
              <li>Add label</li>
            </OptionListItems>
          </OptionList>
        </OutsideClickHandler>
      </div>
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

  .optionsContainer {
    z-index: 9999;
  }
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
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 16px;
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
