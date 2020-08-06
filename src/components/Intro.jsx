import React from "react";
import styled from "styled-components";
import Layout from "./Layout";

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

const Picture = styled.div`
  grid-row: 4 / span 1;
  grid-column: 1 / span 2;

  img {
    display: block;
    max-width: 100%;
  }
`;

const PicCaption = styled.figcaption`
  grid-row: 4 / span 1;
  grid-column: 3 / span 1;
  justify-self: end;
  align-self: end;
  color: var(--color-text-gray);
  text-transform: uppercase;
  font-size: 12px;

  a {
    text-decoration: underline;
    color: var(--color-text-gray);

    &:active,
    &:hover,
    &:focus {
      color: var(--color-text-gray);
    }
  }
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
        <Picture>
          <img
            src="https://i.imgur.com/u3EiztR.jpeg"
            alt="Desk setup of a programmer"
          />
        </Picture>
        <PicCaption>
          Photo by <a href="https://unsplash.com/@oscrse">@oscrse</a> on{" "}
          <a href="https://unsplash.com/">Unsplash</a>
        </PicCaption>
      </Intro>
    </Layout>
  );
}

export default IntroSection;
