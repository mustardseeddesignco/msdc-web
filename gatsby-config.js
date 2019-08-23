const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: config.manifestName,
    //     short_name: config.manifestShortName,
    //     start_url: config.pathPrefix || config.manifestStartUrl,
    //     background_color: config.manifestBackgroundColor,
    //     theme_color: config.manifestThemeColor,
    //     display: config.manifestDisplay,
    //     icon: config.manifestIcon, // This path is relative to the root of the site.
    //   },
    // },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
        },
    },
  ],
};
