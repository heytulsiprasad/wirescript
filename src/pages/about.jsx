import React from "react";

import AboutHero from "../components/AboutComponents/AboutHero";
import Footer from "./../components/Footer";
import AboutIntro from "./../components/AboutComponents/AboutIntro";
import SEO from "./../components/SEO";

const About = () => (
  <>
    <SEO title="About — The Wirescript" />
    <AboutHero />
    <AboutIntro />
    <Footer bgColor="var(--color-white)" />
  </>
);

export default About;
