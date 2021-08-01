import React from "react";
import { useSelector } from "react-redux";

const Error = () => {
  const { error } = useSelector((state) => state.user);

  return (
    <div>
      <h3>{error}</h3>
    </div>
  );
};

export default Error;
