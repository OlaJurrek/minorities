import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { useLocation } from '@reach/router';
import { useStaticQuery, graphql } from 'gatsby';

const Seo = ({ defaultPathname, description, lang, meta, title, image }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    titleTemplate,
    defaultDescription,
    siteUrl,
    defaultImage,
    i18nConfig,
  } = site.siteMetadata;

  const langCode = i18nConfig.languages.find(
    language => language.pathCode === lang
  ).isoCode;

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
      <link rel="canonical" href={seo.url} />
      <link
        rel="alternate"
        hreflang={i18nConfig.defaultLanguage.isoCode}
        href={siteUrl + defaultPathname}
      />
      {i18nConfig.languages
        .filter(item => item.isoCode !== i18nConfig.defaultLanguage.isoCode)
        .map(item => (
          <link
            key={item.isoCode}
            rel="alternate"
            hreflang={item.isoCode}
            href={`${siteUrl}/${item.pathCode}${defaultPathname}`}
          />
        ))}
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
        i18nConfig {
          defaultLanguage {
            isoCode
            pathCode
          }
          languages {
            isoCode
            pathCode
          }
        }
      }
    }
  }
`;
