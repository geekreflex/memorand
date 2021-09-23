import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { setNoteColor, switchColor } from '../features/notes/notesSlice';
import { IoCheckmarkSharp } from 'react-icons/io5';

const ColorPalette = ({ color, noteId }) => {
  const palette = [
    { color: '#202124' },
    { color: '#5c2b29' },
    { color: '#614919' },
    { color: '#5b2245' },
    { color: '#1e3a57' },
    { color: '#442f19' },
    { color: '#1d504b' },
    { color: '#2d555e' },
    { color: '#256141' },
  ];

  const dispatch = useDispatch();

  const handleColorSwitch = (e) => {
    e.stopPropagation();

    let payload = {
      color: e.target.dataset.color,
      noteId,
    };
    dispatch(switchColor(payload));
    dispatch(setNoteColor(payload));
  };

  return (
    <PaletteWrap>
      {palette.map((plt) => (
        <ColorBox
          key={plt.color}
          data-color={plt.color}
          className={plt.color === '#202124' ? 'bordered' : ''}
          style={{
            backgroundColor: plt.color,
            border:
              plt.color === color ? '2px solid #888' : `2px solid ${plt.color}`,
          }}
          onClick={handleColorSwitch}
        >
          {plt.color === color ? <IoCheckmarkSharp /> : ''}
        </ColorBox>
      ))}
    </PaletteWrap>
  );
};

const PaletteWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;
`;

const ColorBox = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 3px;
  color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    border: 2px solid #ddd !important;
  }
`;

export default ColorPalette;
