const i18nConfig = require('./src/i18n/i18n-config');

module.exports = {
  siteMetadata: {
    title: 'My - menšiny',
    alternativeTitle: 'My - mniejszości',
    titleTemplate: '%s · My - menšiny',
    shortTitle: 'MY',
    description:
      'Projekt przybliżający mniejszości zamieszkujące Polskę i Czechy',
    image: '/images/logo/png',
    siteUrl: 'https://my-mensiny.netlify.app',
    i18nConfig,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/uploads/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: 'static',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 950,
              tracedSVG: true,
              backgroundColor: '#EEEDED',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    'gatsby-plugin-netlify-identity-widget',
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'pl',
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: ['Plex'],
          urls: ['/fonts/fonts.css'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
  ],
};
