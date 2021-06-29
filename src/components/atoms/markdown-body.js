import React from 'react';
import styled from 'styled-components';

const StyledContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  font-size: 15px;
  line-height: 1.6;

  ${({ theme }) => theme.media.sm`
      font-size: 16px;
      line-height: 1.5;
  `}

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.plex};
    font-weight: 450;
    font-variation-settings: 'wght' 450;
  }

  a:not(.gatsby-resp-image-link) {
    position: relative;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: 500;
    transition: 0.35s;

    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }

    &::after {
      position: absolute;
      content: '';
      background: ${({ theme }) => theme.colors.orange};
      opacity: 0.25;
      left: 15%;
      bottom: 0;
      width: 90%;
      height: 22%;
      z-index: -1;
      transition: 0.35s cubic-bezier(0.25, 0.1, 0, 2.05);
    }
    &:hover:after {
      left: -2px;
      bottom: 0;
      width: calc(100% + 4px);
      height: 100%;
      opacity: 1;
    }
  }

  strong {
    font-weight: 500;
  }

  ul li {
    position: relative;
    padding-left: 20px;

    & + li {
      margin-top: 0.5em;
    }

    &:before {
      position: absolute;
      content: '';
      top: 0.5em;
      left: 0;
      width: 0.5em;
      height: 0.5em;
      border-radius: 50%;
      border: 2px solid ${({ theme }) => theme.colors.orange};
    }
  }

  ol {
    counter-reset: index;
  }

  ol li {
    counter-increment: index;

    & + li {
      padding-top: 0.5em;
    }
  }

  ol li:before {
    content: counter(index);
    display: inline-block;
    min-width: 22px;
    text-align: center;
    margin-right: 10px;
    padding: 1px 6px;
    color: ${({ theme }) => theme.colors.orange};
    font-weight: bold;
    font-size: 0.65em;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.orange};
  }

  blockquote {
    position: relative;
    display: block;
    margin: 3.5em 0 1em;
    padding: 2.8em 1.5em 1em;
    font-size: 0.9em;
    border-top: 1px solid ${({ theme }) => theme.colors.orange};

    &:before {
      position: absolute;
      display: inline-block;
      text-align: center;
      top: -19px;
      left: 50%;
      height: 35px;
      width: 35px;
      transform: translateX(-50%);
      padding-top: 11px;
      content: '\\201D';
      font-size: 3.5em;
      line-height: 1;
      color: ${({ theme }) => theme.colors.white};
      font-family: ${({ theme }) => theme.fonts.plex};
      background-color: ${({ theme }) => theme.colors.orange};
      border-radius: 50%;
    }

    &:after {
      position: absolute;
      content: '';
      right: 0;
      bottom: 10px;
      width: 60%;
      height: 1px;
      background-color: ${({ theme }) => theme.colors.orange};
    }

    cite {
      display: block;
      text-align: right;
    }
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
