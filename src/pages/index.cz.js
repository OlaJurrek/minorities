import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import AnimatedTitle from '../components/atoms/animated-title';
import IntroNavigation from '../components/molecules/intro-nav';
import LangsAndStylesProvider from '../components/templates/langs-and-styles-provider';

const Intro = styled.div`
  font-family: 'Plex', sans-serif;
  color: #1a1a1a;
  text-align: center;
`;

const IndexCZ = props => {
  const { defaultLangKey } = props.data.site.siteMetadata.languages;
  const currentLangKey = props.pageContext.langKey;
  const homeLink = `/${currentLangKey}/`.replace(`/${defaultLangKey}/`, '/');
  const minoritiesEdges = props.data.allMarkdownRemark.edges;

  return (
    <LangsAndStylesProvider
      location={props.location}
      currentLang={props.pageContext.language}
    >
      <Intro>
        <AnimatedTitle link={homeLink} title="My - mniejszości" />
        <IntroNavigation
          minorities={minoritiesEdges}
          currentLang={currentLangKey}
        />
      </Intro>
    </LangsAndStylesProvider>
  );
};

export default IndexCZ;

export const query = graphql`
  query IntroCZQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "single-minority" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
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
