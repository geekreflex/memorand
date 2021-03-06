import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import NotesScreen from '../components/NotesScreen';
import TrashScreen from '../components/TrashScreen';
import SideNav from '../components/SideNav';
import AddNoteButton from '../components/AddNoteButton';
import AddNoteModal from '../components/AddNoteModal';
import ViewNote from '../components/ViewNote';
import Header from '../components/Header';

const Dashboard = () => {
  const { currentDisplay, optionsOverlay } = useSelector(
    (state) => state.actions
  );

  const renderDisplay = () => {
    switch (currentDisplay) {
      case 'notes':
        return <NotesScreen />;
      case 'trash':
        return <TrashScreen />;
    }
  };

  return (
    <DashboardWrap>
      <Header />
      <SideNav />
      {currentDisplay === 'notes' ? (
        <>
          <AddNoteButton />
          <AddNoteModal />
        </>
      ) : (
        ''
      )}
      <ViewNote />
      <DisplayWrap>{renderDisplay()}</DisplayWrap>
    </DashboardWrap>
  );
};

const DashboardWrap = styled.div`
  /* display: flex; */
`;
const DisplayWrap = styled.div`
  margin-left: 60px;
  @media only screen and (max-width: 600px) {
    margin-left: 0 !important;
  }
`;

export default Dashboard;
