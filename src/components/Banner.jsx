import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

const BannerContainer = styled(motion.div)`
  width: 100vw;
  color: #fff;
  position: fixed;
  top: 0;
  background: #232323;
  padding: 8px 10.6667rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 9999;

  @media (max-width: 1250px) {
    padding: 8px 8rem;
  }

  @media (max-width: 900px) {
    padding: 8px 5rem;
  }

  @media (max-width: 700px) {
    padding: 8px 3rem;
  }

  @media (max-width: 500px) {
    padding: 10px 1.5rem;
  }

  p {
    @media (max-width: 500px) {
      max-width: 300px;
    }
  }
`;

const FLink = styled.a`
  color: var(--color-text-footer);
  display: flex;
  align-items: center;
  cursor: pointer;

  &,
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }
`;

const Banner = () => {
  const [lastYPos, setLastYPos] = useState(0);
  const [show, setShow] = useState(false);
  const [foreverShow, setForeverShow] = useState(true);

  useEffect(() => {
    if (foreverShow) {
      if (typeof window !== `undefined`) {
        const handleScroll = () => {
          const yPos = window.scrollY;
          const hasScrolled200 = yPos > 200;
          const isScrollingDown = yPos > lastYPos;

          setShow(isScrollingDown && hasScrolled200);
          setLastYPos(yPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }
  }, [lastYPos, foreverShow]);

  const closeOnClick = () => {
    setShow(false);
    setForeverShow(false);
  };

  return (
    <BannerContainer initial={{ top: -100 }} animate={{ top: show ? 0 : -100 }}>
      <p>
        We now have a discord community, come —{" "}
        <a
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "underline", color: "inherit" }}
          href="https://bit.ly/wirescript2"
        >
          join us
        </a>{" "}
        <span role="img" aria-label="emoji">
          🙌
        </span>
      </p>
      <FLink onClick={closeOnClick}>
        <MdClose />
      </FLink>
    </BannerContainer>
  );
};

export default Banner;
