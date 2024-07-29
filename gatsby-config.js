module.exports = {
  siteMetadata: {
    title: `Gatsby Starter MoonClerk`,
    description: `A Gatsby starter for creating SaaS landing pages using MoonClerk to accept payments.`,
    author: `@moonclerk`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src",
        aliases: {
          "@assets": "./assets",
          "@atoms": "./components/atoms",
          "@molecules": "./components/molecules",
          "@organisms": "./components/organisms",
          "@utils": "./utils",
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets`,
      },
    },
  ],
}
