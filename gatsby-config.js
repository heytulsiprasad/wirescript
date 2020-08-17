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
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.4,
        once: true,
        disable: true,
      },
    },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Wirescript — Blog`,
        short_name: `Wirescript`,
        start_url: `/`,
        background_color: `#060b0e`,
        theme_color: `#f8f8f7`,
        display: `fullscreen`,
        icon: `src/images/ws_favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID || null,
      },
    },
  ],
};
