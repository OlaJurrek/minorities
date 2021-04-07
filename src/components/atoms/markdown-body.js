import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  margin-bottom: 3em;
`;

const MarkdownBody = ({ content }) => {
  return (
    <StyledContent
      dangerouslySetInnerHTML={{ __html: content }}
    ></StyledContent>
  );
};

export default MarkdownBody;
