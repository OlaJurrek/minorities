import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 3.5em 0 1.9em;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.dark};

  ${({ theme }) => theme.media.lg`
    position: relative;
    padding: 2.625em 0;

    ::before, ::after {
    position: absolute;
    content: '';
    top: 0;
    height: 100%;
  }

    ::before {
      width: 25px;
      right: -26px;
      background-color: ${({ theme }) => theme.colors.dark};
    }

    ::after {
      width: 1px;
      right: -1px;
      background-color: ${({ theme }) => theme.colors.lightGrey};
    }
  `}
`;

const StyledLogo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.plex};
  font-size: 1.8em;
  font-weight: 200;
  font-variation-settings: 'wght' 200;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  :focus {
    outline: 2px solid ${({ theme }) => theme.colors.lightOrange};
    outline-offset: 10px;
  }

  ${({ theme }) => theme.media.lg`
    font-size: 1.8em;
  `}
`;

export const DesktopLogo = ({ link }) => {
  const {
    site: {
      siteMetadata: { title },
    },
  } = useStaticQuery(graphql`
    query DesktopLogoQuery {
      site(siteMetadata: {}) {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledWrapper>
      <StyledLogo to={link}>{title}</StyledLogo>
    </StyledWrapper>
  );
};
