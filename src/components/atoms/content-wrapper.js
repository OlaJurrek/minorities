import styled, { css } from 'styled-components';

const flexStyles = `
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto ${({ marginBottom }) => (marginBottom ? '1em' : '0')};
  font-size: 15px;
  line-height: 1.6;

  ${({ theme }) => theme.media.sm`
      font-size: 16px;
      line-height: 1.5;
      margin: 0 auto ${({ marginBottom }) => (marginBottom ? '3em' : '0')};
  `}

  ${({ flex }) =>
    flex
      ? css`
          ${flexStyles}
        `
      : ''}
`;

export default ContentWrapper;
