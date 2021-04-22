import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../templates/layout';
import Headline from '../atoms/headline';
import MarkdownBody from '../atoms/markdown-body';

export default function MinorityPage(props) {
  const { markdownRemark } = props.data;
  const { frontmatter, html } = markdownRemark;
  const title = frontmatter.titleAddition
    ? `${frontmatter.title} ${frontmatter.titleAddition}`
    : frontmatter.title;
  return (
    <Layout location={props.location} currentLang={props.pageContext.language}>
      <Headline text={title} />
      <MarkdownBody content={html} />
    </Layout>
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
