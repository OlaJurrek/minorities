import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import StylesProvider from '../components/providers/styles-provider';

const Background = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  padding: 60px 15px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 293px;
  margin: 0 auto;
  padding: 2.8em 2em;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  background-color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.plex};
  font-variation-settings: 'wdth' 600, 'wght' 450;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  ${({ theme }) => theme.media.md`
    max-width: 650px;
    height: 650px;
    padding: 6em 2em;
  `}
`;

const Lettering = styled.p`
  margin: 0;
  text-align: center;

  ${({ theme }) => theme.media.md`
    font-size: 1.2em;
  `}
`;

const ErrorCode = styled(Lettering)`
  font-family: ${({ theme }) => theme.fonts.plex};
  font-size: 8em;
  font-weight: 100;
  font-variation-settings: 'wght' 100, 'wdth' 85;
  line-height: 1.15;
  letter-spacing: normal;
  text-shadow: 4px 3px 0px #fff, 10px 9px 0px rgba(0, 0, 0, 0.15);

  ${({ theme }) => theme.media.md`
    font-size: 20em;
  `}
`;

const NotFoundPage = ({ location }) => {
  const { t, i18n } = useTranslation();

  let nonDefaultLangCode = location.pathname.split('/')[1];

  if (nonDefaultLangCode.length === 2) {
    nonDefaultLangCode = i18n.languages.find(
      languge => languge === nonDefaultLangCode
    );
  } else {
    nonDefaultLangCode = null;
  }

  useEffect(() => {
    if (nonDefaultLangCode) {
      i18n.changeLanguage(nonDefaultLangCode);
    }
  }, [i18n, nonDefaultLangCode]);

  return (
    <StylesProvider>
      <Background>
        <StyledWrapper>
          <Lettering>{t('error')}</Lettering>
          <ErrorCode>404</ErrorCode>
          <Lettering>{t('pageNotFound')}</Lettering>
        </StyledWrapper>
      </Background>
    </StylesProvider>
  );
};

export default NotFoundPage;
