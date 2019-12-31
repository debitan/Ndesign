module.exports = {
  siteMetadata: {
    title: `Ndesign - florist x art director`,
    author: `@ThisisDMatthews`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-stripe`,
      options: {
        async: true,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: '2kb1rq6t',
        dataset: 'production',
        // a token with read permissions is required
        // if you have a private dataset
        token: process.env.MY_SANITY_TOKEN,
        watchMode: false,
        overlayDrafts: false,
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `plusorminus.ndesign`,
      },
    },
  ]
}
