import styled from "styled-components";

const Img = styled.img`
  position: absolute;
  /* transform: rotate(180deg) scale(1.3) translate(0, 0); */
  transform: translate(0, 0);
  /* z-index: -1; */
`;

function Wave() {
  // return <Img src="./img/wave-orange.svg" alt="wave" />;
  return <Img src="./img/wave-black.svg" alt="wave" />;
}

export default Wave;

{
  /* <path
  fill="var(--color-orange-50)"
  // fill-opacity="1"
  d="M0,128L60,106.7C120,85,240,43,360,37.3C480,32,600,64,720,80C840,96,960,96,1080,80C1200,64,1320,32,1380,16L1440,0L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
></path> */
}
