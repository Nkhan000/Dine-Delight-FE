import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.6rem;
      /* text-align: center; */
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.8rem;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2.4rem;
      text-transform: capitalize;
    `}
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 2rem;
      text-transform: capitalize;
    `}
    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 1.5rem;
      /* text-transform: capitalize; */
    `}
    ${(props) =>
    props.as === "h6" &&
    css`
      font-size: 1rem;
      text-transform: capitalize;
    `}

    ${(props) =>
    props.color === "light" &&
    css`
      color: var(--color-grey-50);
    `}
    ${(props) =>
    props.color === "dark" &&
    css`
      color: var(--color-grey-700);
    `}
    ${(props) =>
    props.family === "second" &&
    css`
      font-family: "Indie Flower", cursive;
    `}

  font-weight : 600;
  line-height: 1.4;
`;

Heading.defaultProps = {
  color: "dark",
};

export default Heading;
