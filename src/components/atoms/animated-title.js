import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Title = styled.h1`
  position: relative;
  z-index: 3;
  margin: 0 0 0.4em;
  font-size: 2em;
  font-weight: 300;
  font-variation-settings: 'wght' 450, 'wdth' 85;
  text-transform: uppercase;

  ${({ theme }) => theme.media.sm`
    transform: translateY(-50%);
    margin: 0;
  `}
`;

const AnimatedTitle = ({ link }) => {
  const { t } = useTranslation();
  const title = t('mainTitle').toUpperCase().split('');
  const m = title[0];
  const y = title[title.length - 1];
  const middle = title.slice(1, title.length - 1).join('');

  return (
    <Title>
      <Link to={link}>
        <span>{m}</span>
        <span>{middle}</span>
        <span>{y}</span>
      </Link>
    </Title>
  );
};

export default AnimatedTitle;
