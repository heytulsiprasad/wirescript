import React from "react";

import "simplebar/src/simplebar.css";
import SimpleBarReact from "simplebar-react";

import AboutHero from "../components/AboutComponents/AboutHero";
import Footer from "./../components/Footer";
import AboutIntro from "./../components/AboutComponents/AboutIntro";
import SEO from "./../components/SEO";

const About = () => (
  <SimpleBarReact style={{ maxHeight: "100vh" }}>
    <SEO title="About — The Wirescript" />
    <AboutHero />
    <AboutIntro />
    <Footer bgColor="var(--color-white)" />
  </SimpleBarReact>
);

export default About;
