import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../features/user/userSlice";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const error = useSelector((state) => state.user.error);

  const dispatch = useDispatch();

  const onSubmitRegister = (event) => {
    event.preventDefault();

    let payload = {
      firstName,
      lastName,
      email,
      password,
    };

    dispatch(registerUser(payload));
  };

  return (
    <div>
      <h1>Register Page</h1>
      <div>{error ? error.map((e) => <p>{e}</p>) : ""}</div>
      <form onSubmit={onSubmitRegister}>
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
          <button>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
