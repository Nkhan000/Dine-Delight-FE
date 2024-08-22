import styled from "styled-components";

const GradientHighlight = styled.span`
  /* text-transform: capitalize; */
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--orange-gradient-02);
  font-size: inherit;
`;

export default GradientHighlight;
