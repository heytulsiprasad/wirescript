import React from "react";

import "simplebar/src/simplebar.css";
import SimpleBarReact from "simplebar-react";

import IndexHero from "../components/IndexComponents/IndexHero";
import LatestArticles from "./../components/IndexComponents/LatestArticles";
import Footer from "./../components/Footer";
import IndexIntro from "../components/IndexComponents/IndexIntro";

const Index = () => (
  <SimpleBarReact style={{ maxHeight: "100vh" }}>
    <IndexHero />
    <IndexIntro />
    <LatestArticles />
    <Footer />
  </SimpleBarReact>
);

export default Index;
