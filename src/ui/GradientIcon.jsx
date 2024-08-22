/* eslint-disable react/prop-types */
import styled, { css } from "styled-components";

const StyledDivIcon = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${(props) =>
    props.iconHeight &&
    css`
      height: ${props.iconHeight}${"rem"};
      width: ${props.iconHeight}${"rem"};

      & svg {
        height: ${props.iconHeight - 0.4}${"rem"};
        width: ${props.iconHeight - 0.4}${"rem"};
      }
    `}

  & svg {
    display: inline-block;
    width: 4.6rem;
    background-color: transparent;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: url("#orange-gradient");
  }
`;

function GradientIcon({ iconHeight, children }) {
  return (
    <StyledDivIcon iconHeight={iconHeight}>
      <svg>
        <linearGradient
          id="orange-gradient"
          x1="100%"
          y1="100%"
          x2="0%"
          y2="0%"
        >
          <stop stopColor="#f06543" offset="0%" />
          <stop stopColor="#ffbe3d" offset="74%" />
        </linearGradient>
      </svg>
      {children}
    </StyledDivIcon>
  );
}

export default GradientIcon;
