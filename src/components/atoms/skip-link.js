import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledLink = styled.a`
  position: absolute;
  background: ${({ theme }) => theme.colors.white};
  left: 0.8em;
  padding: 0.25em 0.6em;
  font-family: ${({ theme }) => theme.fonts.plex};
  font-weight: 600;
  letter-spacing: 0.5px;
  transform: translateY(-100%);
  transition: transform 0.4s;
  z-index: 6;

  :focus {
    transform: translateY(${({ intro }) => (intro ? '0.5em' : '3.2em')});
  }

  ${({ theme }) => theme.media.md`
    left: 3em;
    transition: transform 0.3s;
    background: ${({ theme, intro }) =>
      intro ? theme.colors.white : theme.colors.lightGrey};

    :focus {
        transform: translateY(3px);
    }
  `}

  ${({ theme }) => theme.media.lg`
    left: 5.5em;
  `}
`;

const SkipLink = props => {
  const { t } = useTranslation();

  return (
    <StyledLink {...props} href="#mainContent">
      {t('skipToContent')}
    </StyledLink>
  );
};

export default SkipLink;
