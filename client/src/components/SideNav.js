import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  IoDocumentTextOutline,
  IoTrashOutline,
  IoPricetagsOutline,
} from 'react-icons/io5';
import { switchDisplay } from '../features/actions/actionsSlice';

const SideNav = () => {
  const dispatch = useDispatch();
  const { currentDisplay } = useSelector((state) => state.actions);

  const handleDisplaySwitch = (display) => {
    dispatch(switchDisplay(display));
  };

  return (
    <SideNavWrap>
      <div className="nav-list-wrap">
        <ul>
          <li
            onClick={() => handleDisplaySwitch('notes')}
            className={currentDisplay === 'notes' ? 'highlight' : ''}
          >
            <i>
              <IoDocumentTextOutline />
            </i>
            <span>Notes</span>
          </li>

          <li
            onClick={() => handleDisplaySwitch('trash')}
            className={currentDisplay === 'trash' ? 'highlight' : ''}
          >
            <i>
              <IoTrashOutline />
            </i>
            <span>Trash</span>
          </li>

          <li
            onClick={() => handleDisplaySwitch('labels')}
            className={currentDisplay === 'labels' ? 'highlight' : ''}
          >
            <i>
              <IoPricetagsOutline />
            </i>
            <span>Labels</span>
          </li>
        </ul>
      </div>
    </SideNavWrap>
  );
};

const SideNavWrap = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 60px;
  height: 100vh;
  background-color: #202124;
  z-index: 9999;
  overflow: hidden;
  transition: width 0.2s ease-in-out;
  &:hover {
    width: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    border-right: 1px solid #5f6368;
  }
  .nav-list-wrap {
    display: flex;
    margin-top: 100px;
  }

  .nav-list-wrap ul {
    display: flex;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .nav-list-wrap ul li {
    display: flex;
    align-items: center;
    padding: 10px 0;
    cursor: pointer;
    color: #ddd;
    &:hover {
      background-color: #333;
    }
  }

  .nav-list-wrap ul li i {
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
  }

  .nav-list-wrap ul li span {
    position: relative;
    width: 100px;
    font-size: 14px;
  }
`;

export default SideNav;
