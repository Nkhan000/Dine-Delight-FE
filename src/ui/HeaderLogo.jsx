import styled from "styled-components";
import Heading from "./Heading";
import GradientHighlight from "./GradientHighlight";
import { Link } from "react-router-dom";

const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const LogoImgDiv = styled.div`
  height: 3.2rem;
  width: 3.2rem;
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

function HeaderLogo() {
  return (
    <Link to="/" style={{ width: "fit-content" }}>
      <LogoDiv>
        <LogoImgDiv>
          <LogoImg src="./img/logo-svg.svg" alt="logo" />
        </LogoImgDiv>
        <Heading as="h2" family="second" color="light">
          Din<GradientHighlight>Delight</GradientHighlight>
        </Heading>
      </LogoDiv>
    </Link>
  );
}

export default HeaderLogo;
