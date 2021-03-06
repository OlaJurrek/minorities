import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import GeneralLayout from '../components/templates/general-layout';
import SEO from '../components/seo/SEO';
import AnimatedTitle from '../components/atoms/animated-title';
import IntroNavigation from '../components/molecules/intro-nav';

const Intro = styled.div`
  height: 100vh;
  padding-top: 4.5em;
  font-family: 'Plex', sans-serif;
  color: #1a1a1a;
  text-align: center;

  @media screen and (min-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 0;
  }
`;

const IndexCZ = props => {
  const { defaultLanguage } = props.data.site.siteMetadata.i18nConfig;
  const currentLangKey = props.pageContext.langKey;
  const homeLink = `/${currentLangKey}/`.replace(
    `/${defaultLanguage.pathCode}/`,
    '/'
  );
  const minoritiesEdges = props.data.allMarkdownRemark.edges;
  const title = props.data.site.siteMetadata.title;

  return (
    <GeneralLayout location={props.location} currentLang={currentLangKey}>
      <SEO lang={currentLangKey} />
      <Intro>
        <AnimatedTitle link={homeLink} text={title} />
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
        title
        i18nConfig {
          defaultLanguage {
            pathCode
          }
        }
      }
    }
  }
`;
