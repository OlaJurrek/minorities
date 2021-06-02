import React from 'react';
import { graphql } from 'gatsby';
import ContentLayout from '../templates/content-layout';
import Seo from '../providers/seo';
import Headline from '../atoms/headline';
import Paragraph from '../atoms/paragraph';
import MarkdownBody from '../atoms/markdown-body';
import BiggerText from '../atoms/bigger-text';

export default function Article({
  data: {
    markdownRemark: {
      frontmatter: { title, author, translator },
      html,
    },
  },
  location,
  pageContext: { language, defaultSlug },
}) {
  return (
    <ContentLayout location={location} currentLang={language}>
      <Seo title={title} lang={language} defaultPathname={defaultSlug} />
      <BiggerText text={author} />
      <Headline text={title} />
      <MarkdownBody content={html} />
      {translator && <Paragraph>{translator}</Paragraph>}
    </ContentLayout>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        author
        translator
      }
      html
    }
  }
`;
