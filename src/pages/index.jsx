import React, { Fragment } from "react";
import IndexHero from "../components/IndexComponents/IndexHero";
import LatestArticles from "./../components/IndexComponents/LatestArticles";
import Footer from "./../components/Footer";
import IndexIntro from "../components/IndexComponents/IndexIntro";

const Index = () => (
  <Fragment>
    <IndexHero />
    <IndexIntro />
    <LatestArticles />
    <Footer />
  </Fragment>
);

export default Index;
