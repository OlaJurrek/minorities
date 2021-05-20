import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GeneralLayout from '../components/templates/general-layout';
import AnimatedTitle from '../components/atoms/animated-title';
import IntroNavigation from '../components/molecules/intro-nav';

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
    <GeneralLayout location={props.location} currentLang={currentLangKey}>
      <Intro>
        <AnimatedTitle link={homeLink} title="My - mniejszości" />
        <IntroNavigation
          minorities={minoritiesEdges}
          currentLang={currentLangKey}
        />
      </Intro>
    </GeneralLayout>
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
