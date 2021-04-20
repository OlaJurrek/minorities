import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  margin-bottom: 3em;
  font-size: 15px;
  line-height: 1.6;

  @media screen and (min-width: 576px) {
    font-size: 16px;
    line-height: 1.5;
  }
`;

const MarkdownBody = ({ content }) => {
  return (
    <StyledContent
      dangerouslySetInnerHTML={{ __html: content }}
    ></StyledContent>
  );
};

export default MarkdownBody;
