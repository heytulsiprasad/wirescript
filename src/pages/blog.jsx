import React from "react";
import { graphql, Link } from "gatsby";

import BlogsHero from "../components/BlogsComponents/BlogsHero";
import Footer from "./../components/Footer";
import SEO from "./../components/SEO";
import Newsletter from "./../components/Newsletter";
import {
  AllBlogsContainer,
  AllBlogCategories,
} from "./../components/BlogsComponents/styles";
import Articles from "./../components/Articles";
import Layout from "./../components/Layout";

const Blog = ({ data, location }) => {
  const blogs = {}; // { category: [{}, {}]}
  const nodes = data.allMarkdownRemark.edges;

  // Arrange blogs by category
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

  // Arrange blogs by date
  const postsByDate = [];
  nodes.forEach(item => {
    const { slug } = item.node.fields;
    const { date, title, description } = item.node.frontmatter;
    postsByDate.push({ slug, date, title, description });
  });

  return (
    <>
      <SEO title="Blog — The Wirescript" />
      <BlogsHero />
      <Layout bgColor="var(--color-white)">
        <AllBlogCategories>
          <Link
            to="#"
            className="selected"
            state={{ yPos: typeof window !== "undefined" ? window.scrollY : 0 }}
          >
            All
          </Link>
          {Object.keys(blogs)
            .sort()
            .map((item, index) => (
              <Link
                key={index}
                to={`/blog/${item.toLowerCase()}`}
                state={{
                  yPos: typeof window !== "undefined" ? window.scrollY : 0,
                }}
              >
                {item}
              </Link>
            ))}
        </AllBlogCategories>
        <AllBlogsContainer role="main">
          <Articles blogs={postsByDate} />
        </AllBlogsContainer>
      </Layout>
      <Newsletter />
      <Footer bgColor="var(--color-white)" />
    </>
  );
};

export default Blog;

export const data = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
`;
