import React from 'react';
import { graphql } from 'gatsby';
import ContentLayout from '../templates/content-layout';
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
  pageContext: { language },
}) {
  const headline = titleAddition ? `${title} ${titleAddition}` : title;
  return (
    <ContentLayout location={location} currentLang={language}>
      <Headline text={headline} />
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
