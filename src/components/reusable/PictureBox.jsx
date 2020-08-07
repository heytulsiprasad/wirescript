import React, { Fragment } from "react";
import styled from "styled-components";

const PictureParent = styled.div`
  /* Grid Stuff */
  display: grid;
  grid-template-columns: ${({ align }) =>
    align === "left" ? `2fr 1fr` : `1fr 2fr`};
  grid-template-rows: auto;
`;

const Picture = styled.div`
  /* Grid Stuff */

  img {
    display: block;
    max-width: 100%;
  }
`;

const PicCaption = styled.figcaption`
  /* Grid Stuff */

  justify-self: ${({ align }) => (align === "left" ? "end" : "start")};
  align-self: ${({ align }) => (align === "left" ? "end" : "end")};
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

function PictureBox({ src, alt, by, align }) {
  let pic;

  if (align === "left") {
    pic = (
      <Fragment>
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
      </Fragment>
    );
  } else {
    pic = (
      <Fragment>
        {by ? (
          <PicCaption align={align}>
            Photo by <a href={`https://unsplash.com/@${by}`}>@{by}</a> on{" "}
            <a href="https://unsplash.com/">Unsplash</a>
          </PicCaption>
        ) : (
          <PicCaption align={align}>{alt}</PicCaption>
        )}
        <Picture>
          <img src={src} alt={alt} />
        </Picture>
      </Fragment>
    );
  }

  return <PictureParent align={align}>{pic}</PictureParent>;
}

PictureBox.defaultProps = {
  align: "left",
};

export default PictureBox;
