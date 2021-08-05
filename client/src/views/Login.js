import React, { useState } from "react";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import Error from "../components/Error";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
    <div>
      <Error />
      <h1>Login Page</h1>
      <div>
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
            <button>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
