import styled from "styled-components";
import { Link } from "gatsby";

export const FooterActual = styled.div`
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

export const FooterItems = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;

  @media (max-width: 500px) {
    width: 100%;
    text-align: center;
  }
`;

export const FooterItem = styled(Link)`
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

export const FooterMenu = styled.div`
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

export const FooterCredits = styled.div`
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

export const FooterCopy = styled.p`
  color: var(--color-text-footer);
  font-weight: 500;
  font-size: 1rem;
  width: 100%;
`;

export const FooterLogo = styled(Link)`
  color: white;
  text-align: right;

  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const FooterIcons = styled.div`
  display: flex;
  width: fit-content;
  color: var(--color-text-footer);

  & > * + * {
    margin-left: 1rem;
  }
`;

export const FLink = styled.a`
  color: var(--color-text-footer);

  &,
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }
`;
