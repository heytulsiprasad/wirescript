import React, { Fragment } from "react";
import styled from "styled-components";

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
    border-radius: 3px;
    box-shadow: 0px 5px 15px var(--color-box-shadow);
  }
`;

const PicCaption = styled.figcaption`
  /* Grid Stuff */

  justify-self: end;
  align-self: end;
  color: var(--color-text-body);
  text-transform: uppercase;
  font-size: 0.8rem;

  a {
    text-decoration: underline;
    color: var(--color-text-body);

    &:active,
    &:hover,
    &:focus {
      color: var(--color-text-link);
    }
  }

  @media (max-width: 1300px) {
    margin-top: 1rem;
    justify-self: center;
  }
`;

function PictureBox({ src, alt, by, align }) {
  return (
    <PictureParent>
      <Picture>
        <img src={src} alt={alt} />
      </Picture>
      {by ? (
        <PicCaption align={align}>
          Photo by <a href={`https://unsplash.com/@${by}`}>@{by}</a> on{" "}
          <a href="https://unsplash.com/">Unsplash</a>
        </PicCaption>
      ) : (
        <PicCaption align={align}>{alt}</PicCaption>
      )}
    </PictureParent>
  );
}

PictureBox.defaultProps = {
  align: "left",
  src: "https://i.imgur.com/eZXO4DD.jpg",
  alt: "Doing work with a Laptop",
};

export default PictureBox;
