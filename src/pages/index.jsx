import React from "react";
import { graphql } from "gatsby";

import "simplebar/src/simplebar.css";
import SimpleBarReact from "simplebar-react";

import IndexHero from "../components/IndexComponents/IndexHero";
import LatestArticles from "./../components/IndexComponents/LatestArticles";
import Footer from "./../components/Footer";
import IndexIntro from "../components/IndexComponents/IndexIntro";
import SEO from "../components/SEO";

const Index = ({ data }) => {
  const meta = data.site.siteMetadata;

  return (
    <SimpleBarReact style={{ maxHeight: "100vh" }}>
      <SEO title="Home — The Wirescript" />
      <IndexHero head={meta.title} />
      <IndexIntro />
      <LatestArticles />
      <Footer />
    </SimpleBarReact>
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
