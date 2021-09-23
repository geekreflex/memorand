import React from 'react';
import styled from 'styled-components';
import { parseISO, formatDistanceToNow } from 'date-fns';

const TimeAgo = ({ timestamp }) => {
  let timeAgo = '';
  if (timestamp) {
    const date = parseISO(`${timestamp}`);
    const timePeriod = formatDistanceToNow(date);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <TimeStamp>
      <span>Edited:</span>
      <i>{timeAgo}</i>
    </TimeStamp>
  );
};

const TimeStamp = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 14px;
  font-weight: 400;
  span {
    margin-right: 10px;
    font-weight: 900;
  }
`;

export default TimeAgo;
