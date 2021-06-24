import React, { useState, useEffect, useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import StyledAside from './styled-aside';
import MobileNav from '../molecules/mobile-nav';
import ActiveMarker from '../atoms/active-marker';
import { DesktopLogo } from '../atoms/desktop-logo';
import MenuList from './menu-list';
import MenuLinkWrapper from '../atoms/menu-link-wrapper';
import { MenuLink } from '../atoms/menu-link';
import Facebook from '../atoms/facebook';

export default function Sidebar({ currentLangKey, homeLink }) {
  const [activeElementOffset, setActiveElementOffset] = useState(0);
  const [markerOffset, setMarkerOffset] = useState(activeElementOffset);
  const currentLangPrefix = currentLangKey === 'pl' ? '' : currentLangKey + '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const asideRef = useRef(null);

  const data = useStaticQuery(sidebarQuery);

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
    return selectedPage.node.frontmatter.title;
  };

  const aboutTitle = getTitle('about', currentLangKey);
  const articleTitle = getTitle('article', currentLangKey);

  const openMenu = value => {
    setIsMobileMenuOpen(value);
  };

  const handleMouseEnter = e => {
    setMarkerOffset(e.target.offsetTop);
  };

  const handleMouseLeave = e => {
    setMarkerOffset(activeElementOffset);
  };

  const handleKeyDown = e => {
    if (e.keyCode === 9) {
      const focusableItems = asideRef.current.querySelectorAll('a, button');
      const firstFocusableItem = focusableItems[1];
      const lastFocusableItem = focusableItems[focusableItems.length - 1];

      if (!e.shiftKey && e.target === lastFocusableItem) {
        e.preventDefault();
        firstFocusableItem.focus();
      }

      if (e.shiftKey && e.target === firstFocusableItem) {
        e.preventDefault();
        lastFocusableItem.focus();
      }
    }
  };

  useEffect(() => {
    const activeLink = document.getElementsByClassName('active');

    console.log(activeLink[0].textContent, activeLink[0].offsetTop);

    if (activeLink.length) {
      setActiveElementOffset(activeLink[0].offsetTop);
      setMarkerOffset(activeLink[0].offsetTop);
    }
  }, []);

  return (
    <StyledAside
      isOpen={isMobileMenuOpen}
      onKeyDown={handleKeyDown}
      ref={asideRef}
    >
      <MobileNav homeLink={homeLink} onOpenMenu={openMenu} />
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
    </StyledAside>
  );
}

const sidebarQuery = graphql`
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
`;
