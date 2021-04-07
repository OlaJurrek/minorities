import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../templates/layout';
import AboutTemplate from '../templates/about-template';

export default function AboutProject(props) {
  const { markdownRemark } = props.data;
  const {
    frontmatter: { title, dates, datesHeader, patrons },
    html,
  } = markdownRemark;

  console.log(dates);

  return (
    <Layout location={props.location} currentLang={props.pageContext.language}>
      <AboutTemplate
        title={title}
        htmlContent={html}
        datesHeader={datesHeader}
        dates={dates}
        patrons={patrons}
      />
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
