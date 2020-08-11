import React, { Fragment, useState, useEffect } from "react";
import styled from "styled-components";

const PictureParent = styled.figure`
  /* Grid Stuff */
  display: grid;
  grid-template-columns: ${({ align }) =>
    align === "left" ? `2fr 1fr` : `1fr 2fr`};
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

  justify-self: ${({ align }) => (align === "left" ? "end" : "start")};
  align-self: ${({ align }) => (align === "left" ? "end" : "end")};
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
  // Updates the state so function re-renders upon resizing below 1300px
  // so that figcaption comes below image (as in left aligned)
  // this is only needed for right aligned image

  // eslint-disable-next-line no-unused-vars
  const [toUpdate, setToUpdate] = useState(false);

  console.log("Run");

  useEffect(() => {
    // Firstly, check if `window` exists or not.

    if (typeof window !== undefined) {
      if (align === "right") {
        window.addEventListener("resize", () => {
          if (window.innerWidth <= 1300) {
            setToUpdate(true);
          } else {
            setToUpdate(false);
          }
        });
      }
    }
  });

  let pic;

  if (typeof window !== undefined) {
    if (align === "left" || window.matchMedia("(max-width: 1300px)").matches) {
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
    }
  }

  if (align === "right") {
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
  src: "https://i.imgur.com/eZXO4DD.jpg",
  alt: "Doing work with a Laptop",
};

export default PictureBox;
