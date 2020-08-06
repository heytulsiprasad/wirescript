import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  font-weight: 500;
  padding-top: 3.5rem;
`;

const LinkReset = styled(Link)`
  &,
  &:hover,
  &:active,
  &:focus {
    color: inherit;
    text-decoration: none;
  }
`;

const NavItem = styled(LinkReset)`
  &:not(:last-of-type) {
    margin-right: 3rem;
  }
`;

const NavItemMain = styled(LinkReset)`
  margin-right: auto;
  margin-left: 5px;

  && {
    color: var(--color-tertiary);
  }
`;

function Navbar() {
  return (
    <Nav>
      <NavItemMain to="/">The Wirescript</NavItemMain>
      <NavItem to="/">I'm Feeling Lucky</NavItem>
      <NavItem to="/blog">Blog</NavItem>
      <NavItem to="/about">About</NavItem>
    </Nav>
  );
}

export default Navbar;
