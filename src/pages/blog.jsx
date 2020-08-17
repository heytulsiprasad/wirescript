import React from "react";

import "simplebar/src/simplebar.css";
import SimpleBarReact from "simplebar-react";

import BlogsHero from "../components/BlogsComponents/BlogsHero";
import AllBlogs from "../components/BlogsComponents/AllBlogs";
import Footer from "./../components/Footer";
import SEO from "./../components/SEO";
import Newsletter from "./../components/Newsletter";

const Blog = () => (
  <SimpleBarReact style={{ maxHeight: "100vh" }}>
    <SEO title="Blog — The Wirescript" />
    <BlogsHero />
    <AllBlogs />
    <Newsletter />
    <Footer bgColor="var(--color-white)" />
  </SimpleBarReact>
);

export default Blog;
