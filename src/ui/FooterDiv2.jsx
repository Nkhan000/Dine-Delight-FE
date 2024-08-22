import styled from "styled-components";
import FooterLinkDiv from "./FooterLinkDiv";

const StyledFooterDiv2 = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 3.6rem;
  padding: 0 3rem;
  /* justify-content: space-between; */
  /* background-color: blue; */
`;

function FooterDiv2() {
  return (
    <StyledFooterDiv2>
      <FooterLinkDiv type="our services" />
      <FooterLinkDiv type="for bussiness" />
      <FooterLinkDiv type="contact us" />
    </StyledFooterDiv2>
  );
}

export default FooterDiv2;
