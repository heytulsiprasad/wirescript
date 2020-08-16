import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO = ({ description, meta, title, image, slug, lang = `en` }) => {
  const data = useStaticQuery(
    graphql`
      query MyQuery {
        site {
          siteMetadata {
            description
            keywords
            siteUrl
            title
            author {
              name
            }
            social {
              twitter
            }
          }
        }
      }
    `
  );

  const metaDescription = description || data.site.siteMetadata.description;
  const metaTitle = title || data.site.siteMetadata.title;
  const ogImage = `${data.site.siteMetadata.siteUrl}${image}`;
  const author = data.site.siteMetadata.author.name;
  const handle = data.site.siteMetadata.social.twitter;
  const url =
    `${data.site.siteMetadata.siteUrl}${slug}` ||
    data.site.siteMetadata.siteUrl;
  const metaKeywords = meta || data.site.siteMetadata.keywords;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={metaTitle}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:site`,
          content: handle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: ogImage,
        },
      ].concat(metaKeywords)}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
};

export default SEO;
