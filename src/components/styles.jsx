import styled from "styled-components";

export const HeroHeader = styled.header`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 5.3333rem;
`;

export const Slider = styled.div`
  display: flex;
  padding-bottom: 2rem;

  p {
    margin-left: 0.9rem;
    font-weight: 500;
  }
`;

export const BigHead = styled.h1`
  width: 80%;
  font-size: clamp(4rem, 8vw, 8rem);
  font-weight: 500;
  letter-spacing: -3.5px;
  color: var(--color-tertiary);
`;

export const BigBody = styled.h2`
  font-size: clamp(2.5rem, 4vw, 4.5rem);
  font-weight: 500;
  letter-spacing: -2px;
  max-width: 85%;
`;
