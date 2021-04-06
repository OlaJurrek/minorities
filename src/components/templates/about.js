import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import Headline from '../atoms/headline';
import Paragraph from '../atoms/paragraph';

const AboutProject = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  console.log(frontmatter);
  return (
    <Layout>
      <Headline text={frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      <Paragraph text={frontmatter.datesHeader} />
    </Layout>
  );
};

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

export default AboutProject;
