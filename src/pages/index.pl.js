import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import AnimatedTitle from '../components/atoms/animated-title';
import IntroNavigation from '../components/molecules/intro-nav';

const Intro = styled.div`
  height: 100vh;
  font-family: 'Plex', sans-serif;
  color: #1a1a1a;
  text-align: center;

  @media screen and (min-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const IndexPL = props => {
  const { defaultLangKey } = props.data.site.siteMetadata.languages;
  const currentLangKey = props.pageContext.langKey;
  const homeLink = `/${currentLangKey}/`.replace(`/${defaultLangKey}/`, '/');
  const minoritiesEdges = props.data.allMarkdownRemark.edges;

  return (
    <Intro>
      <AnimatedTitle link={homeLink} title="My - mniejszości" />
      <IntroNavigation
        minorities={minoritiesEdges}
        currentLang={currentLangKey}
      />
    </Intro>
  );
};

export default IndexPL;

export const query = graphql`
  query IntroPLQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "single-minority" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            titleAddition
            path
          }
          fields {
            slug
            lang
          }
        }
      }
    }
    site {
      siteMetadata {
        languages {
          defaultLangKey
        }
      }
    }
  }
`;
