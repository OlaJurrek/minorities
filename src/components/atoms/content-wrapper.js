import styled from 'styled-components';

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto ${({ marginBottom }) => (marginBottom ? '3em' : '0')};
  font-size: 15px;
  line-height: 1.6;

  ${({ theme }) => theme.media.sm`
      font-size: 16px;
      line-height: 1.5;
  `}
`;

export default ContentWrapper;
