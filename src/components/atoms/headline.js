import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  text-align: center;
`;

const StyledHeadline = styled.h1`
  display: inline-block;
  margin: 0 0 1.6em;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.plex};
  font-size: 1.6em;
  font-weight: 350;
  font-variation-settings: 'wght' 450;
  line-height: 1.2;

  ${({ theme }) => theme.media.md`
    margin: 0 0 1.3em;
    font-size: 1.8em;
    font-variation-settings: 'wght' 450;
  `}

  ${({ theme }) => theme.media.xl`
    font-size: 2.2em;
    font-variation-settings: 'wght' 550;
  `}

  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.orange};
    outline-offset: 4px;
  }
`;

const StyledWord = styled.span`
  display: inline-block;
  margin: 0.2em 0.09em;
  padding: 0.3em ${({ singleWord }) => (singleWord ? '0.3em' : '0.6em')} 0.15em;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
`;

const Headline = ({ text }) => {
  const headline = text.trim().split(' ');
  const singleWord = headline.length > 1 ? true : false;
  console.log(headline);

  return (
    <StyledWrapper>
      <StyledHeadline id="mainContent" tabIndex="-1">
        {headline.map((word, index) => (
          <StyledWord singleWord={singleWord} key={word + index}>
            {word}
          </StyledWord>
        ))}
      </StyledHeadline>
    </StyledWrapper>
  );
};

export default Headline;
