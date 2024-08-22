// Page that holds a category of blogs

import React from "react";
import { graphql, Link } from "gatsby";

import SEO from "./../components/SEO";
import BlogsHero from "./../components/BlogsComponents/BlogsHero";
import Layout from "./../components/Layout";
import {
  AllBlogCategories,
  AllBlogsContainer,
} from "./../components/BlogsComponents/styles";
import Footer from "./../components/Footer";
import Newsletter from "./../components/Newsletter";
import Articles from "./../components/Articles";

const BlogCategory = ({ data, location }) => {
  const route = location.pathname.split("/")[2];

  const blogs = {}; // { category: [{}, {}]}
  const nodes = data.categoryData.edges;
  const allCategoriesData = data.allCategories.edges;

  const allCategories = [];

  allCategoriesData.forEach(item => {
    if (!allCategories.includes(item.node.frontmatter.category)) {
      allCategories.push(item.node.frontmatter.category);
    }
  });

  // Holds all each parent blogs component
  let posts = [];

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

  // If blogs is empty
  if (Object.keys(blogs).length === 0 && blogs.constructor === Object) {
    posts = null;
  } else {
    for (const key in blogs) {
      let post = <Articles key={key} blogs={blogs[key]} />;
      posts.push(post);
    }
  }

  // let currentYPosition = 0;
  // const isBrowser = typeof window !== undefined;

  // if (isBrowser) {
  //   currentYPosition = window.scrollY;
  // }

  return (
    <>
      <SEO title="Blog — The Wirescript" />
      <BlogsHero />
      <Layout bgColor="var(--color-white)">
        <AllBlogCategories>
          <Link
            to="/blog"
            state={{ yPos: typeof window !== "undefined" ? window.scrollY : 0 }}
          >
            All
          </Link>
          {allCategories.sort().map((item, index) => (
            <Link
              key={index}
              className={route === item?.toLowerCase() ? "selected" : null}
              to={`/blog/${item?.toLowerCase()}`}
              state={{
                yPos: typeof window !== "undefined" ? window.scrollY : 0,
              }}
            >
              {item}
            </Link>
          ))}
        </AllBlogCategories>
        <AllBlogsContainer role="main">
          {posts.map(post => post)}
        </AllBlogsContainer>
      </Layout>
      <Newsletter />
      <Footer bgColor="var(--color-white)" />
    </>
  );
};

export default BlogCategory;

export const data = graphql`
  query ($category: String!) {
    categoryData: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
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
    allCategories: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            category
          }
        }
      }
    }
  }
`;
