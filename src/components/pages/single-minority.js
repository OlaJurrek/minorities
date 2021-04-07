import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../templates/layout';
import Headline from '../atoms/headline';
// import Paragraph from '../atoms/paragraph';

export default function MinorityPage(props) {
  const { markdownRemark } = props.data;
  const { frontmatter, html } = markdownRemark;
  const title = `${frontmatter.title} ${frontmatter.titleAddition}`;
  return (
    <Layout location={props.location} currentLang={props.pageContext.language}>
      <Headline text={title} />
      {/* <Paragraph text={frontmatter.html} /> */}
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
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
