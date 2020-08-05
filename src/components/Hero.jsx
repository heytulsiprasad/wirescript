import React from "react";
import styled from "styled-components";

import Navbar from "./Navbar";
import Icon from "../images/arrow.jsx";

const BigHead = styled.h1`
  font-size: 9vh;
  font-weight: 500;
  letter-spacing: -3.5px;
  color: #659d89;
`;

const BigBody = styled.h1`
  font-size: 8vh;
  font-weight: 500;
  letter-spacing: -2.5px;
`;

const HeroHome = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

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

function Hero() {
  return (
    <HeroHome>
      <Navbar />
      <HeroText>
        <BigHead>The Wirescript</BigHead>
        <BigBody>
          — A journal of an experienced googler and dope ass coder
        </BigBody>
      </HeroText>
      <Slider>
        <Icon />
        <p>Browse topics and resources</p>
      </Slider>
    </HeroHome>
  );
}

export default Hero;
