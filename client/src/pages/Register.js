import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserAsync } from '../features/user/userSlice';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onSubmitRegister = (event) => {
    event.preventDefault();

    let payload = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(registerUserAsync(payload));
  };

  return (
    <div className="form-main">
      <h1>Create account</h1>
      <div className="form-wrap">
        <form onSubmit={onSubmitRegister}>
          <div className="form-name-wrap">
            <div>
              <input
                type="text"
                name="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type="text"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button className="btn primary">Register</button>
          </div>
        </form>

        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
