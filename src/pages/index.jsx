import React from "react";
import Layout from "../components/Layout";
import Hero from "./../components/Hero";
import LatestArticles from "./../components/LatestArticles";

const IndexPage = () => (
  <Layout>
    <Hero />
    <LatestArticles />
  </Layout>
);

export default IndexPage;
