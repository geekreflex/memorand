import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Note from './Note';

const NoteList = ({ match }) => {
  const { notes, searchValue } = useSelector((state) => state.notes);

  const [notesSearch, setNotesSearch] = useState(notes || []);

  useEffect(() => {
    setNotesSearch(notes);
    searchNotes();
  }, [searchValue, notes]);

  const filteredNotes = notesSearch.reduce((filtered, note) => {
    if (!note.trashed) {
      filtered.push(note);
    }
    return filtered;
  }, []);

  const searchNotes = () => {
    const searchResult = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchValue) ||
        note.body.toLowerCase().includes(searchValue)
    );

    setNotesSearch(searchResult);
  };

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
  margin-top: 150px;
`;

export default NoteList;
