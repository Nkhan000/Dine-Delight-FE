/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import styled from "styled-components";
import GradientIcon from "./GradientIcon";
import GradientHighlight from "./GradientHighlight";
import { FaCheck } from "react-icons/fa";
// import SectionListItem from "./SectionListItem";

const StyledList = styled.ul`
  & li {
    display: flex;
    gap: 0.8rem;
    padding: 0.5rem 0.3rem;
    align-items: center;

    & span {
      font-weight: 500;
      display: inline-block;
      font-size: 1.4rem;
      border-bottom: 3px solid dashed red;
    }
  }
`;

const IconDiv = styled.div``;

function SectionList({ iconSize, data }) {
  return (
    <StyledList>
      {data.map((dataItem) => (
        <li key={data.indexOf(dataItem)}>
          <IconDiv>
            <GradientIcon iconHeight={iconSize}>
              <FaCheck />
            </GradientIcon>
          </IconDiv>
          <GradientHighlight>
            <span>{dataItem}</span>
          </GradientHighlight>
        </li>
      ))}
    </StyledList>
  );
}
//   <SectionListItem data={data} iconSize={iconSize} />

export default SectionList;
