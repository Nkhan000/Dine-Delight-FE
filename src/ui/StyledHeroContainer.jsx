import styled from "styled-components";
import HeroImageGrid from "./HeroImageGrid";
import HeroTextGrid from "./HeroTextGrid";

const StyledHeroContainerDiv = styled.div`
  display: grid;
  grid-template-columns: 45% 1fr;
  column-gap: 2rem;
  padding: 1rem 4rem;
`;

function StyledHeroContainer() {
  return (
    <StyledHeroContainerDiv>
      <HeroTextGrid />
      <HeroImageGrid />
    </StyledHeroContainerDiv>
  );
}

export default StyledHeroContainer;
