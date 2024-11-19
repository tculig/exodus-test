/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env`,
});

module.exports = {
  graphqlTypegen: true,
  siteMetadata: {
    title: `Exodus Frontend Test`,
    description: `Exodus Frontend Test`,
    author: `@tculig`,
    siteUrl: `https://exodus-cms-test.vercel.app/`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-provide-react`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-svgr',
      options: {
        svgrOptions: {
          // SVGR configuration options
          // Use default parameters instead of defaultProps
          replaceAttrValues: null,
          svgProps: {
            role: 'img',
          },
          // Disable use of defaultProps in generated components
          typescript: true, // If you're using TypeScript
          // Set this to 'classic' if you're using React 16.x
          jsxRuntime: 'automatic', // For React 17+
        },
        svgo: false,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `locales`, // This name should match `localeJsonSourceName` in the plugin options
        path: `${__dirname}/locales`, // Path to your translation files
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/exodus-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    // gatsby-plugin-react-i18next configuration
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locales`, // Name given to `gatsby-source-filesystem` for translation files
        languages: [`en`, `es`], // List of supported languages
        defaultLanguage: `en`, // Default language
        siteUrl: `localhost:8000`, // Your site's URL

        i18nextOptions: {
          interpolation: {
            escapeValue: false, // React already does escaping
          },
          keySeparator: false,
          nsSeparator: false,
        },
        exclude: ['/dev-404-page/'], // Exclude the dev-404-page
      },
    },
  ],
}
