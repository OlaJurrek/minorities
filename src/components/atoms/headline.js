import React from 'react';
import styled from 'styled-components';

const StyledHeadline = styled.h1`
  margin: 0 0 1.6em;
  text-align: center;
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
`;

const StyledWord = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
  padding: 0.3em ${({ singleWord }) => (singleWord ? '0.3em' : '0.6em')} 0.15em;
  margin-right: 0.18em;
  margin-bottom: 0.2em;
`;

const Headline = ({ text }) => {
  const headline = text.trim().split(' ');
  const singleWord = headline.length > 1 ? true : false;
  console.log(headline);

  return (
    <StyledHeadline>
      {headline.map((word, index) => (
        <StyledWord singleWord={singleWord} key={word + index}>
          {word}
        </StyledWord>
      ))}
    </StyledHeadline>
  );
};

export default Headline;
