import styled from "styled-components";
import HeroSectionContainer from "../ui/HeroSectionContainer";
import StyledHeroContainer from "../ui/StyledHeroContainer";
import HighlightDetails from "../ui/HighlightDetails";
import ContactUs from "../ui/ContactUs";

const StyledDivMain = styled.div`
  overflow-x: hidden;
`;

const StyledHeroMain = styled.div`
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: var(--color-medium-black);

    z-index: -1;
  }
`;

function Landing() {
  return (
    <StyledDivMain>
      <StyledHeroMain>
        <StyledHeroContainer />
      </StyledHeroMain>
      <HighlightDetails />
      <HeroSectionContainer />
      <ContactUs />
    </StyledDivMain>
  );
}

export default Landing;
