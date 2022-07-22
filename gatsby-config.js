module.exports = {
  siteMetadata: {
    title: `The Wirescript`,
    description: `A journey of a self-taught developer from scratch, handwritten by 
                  Tulsi Prasad.`,
    keywords:
      "Tulsi Prasad, Wirescript, Beginners Web Development, React Redux, Python programming",
    siteUrl: `https://wirescript.co`,
    author: {
      name: `Tulsi Prasad`,
      about: `${
        new Date().getFullYear() - 2001
      }. Crafting meaningful user experiences. Works with React, Redux and JS. Learning through building useful tools and apps for people. Putting missing content out there. Helping people on the internet, to build a better web.`,
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
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-responsive-iframe`],
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
            options: {
              showLineNumbers: true,
              noInlineHighlight: false,
            },
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
        icon: `src/images/ws_favicon1.png`,
        icon_options: {
          purpose: `maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
    },
  ],
};
