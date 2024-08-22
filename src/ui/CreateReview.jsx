import styled from "styled-components";
import CreateRatingStar from "./CreateRatingStar";
import { useState } from "react";
import GradientHighlight from "./GradientHighlight";
import Button from "./Button";

const Container = styled.div`
  /* padding: 2rem; */
  display: flex;
  flex-direction: column;
`;

const HeadSpan = styled.span`
  color: var(--color-grey-100);
  font-weight: 800;
  font-size: 2rem;
  text-align: center;
`;

const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
  gap: 3rem;
`;

const ReviewInputDivContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledReviewForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ReviewSpan = styled.div`
  font-size: 1.8rem;
  font-weight: 600;
  color: var(--color-grey-100);
`;

const ReviewInputRating = styled.input`
  display: none;
`;
const ReviewInputReviewTextArea = styled.textarea`
  max-width: 100%;
  color: var(--color-grey-200);
  background-color: transparent;
  padding: 1rem;
  border: 1px solid;
  font-size: 1.4rem;
  height: 10rem;
  max-height: 20rem;
`;

const ReviewNoteSpan = styled.span`
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 600;
`;

const ReviewBtnDiv = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: end;
`;

function CreateReview() {
  const [rating, setRating] = useState(0);

  function handleReset() {
    setRating(0);
  }

  return (
    <Container>
      <RatingContainer>
        <HeadSpan>Please rate your experience with us</HeadSpan>
        <CreateRatingStar rating={rating} setRating={setRating} />
      </RatingContainer>

      {rating > 0 && (
        <ReviewContainer>
          <HeadSpan>
            Thanks for rating us :
            {<GradientHighlight>{` ${rating}.0`}</GradientHighlight>}
          </HeadSpan>

          <ReviewInputDivContainer>
            <ReviewSpan>Please write a review for us :</ReviewSpan>
            <StyledReviewForm>
              <ReviewInputRating type="text" />
              <ReviewInputReviewTextArea placeholder="Please be humble while writing a review"></ReviewInputReviewTextArea>
              <ReviewNoteSpan>
                Note : You can not undo your review after submiting it{" "}
              </ReviewNoteSpan>
              <ReviewBtnDiv>
                <Button
                  size="medium"
                  variation="secondary"
                  onClick={handleReset}
                >
                  Reset
                </Button>
                <Button size="medium" variation="primary">
                  Submit
                </Button>
              </ReviewBtnDiv>
            </StyledReviewForm>
          </ReviewInputDivContainer>
        </ReviewContainer>
      )}
    </Container>
  );
}

export default CreateReview;
