import React, { useState } from 'react';
import { loginUser } from '../features/user/userSlice';
import { useDispatch } from 'react-redux';
import Error from '../components/Error';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmitLogin = (event) => {
    event.preventDefault();

    let payload = {
      email,
      password,
    };

    dispatch(loginUser(payload));
  };

  return (
    <div className="form-main">
      <Error />
      <h1>Welcome back!</h1>
      <div className="form-wrap">
        <form onSubmit={onSubmitLogin}>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button className="btn primary">Login</button>
          </div>
        </form>
        <p>
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
