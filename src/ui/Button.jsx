import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    /* width: 100%; */
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 0.6rem 2rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
  noBorderLarge: css`
    font-size: 2.5rem;
    padding: 1rem 1rem;
    transition: all 0.3s;

    &:hover {
      svg {
        fill: var(--color-orange-50);
      }
    }
  `,

  link: css`
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: capitalize;
    color: var(--color-orange-50);
    padding: 1rem;

    & svg {
      width: 1.8rem;
      height: 1.8rem;
    }
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-orange-50);
    transition: all 0.3s;
    display: flex;
    align-items: center;
    gap: 1rem;

    border: 1px solid var(--color-orange-50);

    &:hover {
      background-color: var(--color-orange-150);

      transform: translateY(-0.3rem);
    }
  `,
  secondary: css`
    color: var(--color-grey-50);
    background: none;
    border: 1px solid var(--color-grey-200);
    position: relative;
    display: flex;
    align-items: center;
    /* text-align: center; */
    justify-content: center;
    gap: 0.8rem;
    transition-property: transform, border, color;
    transition-duration: 0.5s;

    &:hover {
      border: 1px solid var(--color-orange-50);
      transform: translateY(-0.3rem);
    }

    &:active,
    &:focus {
      outline: 2px solid var(--color-orange-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
  link: css`
    background-color: var(--color-medium-black);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1.5rem 1.8rem;

    &:hover {
      color: var(--color-orange-50) !important;
    }

    &:focus {
      outline: 1px solid var(--color-orange-50);
      outline-offset: -1px;
    }
  `,
  nobgandwidth: css`
    background-color: transparent;
    padding: 2rem;
    transition: all 0.2s ease-in;

    &:hover {
      color: var(--color-orange-100) !important;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  ${(props) => sizes[props.size]}
  ${(props) =>
    props.hover === "no" &&
    css`
      &:hover {
        transform: translateY(0) !important;
      }
    `}
  ${(props) => variations[props.variation]}
  ${(props) =>
    props.color == "light" &&
    css`
      color: var(--color-grey-50) !important;
    `}
  ${(props) =>
    props.color == "dark" &&
    css`
      color: var(--color-medium-black) !important;
    `}
`;
Button.defaultProps = {
  size: "medium",
  variation: "secondary",
  color: "light",
};
export default Button;
