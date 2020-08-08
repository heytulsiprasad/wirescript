import React, { Fragment } from "react";

import AboutHero from "../components/AboutComponents/AboutHero";
import Footer from "./../components/Footer";
import AboutIntro from "./../components/AboutComponents/AboutIntro";

const About = () => (
  <Fragment>
    <AboutHero />
    <AboutIntro />
    <Footer bgColor="var(--color-white)" />
  </Fragment>
);

export default About;
