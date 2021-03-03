import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import Headline from "../atoms/headline";
import Paragraph from "../atoms/paragraph";
import LanguageNav from "../molecules/language-nav";

const MinorityPage = ({ data }) => {
  if (data) {
    const { markdownRemark } = data;
    const { frontmatter } = markdownRemark;
    return (
      <Layout>
        <LanguageNav />
        <Headline text={frontmatter.title} />
        <Paragraph text={frontmatter.content} />
      </Layout>
    );
  }
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      frontmatter {
        content
        path
        title
      }
    }
  }
`;

export default MinorityPage;
