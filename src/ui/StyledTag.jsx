import styled, { css } from "styled-components";

const StyledTag = styled.span`
  font-family: "Indie Flower", cursive;
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--color-grey-50);
  padding: 0.2rem 0.8rem;
  border-radius: 2rem;
  text-transform: capitalize;
  width: fit-content;

  display: flex;
  align-items: center;

  /* ${(props) =>
    (props.type == "delivery" || props.type == "veg") &&
    css`
      background-color: var(--color-green-700);
    `} */
  ${(props) =>
    (props.type == "reservation" || props.type == "non-veg") &&
    css`
      justify-self: center;
      background-color: var(--color-red-700);
    `}
  ${(props) =>
    props.type == "venue" &&
    css`
      background-color: var(--color-indigo-700);
      justify-self: center;
    `}
  ${(props) =>
    (props.type == "unverified" ||
      props.type == "unconfirmed" ||
      props.type == "confirmed") &&
    css`
      background-color: var(--color-blue-700);
      font-size: 1.3rem;
      /* width: max-content !important; */
      justify-self: center;
    `}
  ${(props) =>
    (props.type == "verified" ||
      props.type == "yes" ||
      props.type == "delivery" ||
      props.type == "on the way" ||
      props.type == "veg") &&
    css`
      background-color: var(--color-green-700);
      /* font-size: 1.3rem; */
      /* width: max-content !important; */
      justify-self: center;
    `}
  ${(props) =>
    (props.type == "cancled" || props.type == "no") &&
    css`
      background-color: var(--color-red-700);

      font-size: 1.3rem;
      /* width: max-content !important; */
      justify-self: center;
    `}
`;
export default StyledTag;
