/* eslint-disable no-unused-vars */
import { FaCheckCircle } from "react-icons/fa";
import Button from "../Button";
import GradientIcon from "../GradientIcon";
import Modal from "../Modal";
import CuisineOpenForm from "./cuisineOpenForm";
import styled from "styled-components";
import GradientHighlight from "../GradientHighlight";
import { useState } from "react";
const OnStartUpCusine = styled.div`
  width: 100%;
  padding: 5rem 10rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  & span {
    font-family: inherit;
    color: var(--color-grey-300);
    font-size: 3.4rem;
    font-weight: 600;
  }
`;

const RequiredDocumentsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  border: 3px solid var(--color-orange-50);
  border-radius: 5rem;
  margin: 0 3rem;
  padding: 2rem 0;

  & span {
    color: var(--color-grey-500);
    font-weight: 700;
    font-size: 2.6rem;
  }
`;

const RequiredDocumentsDivSm = styled.div`
  display: flex;
  align-items: center;
  gap: 3.5rem;
  padding: 1rem 8rem;
`;
const RequiredDocumentsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  & li {
    display: flex;
    gap: 2.8rem;
    color: var(--color-grey-300);
    font-weight: 600;

    align-items: center;
  }
`;
const DocListItemIcon = styled.div`
  /* background-color: var(--color-green-700); */
  /* padding: 0.5rem; */
  border-radius: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  /* & svg {
    height: 2.3rem;
    width: 2.3rem;
  } */
`;

function CuisineOpenUI() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleOpenModal() {
    setIsModalOpen(true);
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }
  return (
    <OnStartUpCusine>
      <span>
        Bring yor <GradientHighlight>Delight Full</GradientHighlight> business
        online with just few simple steps 😊👌
      </span>

      <RequiredDocumentsDiv>
        <span>
          Be prepared with the following documents before starting the setup
        </span>
        <RequiredDocumentsDivSm>
          <RequiredDocumentsList>
            <li>
              <DocListItemIcon>
                <GradientIcon iconheight={3}>
                  <FaCheckCircle />
                </GradientIcon>
              </DocListItemIcon>{" "}
              PAN card details
            </li>
            <li>
              <DocListItemIcon>
                <GradientIcon iconheight={3}>
                  <FaCheckCircle />
                </GradientIcon>
              </DocListItemIcon>{" "}
              Business license
            </li>

            <li>
              <DocListItemIcon>
                <GradientIcon iconheight={3}>
                  <FaCheckCircle />
                </GradientIcon>
              </DocListItemIcon>{" "}
              Scanned images of documents ( PAN card, business license,
              owner&apos;s citizenship)
            </li>
            <li>
              <DocListItemIcon>
                <GradientIcon iconheight={3}>
                  <FaCheckCircle />
                </GradientIcon>
              </DocListItemIcon>{" "}
              Scanned images of owner holding the documents
            </li>
          </RequiredDocumentsList>
          <RequiredDocumentsList>
            <li>
              <DocListItemIcon>
                <GradientIcon iconheight={3}>
                  <FaCheckCircle />
                </GradientIcon>
              </DocListItemIcon>{" "}
              scanned images of owners holding the documents
            </li>
            <li>
              <DocListItemIcon>
                <GradientIcon iconheight={3}>
                  <FaCheckCircle />
                </GradientIcon>
              </DocListItemIcon>{" "}
              Business logo
            </li>
            <li>
              <DocListItemIcon>
                <GradientIcon iconheight={3}>
                  <FaCheckCircle />
                </GradientIcon>
              </DocListItemIcon>{" "}
              Scanned images of documents (PAN card, business license,
              owner&apos;s citizenship)
            </li>
            <li>
              <DocListItemIcon>
                <GradientIcon iconheight={3}>
                  <FaCheckCircle />
                </GradientIcon>
              </DocListItemIcon>{" "}
              Business highlight images
            </li>
          </RequiredDocumentsList>
        </RequiredDocumentsDivSm>
        <Modal>
          <Modal.Open open="open-cuisine-form">
            <Button size="large" variation="primary">
              Start setting up NOW !
            </Button>
          </Modal.Open>
          <Modal.ModalWindow name="open-cuisine-form">
            <CuisineOpenForm />
          </Modal.ModalWindow>
        </Modal>
      </RequiredDocumentsDiv>
    </OnStartUpCusine>
  );
}

export default CuisineOpenUI;
