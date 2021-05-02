import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { generateOgImage } from "../utils/generateSocialImage";

const SEO = ({ description, meta, title, image, slug, lang, postTitle }) => {
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
        file(relativePath: { eq: "wiresc.png" }) {
          publicURL
        }
      }
    `
  );

  const metaDescription = description || data.site.siteMetadata.description;
  const metaTitle = title || data.site.siteMetadata.title;
  const ogImage = image
    ? generateOgImage({ title: postTitle }) // generate OG image based on title
    : `${data.site.siteMetadata.siteUrl}${data.file.publicURL}`;
  const author = data.site.siteMetadata.author.name;
  const handle = data.site.siteMetadata.social.twitter;
  const url =
    `${data.site.siteMetadata.siteUrl}${slug}` ||
    data.site.siteMetadata.siteUrl;
  const metaKeywords = meta || data.site.siteMetadata.keywords;

  console.log(ogImage);

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
          name: `author`,
          content: author,
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
        {
          name: `google-site-verification`,
          content: `Wdm8xhSZd8BD4R3i-k19kSAlrRgcvx0h4h2W46x56EQ`,
        },
      ].concat(
        metaKeywords && metaKeywords.length > 0
          ? {
              name: `keywords`,
              content: metaKeywords,
            }
          : []
      )}
    />
  );
};

SEO.defaultProps = {
  lang: `en`,
};

export default SEO;
