import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  font-size: 15px;
  line-height: 1.6;

  ${({ theme }) => theme.media.sm`
      font-size: 16px;
      line-height: 1.5;
  `}
`;

const MarkdownBody = ({ content }) => {
  return (
    <StyledContent
      dangerouslySetInnerHTML={{ __html: content }}
    ></StyledContent>
  );
};

export default MarkdownBody;
