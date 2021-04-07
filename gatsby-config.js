const languages = require('./src/data/languages');

module.exports = {
  siteMetadata: {
    languages,
  },
  plugins: [
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-transformer-remark`,
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
  ],
};
