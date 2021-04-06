import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../templates/layout';
import Headline from '../atoms/headline';
import Paragraph from '../atoms/paragraph';

export default function AboutProject(props) {
  const { markdownRemark } = props.data;
  const {
    frontmatter: { title, dates, datesHeader, patrons },
    html,
  } = markdownRemark;

  return (
    <Layout location={props.location} currentLang={props.pageContext.language}>
      <Headline text={title} />
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
      {dates.length > 0 && <Paragraph text={datesHeader} />}
    </Layout>
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
