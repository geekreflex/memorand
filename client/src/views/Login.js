import React, { useEffect, useState } from "react";
import { loginUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const { error, isAuthenticated } = useSelector((state) => state.user);

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }
  });

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
      <h1>Login Page</h1>
      <div>{error ? error.map((e) => <p>{e}</p>) : ""}</div>
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
  );
};

export default Login;
