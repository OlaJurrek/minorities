import React from 'react';
import { graphql } from 'gatsby';
import ContentLayout from '../templates/content-layout';
import SEO from '../seo/SEO';
import Headline from '../atoms/headline';
import Paragraph from '../atoms/paragraph';
import MarkdownBody from '../molecules/markdown-body';
import ContentWrapper from '../atoms/content-wrapper';
import BiggerText from '../atoms/bigger-text';

export default function Article({
  data: {
    markdownRemark: {
      frontmatter: { title, author, translator },
      html,
    },
  },
  location,
  pageContext: { language, defaultSlug },
}) {
  return (
    <ContentLayout location={location} currentLang={language}>
      <SEO
        title={title}
        lang={language}
        defaultPathname={defaultSlug}
        ogType="article"
      />
      <ContentWrapper>
        <BiggerText text={author} />
        <Headline text={title} />
      </ContentWrapper>
      <MarkdownBody content={html} />
      {translator && (
        <ContentWrapper>
          <Paragraph>{translator}</Paragraph>
        </ContentWrapper>
      )}
    </ContentLayout>
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
