import React from "react";

import BlogsHero from "../components/BlogsComponents/BlogsHero";
import AllBlogs from "../components/BlogsComponents/AllBlogs";
import Footer from "./../components/Footer";
import SEO from "./../components/SEO";
import Newsletter from "./../components/Newsletter";

const Blog = () => (
  <>
    <SEO title="Blog — The Wirescript" />
    <BlogsHero />
    <AllBlogs />
    <Newsletter />
    <Footer bgColor="var(--color-white)" />
  </>
);

export default Blog;
