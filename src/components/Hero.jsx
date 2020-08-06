import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Layout from "./Layout";

const HeroHome = styled.div`
  color: var(--color-primary);
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

function Hero({ children }) {
  return (
    <Layout>
      <HeroHome>
        <Navbar />
        {children}
      </HeroHome>
    </Layout>
  );
}

export default Hero;
