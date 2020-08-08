import React, { Fragment } from "react";

import BlogsHero from "../components/BlogsComponents/BlogsHero";
import AllBlogs from "../components/BlogsComponents/AllBlogs";
import Footer from "./../components/Footer";

const Blog = () => (
  <Fragment>
    <BlogsHero />
    <AllBlogs />
    <Footer bgColor="var(--color-white)" />
  </Fragment>
);

export default Blog;
