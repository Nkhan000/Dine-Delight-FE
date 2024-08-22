/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Heading from "./Heading";
import HeroGridDiv from "./HeroGridDiv";

const StyledHeroGrid = styled.div`
  display: flex;
  overflow: hidden;
  transform: scale(1.1);
  padding: 0 3rem;
  padding-left: 5rem;
`;

function HeroImageGrid() {
  return (
    <StyledHeroGrid>
      <HeroGridDiv />;
    </StyledHeroGrid>
  );
}

export default HeroImageGrid;

// {/* <GridDiv6>
//   <GridImg src="./img/chef-001.jpg" alt="" />
// </GridDiv6> */}
