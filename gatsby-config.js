module.exports = {
  siteMetadata: {
    title: `Maintenance Guides`,
    description: `Website containing guide articles about maintaining the www.hubcap.eu website.`,
    author: `Kristiyan Doykov`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/src/pages`,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `HUBCAP Maintenance Guides`,
        short_name: `HUBCAP Guides`,
        start_url: `/`,
        background_color: `#FBA200`,
        theme_color: `#FBA200`,
        display: `minimal-ui`,
        icon: `src/images/logo_colour_transparent.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
