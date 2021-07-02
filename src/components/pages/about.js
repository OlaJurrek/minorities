import React from 'react';
import { graphql } from 'gatsby';
import ContentLayout from '../templates/content-layout';
import SEO from '../seo/SEO';
import Headline from '../atoms/headline';
import BiggerText from '../atoms/bigger-text';
import MarkdownBody from '../molecules/markdown-body';
import ContentWrapper from '../atoms/content-wrapper';
import DatesList from '../molecules/dates-list';
import Patrons from '../atoms/patrons';

export default function About({
  data: {
    markdownRemark: {
      frontmatter: { title, dates, datesHeader, patron1 },
      html,
    },
  },
  location,
  pageContext: { language, defaultSlug },
}) {
  return (
    <ContentLayout location={location} currentLang={language}>
      <SEO
        title={title}
        lang={language}
        defaultPathname={defaultSlug}
        ogType="article"
      />
      <Headline text={title} />
      <MarkdownBody content={html} />
      {dates.length > 0 && (
        <ContentWrapper marginBottom>
          <BiggerText as="h2" alignment="center" text={datesHeader} />
          <DatesList dates={dates} />
        </ContentWrapper>
      )}
      {patron1 && (
        <ContentWrapper marginBottom>
          <Patrons patron1={patron1} />
        </ContentWrapper>
      )}
    </ContentLayout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        dates
        datesHeader
        patron1 {
          childImageSharp {
            fluid(maxWidth: 200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }
  }
`;
