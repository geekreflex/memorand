import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Note from './Note';

const NoteList = ({ match }) => {
  const { notes } = useSelector((state) => state.notes);

  const filteredNotes = notes.reduce((filtered, note) => {
    if (!note.trashed) {
      filtered.push(note);
    }
    return filtered;
  }, []);

  return (
    <div className="container">
      <NoteListWrap>
        {filteredNotes.map((note) => (
          <Note key={note._id} note={note} />
        ))}
      </NoteListWrap>
    </div>
  );
};

const NoteListWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 15px;
  margin-bottom: 100px;
  margin-top: 100px;
`;

export default NoteList;
