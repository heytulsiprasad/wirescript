import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import "simplebar/src/simplebar.css";
import SimpleBarReact from "simplebar-react";

import Layout from "./../components/Layout";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Bio from "./../components/Bio";
import SEO from "../components/SEO";
import Newsletter from "../components/Newsletter";

const HeroContainer = styled.div`
  color: var(--color-primary);
  display: flex;
  padding: 4rem 2rem;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 800px) {
    padding: 4rem 1rem;
  }
`;

const HeroTitle = styled.hgroup`
  padding: 2rem 0 4rem 0;
  max-width: 70rem;
  margin: 0 auto;
`;

const BlogTitle = styled.h1`
  color: var(--color-tertiary);
  font-size: clamp(4rem, 6vw, 6.5rem);
  font-weight: 700;
  letter-spacing: -1.5px;
  line-height: 1.25;
`;

const BlogDate = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: -2.5px;
  margin-top: 3rem;
`;

const BlogContent = styled.article`
  /* Container styles */
  & > * + * {
    margin-top: 2rem;
  }

  text-align: left;
  font-kerning: normal;
  padding: 3rem 0 6rem;
  color: #000;

  /* Internal HTML styles */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 3rem;
  }

  h1 {
    font-size: 1.875rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.625rem;
  }

  p {
    line-height: 1.65;
    font-size: 17px;
    font-weight: 400;
    color: #000;
  }

  ol,
  ul {
    list-style-position: inside;
    list-style-type: disc;
  }

  a,
  a:hover,
  a:active,
  a:focus {
    color: inherit;
    font-weight: 500;
    text-decoration: underline;
  }

  a:hover {
    text-decoration: none;
  }

  img {
    border-radius: 10px;
  }

  figcaption {
    text-align: center;
    margin-top: 10px;
    font-style: italic;
  }
`;

function BlogPost({ data, pageContext }) {
  const post = data.markdownRemark;
  const { slug } = pageContext;

  return (
    <SimpleBarReact style={{ maxHeight: "100vh" }}>
      <SEO
        slug={slug}
        title={`${post.frontmatter.title} — The Wirescript`}
        meta={[post.frontmatter.category]}
        description={post.frontmatter.description}
        image={post.frontmatter.banner.publicURL}
      />
      <main>
        <Navbar />
        <Layout as="header" bgColor="#f8f8f7">
          <HeroContainer>
            <HeroTitle>
              <BlogTitle
                data-sal="slide-up"
                data-sal-delay="300"
                data-sal-easing="ease"
                data-sal-duration="1200"
              >
                {post.frontmatter.title}
              </BlogTitle>
              <BlogDate
                data-sal="slide-up"
                data-sal-delay="400"
                data-sal-easing="ease"
                data-sal-duration="1200"
              >
                {post.frontmatter.date}
              </BlogDate>
            </HeroTitle>
          </HeroContainer>
        </Layout>
        <Layout bgColor="var(--color-white)">
          <div style={{ maxWidth: "45rem", margin: "0 auto" }}>
            <BlogContent dangerouslySetInnerHTML={{ __html: post.html }} />
            <Bio />
          </div>
        </Layout>
        <Newsletter />
        <Footer bgColor="var(--color-white)" />
      </main>
    </SimpleBarReact>
  );
}

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        category
        description
        date(formatString: "MMMM DD YYYY")
        title
        banner {
          publicURL
        }
      }
    }
  }
`;
