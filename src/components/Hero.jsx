import React, { Fragment } from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Layout from "./Layout";

const HeroHome = styled.div`
  color: var(--color-primary);
  height: auto;
  min-height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;

  @media (max-width: 500px) {
    min-height: 70vh;
  }

  @media (min-height: 624px) {
    height: auto;
    min-height: 45vh;
  }
`;

function Hero({ children }) {
  return (
    <Fragment>
      <Navbar />
      <Layout>
        <HeroHome>{children}</HeroHome>
      </Layout>
    </Fragment>
  );
}

export default Hero;
