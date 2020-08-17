import React from "react";

import "simplebar/src/simplebar.css";
import SimpleBarReact from "simplebar-react";

import SEO from "./../components/SEO";

import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { HeroHeader, BigHead, BigBody } from "../components/styles";

const About = () => (
  <SimpleBarReact style={{ maxHeight: "100vh" }}>
    <SEO title="Oops, you've a 404 — The Wirescript" />

    <Hero>
      <HeroHeader>
        <BigHead
          data-sal="slide-up"
          data-sal-delay="300"
          data-sal-easing="ease"
          data-sal-duration="1000"
        >
          404
        </BigHead>
        <BigBody
          data-sal="slide-up"
          data-sal-delay="400"
          data-sal-easing="ease"
          data-sal-duration="1200"
        >
          You've got this, just remember that!
        </BigBody>
      </HeroHeader>
    </Hero>

    <Footer bgColor="var(--color-white)" />
  </SimpleBarReact>
);

export default About;
