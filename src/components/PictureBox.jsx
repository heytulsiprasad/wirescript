import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const PictureParent = styled.figure`
  /* Grid Stuff */
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr;
  }
`;

const Picture = styled.div`
  /* Grid Stuff */

  img {
    display: block;
    max-width: 100%;
    border-radius: 5px;
    box-shadow: 0px 5px 15px var(--color-box-shadow);
  }
`;

const PicCaption = styled.figcaption`
  /* Grid Stuff */

  justify-self: end;
  align-self: end;
  color: #464646;
  text-transform: uppercase;
  font-size: 0.8rem;

  a {
    text-decoration: underline;
    color: #464646;

    &:active,
    &:hover,
    &:focus {
      color: var(--color-text-body);
    }
  }

  @media (max-width: 1300px) {
    margin-top: 1rem;
    justify-self: center;
  }
`;

function PictureBox({ src, alt, by }) {
  return (
    <PictureParent>
      <Picture>
        <Img fluid={src} alt={alt} />
      </Picture>
      {by ? (
        <PicCaption align="left">
          Photo by <a href={`https://unsplash.com/@${by}`}>@{by}</a> on{" "}
          <a href="https://unsplash.com/">Unsplash</a>
        </PicCaption>
      ) : (
        <PicCaption align="left">
          Photo from <a href="https://unsplash.com/">Unsplash</a>
        </PicCaption>
      )}
    </PictureParent>
  );
}

export default PictureBox;
