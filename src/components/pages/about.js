import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../templates/layout';
import Headline from '../atoms/headline';
import BiggerText from '../atoms/bigger-text';
import MarkdownBody from '../atoms/markdown-body';
import DatesList from '../molecules/dates-list';

export default function AboutProject(props) {
  const { markdownRemark } = props.data;
  const {
    frontmatter: { title, dates, datesHeader, patrons },
    html,
  } = markdownRemark;

  console.log(dates);

  return (
    <Layout location={props.location} currentLang={props.pageContext.language}>
      <Headline text={title} />
      <MarkdownBody content={html} />
      {dates.length > 0 && (
        <>
          <BiggerText as="h2" alignment="center">
            {datesHeader}
          </BiggerText>
          <DatesList dates={dates} />
        </>
      )}
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
