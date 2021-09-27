import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Error = () => {
  const { error } = useSelector((state) => state.user);

  return (
    <ErrorWrap>
      <p>{error}</p>
    </ErrorWrap>
  );
};

const ErrorWrap = styled.div`
  margin-bottom: 10px;
  font-weight: 600;
  color: #888;
`;

export default Error;
