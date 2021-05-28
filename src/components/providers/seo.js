import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ description, lang, meta, title, image }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);
  const langCode = lang === 'cz' ? 'cs' : lang;
  const alternateLangCode = lang === 'cz' ? 'pl' : 'cs';
  const alternatePathname = pathname.startsWith('/cz/')
    ? pathname.slice(3)
    : `/cz${pathname}`;

  const defaultPathname = pathname.startsWith('/cz/')
    ? alternatePathname
    : pathname;

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <Helmet
      title={seo.title}
      titleTemplate={seo.title === defaultTitle ? '' : titleTemplate}
      defer={false}
    >
      <html lang={langCode} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <link rel="canonical" href={siteUrl} />
      <link rel="alternate" hreflang={langCode} href={siteUrl + pathname} />
      <link
        rel="alternate"
        hreflang={alternateLangCode}
        href={siteUrl + alternatePathname}
      />
      <link
        rel="alternate"
        hreflang="x-default"
        href={siteUrl + defaultPathname}
      />
    </Helmet>
  );
};

export default Seo;

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};
Seo.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
      }
    }
  }
`;
