import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { usePopper } from 'react-popper';
import { useSelector, useDispatch } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';
import { logoutUser } from '../features/user/userSlice';

const Account = () => {
  const [visible, setVisibility] = useState(false);
  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: 'left',
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

  const handleAccountClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setVisibility(!visible);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <AccountWrap>
      <OutsideClickHandler onOutsideClick={hide}>
        <Avatar ref={referenceRef} onClick={handleAccountClick}>
          {user.firstName.charAt(0).toUpperCase()}
        </Avatar>
      </OutsideClickHandler>
      <div
        ref={popperRef}
        style={styles.popper}
        {...attributes.popper}
        onClick={handleAccountClick}
      >
        <OutsideClickHandler onOutsideClick={hide}>
          <AccountOptions style={styles.offset} visible={visible}>
            <div className="acct-inner">
              <div className="acct-control acct-info">
                <h4>
                  {user.firstName} {user.lastName}
                </h4>
                <p>{user.email}</p>
              </div>
              <div className="acct-control">
                <button>Edit Account</button>
              </div>
              <div className="acct-control">
                <button onClick={handleLogout}>Sign Out</button>
              </div>
            </div>
          </AccountOptions>
        </OutsideClickHandler>
      </div>
    </AccountWrap>
  );
};

const AccountWrap = styled.div``;
const Avatar = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  font-weight: 600;
  font-size: 20px;
  color: #ddd;
  justify-content: center;
  align-items: center;
  background-color: #333;
  border-radius: 50%;
  cursor: pointer;
`;

const AccountOptions = styled.div`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  width: 300px;
  background-color: #202124;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-top: 20px;
  padding: 10px 0;
  color: #ddd;
  .acct-inner {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .acct-control {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px 20px;
    border-bottom: 1px solid #5f6368;
    :last-child {
      border: none;
    }
  }

  .acct-control button {
    background: transparent;
    border: 1px solid #5f6368;
    outline: none;
    color: #ddd;
    font-size: 15px;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-top: 100px;
    margin-left: 10px;
  }
`;

export default Account;
