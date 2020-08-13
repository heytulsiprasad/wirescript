import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import "simplebar/src/simplebar.css";
import SimpleBarReact from "simplebar-react";

import Layout from "./../components/Layout";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

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

  max-width: 45rem;
  margin: 0 auto;
  text-align: left;
  font-kerning: normal;
  padding: 3rem 0 8rem;
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
`;

function BlogPost({ data }) {
  const post = data.markdownRemark;

  return (
    <SimpleBarReact style={{ maxHeight: "100vh" }}>
      <main>
        <Navbar />
        <Layout as="header" bgColor="#f8f8f7">
          <HeroContainer>
            <HeroTitle>
              <BlogTitle>{post.frontmatter.title}</BlogTitle>
              <BlogDate>{post.frontmatter.date}</BlogDate>
            </HeroTitle>
          </HeroContainer>
        </Layout>
        <Layout bgColor="var(--color-white)">
          <BlogContent dangerouslySetInnerHTML={{ __html: post.html }} />
        </Layout>
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
      }
    }
  }
`;
