import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isAuth } = useSelector((state) => state.user);

  return (
    <div>
      <h1>Home</h1>
      {isAuth ? (
        <Link to="dashboard">Dashboard</Link>
      ) : (
        <div>
          <Link to="login">Login</Link>
          <Link to="register">Register</Link>
        </div>
      )}
    </div>
  );
};

export default Home;
