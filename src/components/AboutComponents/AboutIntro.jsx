import React, { Fragment } from "react";
import styled from "styled-components";

import Layout from "./../Layout";
import PictureBox from "./../PictureBox";

const Intro = styled.div`
  padding: 5rem 0 8rem;
  display: grid;
  grid-column-gap: 2.6667rem;
  grid-row-gap: 5.3333rem;
  grid-auto-flow: row;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;

  @media (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HeroText = styled.h2`
  font-size: clamp(1.6rem, 2.4vw, 1.8rem);
  max-width: 53.3333rem;
  font-weight: 400;
  line-height: 2.6667rem;
  letter-spacing: -0.5px;
  color: var(--color-text-head);

  grid-column: 1 / span 2;

  @media (max-width: 1300px) {
    grid-column: 1 / span 2;
  }
`;

const HeroTextWithDivider = styled(HeroText)`
  position: relative;
  width: 110%;

  @media (max-width: 1000px) {
    width: 100%;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0.0667rem;
    background: var(--color-text-divider);
    left: 0rem;
    margin-top: 20px;
    top: 100%;
  }
`;

const IntroText = styled.p`
  color: var(--color-text-body);
  line-height: 1.4;
  grid-row: 2 / span 1;
  grid-column: 1 / span 2;
`;

function AboutIntro() {
  return (
    <Fragment>
      <Layout bgColor="var(--color-white)">
        <Intro>
          <HeroTextWithDivider>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
            laboriosam sunt eveniet quis culpa sed voluptatibus dolore. Hic
            soluta sequi temporibus rerum saepe ut aliquam dicta, maxime dolorum
            minima architecto?
          </HeroTextWithDivider>
          <IntroText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            aperiam nesciunt corporis tempora quis dolore eaque quasi, eius hic
            commodi fuga quo at fugit? Ullam, deleniti. Magni, atque! Similique
            quidem laboriosam voluptatem modi eaque expedita obcaecati molestiae
            repudiandae nemo quasi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Error aperiam nesciunt corporis tempora quis
            dolore eaque quasi, eius hic commodi fuga quo at fugit? Ullam,
            deleniti. Magni, atque! Similique quidem laboriosam voluptatem modi
            eaque expedita obcaecati repudiandae nemo quasi.
          </IntroText>
        </Intro>
        <div style={{ padding: "2rem 0 5rem" }}>
          <PictureBox
            align="right"
            src="https://i.imgur.com/u3EiztR.jpeg"
            alt="Desk setup of a programmer"
            by="oscrse"
          />
        </div>
        <Intro>
          <HeroTextWithDivider>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            quo dicta eligendi numquam molestias commodi sed officiis vitae
            error maiores at deleniti, alias voluptatum expedita aut laudantium
            saepe vel illo.
          </HeroTextWithDivider>
          <IntroText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            aperiam nesciunt corporis tempora quis dolore eaque quasi, eius hic
            commodi fuga quo at fugit? Ullam, deleniti. Magni, atque! Similique
            quidem laboriosam voluptatem modi eaque expedita obcaecati molestiae
            repudiandae nemo quasi, em ipsum dolor sit amet consectetur
            adipisicing elit. Error apTeriam nesciunt corporis tempora quis
            dolore eaque quasi, eius hic commodi fuga quo at fugit? Ullam,
            deleniti. Magni, atque! Similique quidem laboriosam voluptatem modi
            eaque expedita obcaecati molestiae repudiandae nemo quasi.
          </IntroText>
        </Intro>
      </Layout>
    </Fragment>
  );
}

export default AboutIntro;
