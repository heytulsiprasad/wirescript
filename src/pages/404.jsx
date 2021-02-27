import React from "react";

import SEO from "./../components/SEO";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { HeroHeader, BigHead, BigBody } from "../components/styles";

const About = () => (
  <>
    <SEO title="Oops, you've a 404 — The Wirescript" />
    <Hero>
      <HeroHeader>
        <BigHead>404</BigHead>
        <BigBody>You've got this, just remember that!</BigBody>
      </HeroHeader>
    </Hero>

    <Footer bgColor="var(--color-white)" />
  </>
);

export default About;
