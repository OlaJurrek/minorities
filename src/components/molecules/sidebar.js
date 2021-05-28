import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ActiveMarker from '../atoms/active-marker';
import { DesktopLogo } from '../atoms/desktop-logo';
import { MenuLink } from '../atoms/menu-link';
import Facebook from '../atoms/facebook';

const Aside = styled.aside`
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5em;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});
  grid-row: 1 / 3;

  ${({ theme }) => theme.media.md`
    position: static;
    transform: none;
    padding-bottom: 1em;
  `}

  ${({ theme }) => theme.media.lg`
    border-right: 1px solid ${({ theme }) => theme.colors.dark};
  `}

  nav {
    width: 100%;
    flex-grow: 1;
  }
`;

const MenuList = styled.ul`
  position: relative;
  margin: 0;
  font-variation-settings: 'wght' 380;

  li.white-text {
    background-color: ${({ theme }) => theme.colors.dark};
    position: relative;

    ${({ theme }) => theme.media.lg`
    ::before,
    ::after {
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
  }
`;

const MenuLinkWrapper = styled.div`
  margin-left: 2em;
  padding: 0.5em 1em 0.5em 1.8em;
  border-left: solid 1.5px
    ${({ theme, light }) =>
      light ? theme.colors.lightGrey : theme.colors.dark};
`;

export default function Sidebar({ currentLangKey, homeLink, isOpen }) {
  const [activeElementOffset, setActiveElementOffset] = useState(0);
  const [markerOffset, setMarkerOffset] = useState(activeElementOffset);
  const currentLangPrefix = currentLangKey === 'pl' ? '' : currentLangKey + '/';

  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
              lang
            }
            frontmatter {
              title
              titleAddition
              type
            }
          }
        }
      }
    }
  `);

  const minoritiesPages = data.allMarkdownRemark.edges.filter(
    page =>
      page.node.frontmatter.type === 'single-minority' &&
      page.node.fields.lang === currentLangKey
  );

  minoritiesPages.sort((a, b) =>
    a.node.frontmatter.title.localeCompare(b.node.frontmatter.title)
  );

  const getTitle = (type, lang) => {
    const selectedPage = data.allMarkdownRemark.edges.find(
      page =>
        page.node.frontmatter.type === type && page.node.fields.lang === lang
    );
    const titleAddition = selectedPage.node.frontmatter.titleAddition
      ? selectedPage.node.frontmatter.titleAddition
      : '';
    return selectedPage.node.frontmatter.title;
  };

  const aboutTitle = getTitle('about', currentLangKey);
  const articleTitle = getTitle('article', currentLangKey);

  const handleMouseEnter = e => {
    setMarkerOffset(e.target.offsetTop);
  };

  const handleMouseLeave = e => {
    setMarkerOffset(activeElementOffset);
  };

  useEffect(() => {
    const activeLink = document.getElementsByClassName('active');

    setActiveElementOffset(activeLink[0].offsetTop);
    setMarkerOffset(activeLink[0].offsetTop);
  }, []);

  return (
    <Aside isOpen={isOpen}>
      <nav>
        <DesktopLogo link={homeLink} />
        <ActiveMarker offset={markerOffset} />
        <MenuList>
          <li className="white-text">
            <MenuLinkWrapper light="true">
              <MenuLink
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                to={`/${currentLangPrefix}o-projekcie`}
                activeClassName="active"
                light="true"
              >
                {aboutTitle}
              </MenuLink>
            </MenuLinkWrapper>
          </li>
          <li className="white-text">
            <MenuLinkWrapper light="true">
              <MenuLink
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                to={`/${currentLangPrefix}erazim-kohak`}
                activeClassName="active"
                light="true"
              >
                {articleTitle}
              </MenuLink>
            </MenuLinkWrapper>
          </li>

          {minoritiesPages.map(
            ({
              node: {
                fields: { slug },
                frontmatter: { title, titleAddition },
              },
            }) => {
              const addition = titleAddition ? ` ${titleAddition}` : '';
              return (
                <li key={slug}>
                  <MenuLinkWrapper>
                    <MenuLink
                      to={`/${slug}`}
                      activeClassName="active"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {title + addition}
                    </MenuLink>
                  </MenuLinkWrapper>
                </li>
              );
            }
          )}
        </MenuList>
      </nav>
      <Facebook />
    </Aside>
  );
}
