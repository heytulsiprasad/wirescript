import React from "react";
import styled, { keyframes } from "styled-components";

const slide = keyframes`
  from {
    transform: translateY(0);
  }

  to {
    transform: translateY(5px);
  }
`;

const KeepSliding = styled.div`
  animation: ${slide} 1.5s linear infinite;
`;

function Arrow({ color }) {
  return (
    <KeepSliding>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 19 19"
      >
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g transform="translate(-319 -1001)">
            <g transform="translate(320 250)">
              <g transform="translate(0 746)">
                <g transform="matrix(0 -1 1 0 .5 22)">
                  <path
                    stroke={color ? color : "var(--color-primary)"}
                    strokeWidth="2"
                    d="M8 0L0 8 8 16"
                  ></path>
                  <path
                    fill={color ? color : "var(--color-primary)"}
                    d="M1 7H17V9H1z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </KeepSliding>
  );
}

export default Arrow;
