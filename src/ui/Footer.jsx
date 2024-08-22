/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { HiAcademicCap } from "react-icons/hi2";
import FooterDiv1 from "./FooterDiv1";
import FooterDiv2 from "./FooterDiv2";

const Container = styled.footer`
  background-color: var(--color-medium-black);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 50rem), 1fr));
  padding: 8rem 4rem;
  /* border: 1px solid grey; */
`;

function Footer() {
  return (
    <Container>
      <FooterDiv1 />

      <FooterDiv2></FooterDiv2>
    </Container>
  );
}

export default Footer;
