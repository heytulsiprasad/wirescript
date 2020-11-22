import React from "react";
import styled from "styled-components";
import Icon from "../components/svg/logo";
import { Link } from "gatsby";

import {
  FaStackOverflow,
  FaTwitter,
  FaGithub,
  FaDev,
  FaTelegramPlane,
  FaTwitch,
  FaYoutube,
  FaLinkedinIn,
  FaDiscord,
} from "react-icons/fa";

import { FiMail } from "react-icons/fi";

const FooterActual = styled.div`
  background-color: #060b0e;
  width: 100%;
  margin: 0 auto;
  padding: 0 10.6667rem;

  display: grid;
  grid-template-rows: repeat(10, minmax(40px, 1fr));
  grid-template-columns: repeat(8, 1fr);

  @media (max-width: 1150px) {
    padding: 0 8rem;
  }

  @media (max-width: 900px) {
    padding: 0 5rem;
  }

  @media (max-width: 700px) {
    padding: 0 3rem;
  }

  @media (max-width: 500px) {
    padding: 0 1.5rem;
  }
`;

const FooterItems = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`;

const FooterItem = styled(Link)`
  color: var(--color-text-footer);
  font-size: 1rem;
  font-weight: 500;

  &:not(:first-of-type) {
    margin-top: 1rem;
  }

  &,
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }
`;

const FooterMenu = styled.div`
  grid-row: 4 / span 5;
  grid-column: 1 / span 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 500px) {
    grid-row: 2 / 6;
    grid-column: 1 / -1;
    justify-self: center;
    margin: 0 auto;
  }
`;

const FooterCredits = styled.div`
  grid-row: 4 / span 5;
  grid-column: 7 / span 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: right;

  @media (max-width: 500px) {
    grid-row: 7 / 10;
    grid-column: 3 / 7;
    justify-self: center;
    width: 100%;
    margin: 0 auto;
    text-align: center;
  }
`;

const FooterCopy = styled.p`
  color: var(--color-text-footer);
  font-weight: 500;
  font-size: 1rem;
  width: 100%;
`;

const FooterLogo = styled(Link)`
  color: white;
  text-align: right;

  @media (max-width: 500px) {
    text-align: center;
  }
`;

const FooterIcons = styled.div`
  display: flex;
  width: fit-content;
  color: var(--color-text-footer);

  & > * + * {
    margin-left: 1rem;
  }
`;

const FLink = styled.a`
  color: var(--color-text-footer);

  &,
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }
`;

function Footer({ bgColor }) {
  return (
    <FooterActual role="contentinfo">
      <FooterMenu>
        <FooterItems>
          <FooterItem to="/blog">Blog</FooterItem>
          <FooterItem to="/">Home</FooterItem>
          <FooterItem to="/about">About</FooterItem>
        </FooterItems>
        <FooterIcons>
          <FLink
            target="_blank"
            rel="nofollow noreferrer noopener"
            aria-label="Follow me on Twitter"
            href="https://twitter.com/heytulsiprasad"
          >
            <FaTwitter />
          </FLink>
          <FLink
            target="_blank"
            rel="nofollow noreferrer noopener"
            aria-label="Join us on Discord"
            href="https://discord.com/invite/TK8EMW59Zm"
          >
            <FaDiscord />
          </FLink>
          <FLink
            target="_blank"
            rel="nofollow noreferrer noopener"
            aria-label="Follow my code on Github"
            href="https://github.com/heytulsiprasad"
          >
            <FaGithub />
          </FLink>

          <FLink
            target="_blank"
            rel="nofollow noreferrer noopener"
            aria-label="Connect on LinkedIn"
            href="https://linkedin.com/in/heytulsiprasad"
          >
            <FaLinkedinIn />
          </FLink>
          <FLink
            target="_blank"
            rel="nofollow noreferrer noopener"
            aria-label="Reach out to me with email"
            href="mailto:tulsi.prasad50@gmail.com"
          >
            <FiMail />
          </FLink>
          <FLink
            target="_blank"
            rel="nofollow noreferrer noopener"
            aria-label="Follow my public articles on Dev"
            href="https://dev.to/heytulsiprasad"
          >
            <FaDev />
          </FLink>
          <FLink
            target="_blank"
            rel="nofollow noreferrer noopener"
            aria-label="Come chat with me on Telegram"
            href="https://t.me/heytulsiprasad"
          >
            <FaTelegramPlane />
          </FLink>
          <FLink
            target="_blank"
            rel="nofollow noreferrer noopener"
            aria-label="See my public answers on Stackoverflow"
            href="https://stackoverflow.com/users/11674552/heytulsiprasad"
          >
            <FaStackOverflow />
          </FLink>
          <FLink
            target="_blank"
            rel="nofollow noreferrer noopener"
            aria-label="Follow my livestreams in future on Twitch"
            href="https://www.twitch.tv/wirescripttech"
          >
            <FaTwitch />
          </FLink>
        </FooterIcons>
      </FooterMenu>
      <FooterCredits>
        <FooterLogo aria-label="Go to Home" to="/">
          <Icon color="var(--color-secondary)" height="4.5rem" width="4.5rem" />
        </FooterLogo>
        <FooterCopy>Wirescript {new Date().getFullYear()}</FooterCopy>
      </FooterCredits>
    </FooterActual>
  );
}

export default Footer;
