import React from "react";

import "simplebar/src/simplebar.css";
import SimpleBarReact from "simplebar-react";

import BlogsHero from "../components/BlogsComponents/BlogsHero";
import AllBlogs from "../components/BlogsComponents/AllBlogs";
import Footer from "./../components/Footer";

const Blog = () => (
  <SimpleBarReact style={{ maxHeight: "100vh" }}>
    <BlogsHero />
    <AllBlogs />
    <Footer bgColor="var(--color-white)" />
  </SimpleBarReact>
);

export default Blog;
