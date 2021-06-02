import React from 'react';
import { graphql } from 'gatsby';
import ContentLayout from '../templates/content-layout';
import Seo from '../providers/seo';
import Headline from '../atoms/headline';
import MarkdownBody from '../atoms/markdown-body';

export default function SingleMinority({
  data: {
    markdownRemark: {
      frontmatter: { title, titleAddition },
      html,
    },
  },
  location,
  pageContext: { language, defaultSlug },
}) {
  const fullTitle = titleAddition ? `${title} ${titleAddition}` : title;
  return (
    <ContentLayout location={location} currentLang={language}>
      <Seo title={fullTitle} lang={language} defaultPathname={defaultSlug} />
      <Headline text={fullTitle} />
      <MarkdownBody content={html} />
    </ContentLayout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        path
        title
        titleAddition
      }
      html
    }
  }
`;
