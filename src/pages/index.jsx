import React, { Fragment } from "react";
import IndexHero from "../components/HeroComponents/IndexHero";
import LatestArticles from "./../components/LatestArticles";
import Footer from "./../components/Footer";
import IntroSection from "../components/Intro";

const Index = () => (
  <Fragment>
    <IndexHero />
    <IntroSection />
    <LatestArticles />
    <Footer />
  </Fragment>
);

export default Index;
