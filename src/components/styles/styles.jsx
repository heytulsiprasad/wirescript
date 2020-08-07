import styled from "styled-components";

export const HeroText = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 80px;
`;

export const Slider = styled.div`
  display: flex;
  padding-bottom: 2rem;

  p {
    margin-left: 1rem;
    font-weight: 500;
  }
`;

export const BigHead = styled.h1`
  font-size: 10vh;
  font-weight: 500;
  letter-spacing: -3.5px;
  color: var(--color-tertiary);
`;

export const BigBody = styled.h1`
  font-size: 7vh;
  font-weight: 500;
  letter-spacing: -2.5px;
  max-width: 1000px;
`;
