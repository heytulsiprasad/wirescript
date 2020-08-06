import React from "react";
import styled from "styled-components";
import Hero from "../Hero";
import Arrow from "../../images/arrow";

const HeroText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 80px;
`;

const Slider = styled.div`
  display: flex;
  padding-bottom: 2rem;

  p {
    margin-left: 1rem;
    font-weight: 500;
  }
`;

const BigHead = styled.h1`
  font-size: 9vh;
  font-weight: 500;
  letter-spacing: -3.5px;
  color: var(--color-tertiary);
`;

const BigBody = styled.h1`
  font-size: 8vh;
  font-weight: 500;
  letter-spacing: -2.5px;
  max-width: 1000px;
`;

function IndexPage() {
  return (
    <Hero>
      <HeroText>
        <BigHead>The Wirescript</BigHead>
        <BigBody>
          — A journal of an experienced googler and dope ass coder.
        </BigBody>
      </HeroText>
      <Slider>
        <Arrow />
        <p>Browse topics and resources</p>
      </Slider>
    </Hero>
  );
}

export default IndexPage;
