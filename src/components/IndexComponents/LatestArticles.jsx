import React from "react";
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from "gatsby";

import Layout from "../Layout";
import Articles from "../Articles";

const Main = styled.main`
  width: 100%;
  padding: 0 0 4rem;
  color: var(--color-primary);
`;

const BoldText = styled.h2`
  text-align: right;
  /* font-size: clamp(6rem, 8vw, 10rem); */
  font-size: clamp(4rem, 7vw, 8rem);
  letter-spacing: -2px;
  font-weight: 600;
  line-height: 1.05;
  padding: 0 0 3rem;

  @media (max-width: 1150px) {
    text-align: left;
  }

  span {
    display: block;

    &:first-of-type {
      color: var(--color-tertiary);
    }

    @media (max-width: 1300px) {
      display: inline-block;

      &:first-of-type {
        margin-right: 1rem;
      }
    }
  }
`;

const Refer = styled(Link)`
  display: block;
  font-size: 1.3rem;
  margin-top: 2rem;
  font-weight: 700;
  width: fit-content;
  color: var(--color-tertiary);

  &,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
`;

function LatestArticles() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 4
      ) {
        edges {
          node {
            frontmatter {
              date(formatString: "DD MMMM YYYY")
              title
              description
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const blogs = [];

  data.allMarkdownRemark.edges.forEach(item => {
    const blogData = item.node.frontmatter;
    blogData["slug"] = item.node.fields.slug;
    blogs.push(blogData);
  });

  return (
    <Layout bgColor="var(--color-white)">
      <Main>
        <BoldText>
          <span
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Latest
          </span>
          <span
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Articles
          </span>
        </BoldText>
        <Articles blogs={blogs} />
        <Refer to="/blog">
          <span>More</span> Articles
        </Refer>
      </Main>
    </Layout>
  );
}

export default LatestArticles;
