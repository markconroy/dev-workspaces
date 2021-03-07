const dotenv = require('dotenv')

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Dev Workspaces`,
    description: `View developer workspaces: get inspirations for your own or show off what you have.`,
    author: `@markconroy`,
    siteUrl: `https://dev-workspaces.mark.ie`,
    metaImage: `mark-conroy.jpg`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
      options: {
        name: `workspaces`,
        path: `${__dirname}/src/workspaces`,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CHANGEME`,
        short_name: `CHANGEME`,
        start_url: `/`,
        background_color: `#006699`,
        theme_color: `#006699`,
        display: `minimal-ui`,
        icon: `src/images/markie-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
}
