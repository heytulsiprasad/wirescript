import React from "react";
import styled from "styled-components";
import Layout from "./Layout";
import PictureBox from "./PictureBox";

const Intro = styled.div`
  padding: 5rem 0;
  display: grid;
  grid-column-gap: 40px;
  grid-row-gap: 80px;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
`;

const HeroText = styled.h2`
  font-size: 1.8rem;
  max-width: 800px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: -0.5px;
  color: #333;

  grid-column: 2 / span 2;
`;

const IntroText = styled.p`
  color: #808080;
  line-height: 1.4;
`;

const IntroText1 = styled(IntroText)`
  grid-row: 2 / span 2;
  grid-column: 2 / span 1;
`;

const IntroText2 = styled(IntroText)`
  grid-row: 2 / span 2;
  grid-column: 3 / span 1;
`;

function IntroSection() {
  return (
    <Layout>
      <Intro>
        <HeroText>
          Constant hustle. Unrealistic expectations. Endless pressure. Running
          on maximum capacity. Well, what if there is an alternative with the
          same results just a click away?
        </HeroText>
        <IntroText1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam
          nesciunt corporis tempora quis dolore eaque quasi, eius hic commodi
          fuga quo at fugit? Ullam, deleniti. Magni, atque! Similique quidem
          laboriosam voluptatem modi eaque expedita obcaecati molestiae
          repudiandae nemo quasi.
        </IntroText1>
        <IntroText2>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aperiam
          nesciunt corporis tempora quis dolore eaque quasi, eius hic commodi
          fuga quo at fugit? Ullam, deleniti. Magni, atque! Similique quidem
          laboriosam voluptatem modi eaque expedita obcaecati repudiandae nemo
          quasi.
        </IntroText2>
      </Intro>
      <div style={{ padding: "2rem 0 5rem" }}>
        <PictureBox
          align="left"
          src="https://i.imgur.com/u3EiztR.jpeg"
          alt="Desk setup of a programmer"
          by="oscrse"
        />
      </div>
    </Layout>
  );
}

export default IntroSection;
