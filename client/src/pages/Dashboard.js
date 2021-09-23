import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import NotesScreen from '../components/NotesScreen';
import TrashScreen from '../components/TrashScreen';
import SideNav from '../components/SideNav';
import AddNoteButton from '../components/AddNoteButton';
import AddNoteModal from '../components/AddNoteModal';
import ViewNote from '../components/ViewNote';

const Dashboard = () => {
  const { currentDisplay } = useSelector((state) => state.actions);

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
      <SideNav />
      <AddNoteButton />
      <AddNoteModal />
      <ViewNote />
      <div style={{ marginLeft: '50px' }}>{renderDisplay()}</div>
    </DashboardWrap>
  );
};

const DashboardWrap = styled.div`
  /* display: flex; */
`;

export default Dashboard;
