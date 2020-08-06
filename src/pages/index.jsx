import React, { Fragment } from "react";
import Layout from "../components/Layout";
import Hero from "./../components/Hero";
import LatestArticles from "./../components/LatestArticles";
import Footer from "./../components/Footer";

const IndexPage = () => (
  <Fragment>
    <Layout>
      <Hero />
      <LatestArticles />
    </Layout>
    <Footer />
  </Fragment>
);

export default IndexPage;
