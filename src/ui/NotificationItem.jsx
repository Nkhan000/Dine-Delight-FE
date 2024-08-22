import styled from "styled-components";
import Button from "./Button";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const HeadingDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const NotificationContainer = styled.div`
  height: 100vh;
  width: 100%;
  /* border: 1px solid; */

  overflow-y: scroll;
`;

const NotificationDiv = styled.div`
  display: grid;
  grid-template-columns: 6rem 1fr;
  gap: 2rem;
  background-color: var(--color-grey-900);
  /* background-color: var(--color-grey-800); */
  padding: 1rem 2rem;
  border-bottom: 1px solid;
  transition: filter 0.2s ease-in;

  &:hover {
    filter: brightness(1.5);
    cursor: pointer;
  }
  /* align-items: center; */
`;

const NotificationImgDiv = styled.div`
  border-radius: 100%;
  overflow: hidden;
  grid-row: 1 / -1;
  background-color: var(--color-grey-900);
`;

const NotificationImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  padding: 1rem;
`;

const NotificationTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;
const NotificationSpan = styled.span`
  font-weight: 500;
  color: var(--color-grey-300);
  font-size: 1.4rem;
`;

const NotificationTimeSpan = styled.span`
  font-weight: 300;
  font-size: 1rem;
  font-style: italic;
  align-self: flex-end;
  color: var(--color-grey-400);
`;

function NotificationItem() {
  const arrSize = 12;

  return (
    <Container>
      <HeadingDiv>
        <Button size="small" variation="nobgandwidth">
          Mark all as read
        </Button>
        <Button size="small" variation="nobgandwidth">
          Clear all
        </Button>
      </HeadingDiv>

      <NotificationContainer>
        {[...Array(arrSize)].map((_, i) => (
          <NotificationDiv key={i}>
            <NotificationImgDiv>
              <NotificationImg src="./img/chef_3071779.png" />
            </NotificationImgDiv>
            <NotificationTextDiv>
              <NotificationTimeSpan>a few seconds ago</NotificationTimeSpan>
              <NotificationSpan>
                You order has been placed successfully. Tap for more info
              </NotificationSpan>
            </NotificationTextDiv>
          </NotificationDiv>
        ))}
      </NotificationContainer>
    </Container>
  );
}

export default NotificationItem;
