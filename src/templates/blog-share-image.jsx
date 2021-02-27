import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Logo from "./../components/svg/logo";

const Wrapper = styled.div`
  width: 1200px;
  height: 630px;
  background: #e3dede;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Square = styled.div`
  width: 95%;
  height: 90%;
  background: #141414;
  color: #f6f6f6;
  border-radius: 15px;
`;

const Layout = styled.div`
  max-width: 85%;
  margin: 0 auto;
  height: 100%;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .footer_container {
    text-align: right;
  }

  .title {
    width: 95%;
    font-size: 48px;
    font-family: var(--font-title);
    /* Breaks long words into next line */
    word-wrap: break-word;
  }

  .author {
    color: #f6f6f6;
    font-size: 22px;
    font-weight: 300;
    margin-top: 2rem;
  }
`;

function BlogShareImage({ data }) {
  return (
    <Wrapper>
      <Square>
        <Layout>
          <div className="box-1"></div>
          <div className="box-2">
            <div className="text_container">
              <h1 className="title">{data.markdownRemark.frontmatter.title}</h1>
              <p className="author">Tulsi Prasad</p>
            </div>
            <div className="footer_container">
              <Logo color="#f6f6f6" height="4rem" width="4rem" />
            </div>
          </div>
        </Layout>
      </Square>
    </Wrapper>
  );
}

export default BlogShareImage;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
    }
  }
`;
