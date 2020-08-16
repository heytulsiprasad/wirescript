module.exports = {
  siteMetadata: {
    title: `The Wirescript`,
    description: `A journey to thousand miles from scratch, handwritten by 
                  Tulsi Prasad, a self-taught developer.`,
    keywords: ["gatsby blog"],
    siteUrl: `https://wirescript.heytulsiprasad.vercel.app/`,
    author: {
      name: `Tulsi Prasad`,
    },
    social: {
      twitter: `@heytulsiprasad`,
      github: `heytulsiprasad`,
      dev: `heytulsiprasad`,
      linkedin: `heytulsiprasad`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `assets`,
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
          {
            resolve: `gatsby-remark-prismjs`,
          },
        ],
      },
    },
  ],
};
