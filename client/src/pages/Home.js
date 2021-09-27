import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const { isAuth } = useSelector((state) => state.user);

  return (
    <HomeWrap>
      <h1> Hello, Welcome to Memorand.</h1>
      {isAuth ? (
        <Link to="dashboard" className="btn">
          Dashboard
        </Link>
      ) : (
        <div className="auth-wrap">
          <Link to="login" className="btn">
            Login
          </Link>
          <Link to="register" className="btn">
            Register
          </Link>
        </div>
      )}
    </HomeWrap>
  );
};

const HomeWrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .auth-wrap a:last-child {
    margin-left: 30px;
  }

  h1 {
    margin-bottom: 30px;
    color: #ddd;
    text-align: center;
  }

  .btn {
    background-color: #335659;
    text-decoration: none;
    padding: 10px 15px;
    color: #fff;
    border-radius: 5px;
  }
`;

export default Home;
