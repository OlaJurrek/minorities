import React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  margin-bottom: 0.45em;
`;

const DatesList = ({ dates }) => {
  return (
    <ul>
      {dates.map((date, index) => (
        <ListItem key={index}>{date}</ListItem>
      ))}
    </ul>
  );
};

export default DatesList;
