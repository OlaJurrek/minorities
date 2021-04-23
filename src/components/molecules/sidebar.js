import React, { useState, useEffect } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import ActiveMarker from '../atoms/active-marker';
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
  font-family: ${({ theme }) => theme.fonts.plex};
  background-color: ${({ theme }) => theme.colors.lightGrey};
  transition: transform 0.3s ease-in-out;
  transform: translateX(${({ isOpen }) => (isOpen ? '0' : '-100%')});

  ${({ theme }) => theme.media.md`
    position: static;
    transform: none;
    padding-bottom: 1em;
  `}

  nav {
    width: 100%;
    flex-grow: 1;
  }

  .nav-header-wrapper {
    padding: 2.625em 0;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.dark};
  }

  .nav-header {
    font-size: 1.8em;
    font-weight: 200;
    font-variation-settings: 'wght' 200;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  .white-text {
    color: ${({ theme }) => theme.colors.white};
  }
`;

const MenuList = styled.ul`
  position: relative;
  margin: 0;
  font-variation-settings: 'wght' 380;

  li {
    div {
      display: inline-block;
      max-width: 12em;
      margin-left: 2em;
      padding: 0.5em 1em 0.5em 1.8em;
      border-left: solid 1.5px ${({ theme }) => theme.colors.dark};
    }
  }

  li.white-text {
    background-color: ${({ theme }) => theme.colors.dark};

    div {
      border-left: solid 1.5px ${({ theme }) => theme.colors.lightGrey};
    }
  }

  a {
    display: inline-block;
  }
`;

export default function Sidebar({ currentLangKey, homeLink, isOpen }) {
  const [activeElementOffset, setActiveElementOffset] = useState(0);
  const [offset, setOffset] = useState(activeElementOffset);
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

  const getTitle = (type, lang) => {
    const selectedPage = data.allMarkdownRemark.edges.find(
      page =>
        page.node.frontmatter.type === type && page.node.fields.lang === lang
    );
    return selectedPage.node.frontmatter.title;
  };

  const aboutTitle = getTitle('about', currentLangKey);
  const articleTitle = getTitle('article', currentLangKey);

  const handleMouseEnter = e => {
    setOffset(e.target.offsetTop);
  };

  const handleMouseLeave = e => {
    setOffset(activeElementOffset);
  };

  useEffect(() => {
    const activeLink = document.getElementsByClassName('active');

    if (activeLink.length) {
      setActiveElementOffset(activeLink[0].offsetTop);
    }
  }, []);

  return (
    <Aside isOpen={isOpen}>
      <nav>
        <div className="nav-header-wrapper">
          <Link to={homeLink} className="nav-header white-text">
            My - menšiny
          </Link>
        </div>
        <ActiveMarker offset={offset} />
        <MenuList>
          <li className="white-text">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={`/${currentLangPrefix}o-projekcie`}
                activeClassName="active"
              >
                {aboutTitle}
              </Link>
            </div>
          </li>
          <li className="white-text">
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to={`/${currentLangPrefix}erazim-kohak`}
                activeClassName="active"
              >
                {articleTitle}
              </Link>
            </div>
          </li>

          {minoritiesPages.map(
            ({
              node: {
                fields: { slug },
                frontmatter: { title },
              },
            }) => (
              <li key={slug}>
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link to={`/${slug}`} activeClassName="active">
                    {title}
                  </Link>
                </div>
              </li>
            )
          )}
        </MenuList>
      </nav>
      <Facebook />
    </Aside>
  );
}
