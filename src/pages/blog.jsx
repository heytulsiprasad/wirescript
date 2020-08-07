import React, { Fragment } from "react";

import BlogsHero from "../components/BlogsComponents/BlogsHero";
import AllBlogs from "../components/BlogsComponents/AllBlogs";
import Footer from "./../components/Footer";

const Blog = () => (
  <Fragment>
    <BlogsHero />
    <AllBlogs />
    <Footer />
  </Fragment>
);

export default Blog;
