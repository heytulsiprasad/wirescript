import React from "react";
import Logo from "../svg/logo";

import { links } from "../../constants/links";
import Icon from "../Icon";
import {
  FooterActual,
  FooterMenu,
  FooterItems,
  FooterItem,
  FooterIcons,
  FLink,
  FooterCredits,
  FooterLogo,
  FooterCopy,
} from "./styles";

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
          {links.map(item => (
            <FLink
              key={item.name}
              target="_blank"
              rel="nofollow noreferrer noopener"
              aria-label={item.label}
              href={item.link}
            >
              <Icon name={item.icon} />
            </FLink>
          ))}
        </FooterIcons>
      </FooterMenu>
      <FooterCredits>
        <FooterLogo aria-label="Go to Home" to="/">
          <Logo color="var(--color-secondary)" height="4.5rem" width="4.5rem" />
        </FooterLogo>
        <FooterCopy>Wirescript {new Date().getFullYear()}</FooterCopy>
      </FooterCredits>
    </FooterActual>
  );
}

export default Footer;
