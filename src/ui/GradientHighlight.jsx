import styled from "styled-components";

const GradientHighlight = styled.span`
  /* background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--orange-gradient-02);
  background-size: cover; 
  font-size: inherit; */

  display: inline-block;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: var(--orange-gradient-02);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* border: 1px solid red; Debugging */
  font-size: inherit;
`;

export default GradientHighlight;
