import React from 'react';
import { graphql } from 'gatsby';
import ContentLayout from '../templates/content-layout';
import SEO from '../seo/SEO';
import Headline from '../atoms/headline';
import BiggerText from '../atoms/bigger-text';
import MarkdownBody from '../atoms/markdown-body';
import DatesList from '../molecules/dates-list';

export default function About({
  data: {
    markdownRemark: {
      frontmatter: { title, dates, datesHeader, patrons },
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
        <>
          <BiggerText as="h2" alignment="center" text={datesHeader} />
          <DatesList dates={dates} />
        </>
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
        patrons
      }
      html
    }
  }
`;
