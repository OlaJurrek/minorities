import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../templates/layout';
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
  pageContext: { language },
}) {
  return (
    <Layout location={location} currentLang={language}>
      <BiggerText text={author} />
      <Headline text={title} />
      <MarkdownBody content={html} />
      {translator && <Paragraph>{translator}</Paragraph>}
    </Layout>
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
