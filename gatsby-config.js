/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        enableIdentityWidget: true,
      },
    },
    "gatsby-plugin-netlify-identity-widget",
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `minorities-pages`,
    //     path: `${__dirname}/src/content/minorities/`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: "pl",
        useLangKeyLayout: false,
        prefixDefault: false,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Plex"],
          urls: ["/fonts/fonts.css"],
        },
      },
    },
  ],
};
