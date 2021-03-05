import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import Headline from "../atoms/headline";
import Paragraph from "../atoms/paragraph";
import LanguageNav from "../molecules/language-nav";

const MinorityPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const title = `${frontmatter.title} ${frontmatter.titleAddition}`;
  return (
    <Layout>
      <LanguageNav />
      <Headline text={title} />
      {/* <Paragraph text={frontmatter.html} /> */}
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        path
        title
        titleAddition
      }
      html
    }
  }
`;

export default MinorityPage;
