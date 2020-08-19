import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import Layout from "./../Layout";
import Articles from "../Articles";

const AllBlogsContainer = styled.div`
  padding: 2rem 0;
`;

const BlogsCategory = styled.div`
  padding: 1rem 0;
`;

const BlogsParent = styled.div`
  padding: 2rem 0;
`;

const CategoryTitle = styled.h2`
  font-size: clamp(5rem, 6vw, 8rem);
  font-weight: 500;
  letter-spacing: -3px;
  color: var(--color-tertiary);
  padding: 1rem 0;
`;

function AllBlogs() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: ASC }) {
        edges {
          node {
            frontmatter {
              date(formatString: "DD MMMM YYYY")
              title
              description
              category
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const blogs = {};
  const nodes = data.allMarkdownRemark.edges;

  // console.log(nodes);

  nodes.forEach(item => {
    if (blogs[item.node.frontmatter.category] === undefined) {
      const blogData = item.node.frontmatter; // object
      blogData["slug"] = item.node.fields.slug;

      blogs[item.node.frontmatter.category] = [blogData];
    } else {
      const blogData = item.node.frontmatter; // object
      blogData["slug"] = item.node.fields.slug;

      blogs[item.node.frontmatter.category].push(blogData);
    }
  });

  // Holds all each parent blogs component
  let posts = [];

  // If blogs is empty
  if (Object.keys(blogs).length === 0 && blogs.constructor === Object) {
    posts = null;
  } else {
    for (const key in blogs) {
      let post = (
        <BlogsParent key={key}>
          <CategoryTitle>{key}</CategoryTitle>
          <Articles blogs={blogs[key]} />
        </BlogsParent>
      );

      posts.push(post);
    }
  }

  return (
    <Layout bgColor="var(--color-white)">
      <AllBlogsContainer role="main">
        <BlogsCategory>{posts.map(post => post)}</BlogsCategory>
      </AllBlogsContainer>
    </Layout>
  );
}

export default AllBlogs;
