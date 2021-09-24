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
      <WebNav>
        <div className="nav-list-wrap">
          <ul>
            <li
              title="Notes"
              onClick={() => handleDisplaySwitch('notes')}
              className={currentDisplay === 'notes' ? 'highlight' : ''}
            >
              <i>
                <IoDocumentTextOutline />
              </i>
              <span>Notes</span>
            </li>

            <li
              title="Trash"
              onClick={() => handleDisplaySwitch('trash')}
              className={currentDisplay === 'trash' ? 'highlight' : ''}
            >
              <i>
                <IoTrashOutline />
              </i>
              <span>Trash</span>
            </li>

            <li
              title="Labels"
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
      </WebNav>
      <MobNav>
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
      </MobNav>
    </SideNavWrap>
  );
};

const SideNavWrap = styled.div``;

const WebNav = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 60px;
  height: 100vh;
  background-color: #202124;
  z-index: 9999;
  overflow: hidden;
  transition: width 0.2s ease-in-out;

  .highlight i {
    background-color: #555;
  }

  .highlight:hover {
    background-color: #555 !important;
  }

  @media only screen and (max-width: 600px) {
    /*  */
    display: none;
  }
  &:hover .highlight {
    background-color: #555;
  }
  &:hover {
    width: 250px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    /* border-right: 1px solid #5f6368; */
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
    cursor: pointer;
    color: #ddd;
    &:hover {
      background-color: #444;
    }
  }

  .nav-list-wrap ul li i {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    border-radius: 50%;
  }

  .nav-list-wrap ul li span {
    position: relative;
    width: 100px;
    font-size: 14px;
  }
`;

const MobNav = styled.div`
  position: fixed;
  display: none;
  background-color: #202124;
  bottom: 0;
  left: 0;
  width: 100%;
  /* height: 60px; */
  z-index: 9999;
  justify-content: center;
  align-items: center;
  /* border-top: 1px solid #ddd; */
  box-shadow: 0 -3px 8px rgba(0, 0, 0, 0.5);

  @media only screen and (max-width: 600px) {
    display: flex;
  }

  .nav-list-wrap {
    width: 100%;
  }

  .nav-list-wrap ul {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .nav-list-wrap ul li {
    display: flex;
    height: 60px;
    width: 60px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1;
    color: #999;
    cursor: pointer;
  }

  .nav-list-wrap ul li i {
    font-size: 20px;
  }

  .nav-list-wrap ul li span {
    font-size: 14px;
    font-weight: 600;
  }

  .highlight {
    background-color: rgba(255, 255, 255, 0.2);
    color: #ddd !important;
  }
`;

export default SideNav;
