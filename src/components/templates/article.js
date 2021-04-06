import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Headline from '../atoms/headline';
import Paragraph from '../atoms/paragraph';

export default function Article({ data }) {
  const { markdownRemark } = data;
  const {
    frontmatter: { title, author, translator },
    html,
  } = markdownRemark;
  return (
    <Layout>
      <Paragraph text={author} />
      <Headline text={title} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <Paragraph text={translator} />
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
