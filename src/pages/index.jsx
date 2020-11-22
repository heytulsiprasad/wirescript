import React from "react";
import { graphql } from "gatsby";

import IndexHero from "../components/IndexComponents/IndexHero";
import LatestArticles from "./../components/IndexComponents/LatestArticles";
import Footer from "./../components/Footer";
import IndexIntro from "../components/IndexComponents/IndexIntro";
import SEO from "../components/SEO";
import Newsletter from "../components/Newsletter";
import Banner from "./../components/Banner";

const Index = ({ data }) => {
  const meta = data.site.siteMetadata;

  return (
    <>
      <SEO title="Home — The Wirescript" />
      <Banner />
      <IndexHero head={meta.title} />
      <IndexIntro />
      <LatestArticles />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Index;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
