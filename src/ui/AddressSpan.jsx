/* eslint-disable react/prop-types */
import { FaLocationDot } from "react-icons/fa6";
import styled, { css } from "styled-components";

const StyledAddress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  transition: color 0.3s;
  width: fit-content;

  &:hover {
    color: var(--color-orange-50) !important;
    cursor: pointer;
  }
  span {
    text-decoration: underline;
    text-transform: capitalize;
    font-weight: 600;
  }
  ${(props) =>
    props.sizes == "large" &&
    css`
      font-size: 2rem !important;
      color: var(--color-grey-500);
      svg {
        width: 2rem !important;
        height: 2rem !important;
      }
    `}

  font-size: 1.2rem;

  svg {
    width: 1.3rem;
    height: 1.3rem;
  }
`;

function AddressSpan({ address, sizes }) {
  return (
    <StyledAddress sizes={sizes}>
      <FaLocationDot />
      <span>{address}</span>
    </StyledAddress>
  );
}

export default AddressSpan;
