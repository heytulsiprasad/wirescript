import styled from "styled-components";

export const HeroHeader = styled.header`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: clamp(3.2rem, 8vw, 6rem);
  font-weight: 500;
  letter-spacing: -3px;
  line-height: 1;
  color: var(--color-tertiary);
`;

export const BigBody = styled.h2`
  font-size: clamp(2rem, 4vw, 3.5rem);
  width: 95%;
  font-weight: 500;
  letter-spacing: -2px;
  margin-top: 2rem;
`;

export const Author = styled.h3`
  font-size: 2rem;

  font-weight: 300;
  letter-spacing: -0.2px;
  margin-top: 2rem;

  @media (max-width: 500px) {
    font-size: 1.5rem;
    letter-spacing: -1px;
  }
`;
