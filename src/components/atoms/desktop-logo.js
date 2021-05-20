import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  padding: 3.5em 0 1.9em;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.dark};

  ${({ theme }) => theme.media.lg`
    padding: 2.625em 0;
  `}
`;

const StyledLogo = styled(Link)`
  font-size: 1.59em;
  font-weight: 200;
  font-variation-settings: 'wght' 200;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.media.lg`
    font-size: 1.8em;
  `}
`;

export const DesktopLogo = ({ link }) => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <StyledLogo to={link}>{t('mainTitle')}</StyledLogo>
    </StyledWrapper>
  );
};
