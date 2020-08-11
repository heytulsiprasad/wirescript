import React from "react";
import styled from "styled-components";
import Layout from "../Layout";
import PictureBox from "../PictureBox";

const Intro = styled.div`
  padding: 5rem 0;
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
  font-size: 1.8rem;
  max-width: 53.3333rem;
  font-weight: 400;
  line-height: 2.6667rem;
  letter-spacing: -0.5px;
  color: #333;

  grid-column: 2 / span 2;

  @media (max-width: 1300px) {
    grid-column: 1 / span 2;
  }
`;

const IntroText = styled.p`
  color: #808080;
  line-height: 1.4;
  grid-row: 2 / span 1;
  grid-column: 2 / span 2;

  @media (max-width: 1300px) {
    grid-column: 1 / span 2;
  }
`;

function IndexIntro({ bgColor }) {
  return (
    <Layout bgColor={bgColor}>
      <Intro id="intro">
        <HeroText>
          Constant hustle. Unrealistic expectations. Endless pressure. Running
          on maximum capacity. Well, what if there is an alternative with the
          same results just a click away?
        </HeroText>
        <IntroText>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          aliquam quae magnam sunt dolorum error ratione esse adipisci qui ea
          vel, veritatis aspernatur, dolorem exercitationem dolores accusantium
          deleniti vitae rem quos nihil dicta. Voluptate quod vero veritatis
          autem fuga dolores! Eos voluptatum nulla impedit delectus cum deleniti
          dignissimos dolor nostrum assumenda aperiam id eligendi, beatae
          tenetur quam at eaque, dolorem expedita, illo perferendis voluptate.
          Odio sit accusamus, iusto hic, minus tempore laudantium a voluptas
          animi adipisci assumenda aut dolorum quasi quae sint distinctio
          maiores omnis. Adipisci labore neque deserunt ipsa, recusandae quis,
          commodi fuga assumenda ab, dicta earum reprehenderit quae.
        </IntroText>
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

export default IndexIntro;
