import React, { useState } from "react";
import styled from "styled-components";
import Button from "./ButtonClickLink";
import { Modal, Image } from "react-bootstrap";

import ComunicadoIMG from "../../imagens/comunicado-rematricula-fies.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faPhoneAlt,
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  fab,
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare
);

export const ModalContainer = styled.div`
  .modal-open {
    padding-right: 0px !important;
    overflow-y: scroll;
  }
`;
export const ContainerBlocoModal = styled.section`
  max-width: 100%;
  /* margin: 0 auto; */
  display: flex;
  /* border: 1px solid #ccc; */
  flex-direction: row;
  margin-top: 10px;
  margin-left: 21px;
  @media screen and (min-width: 50px) and (max-width: 768px) {
    flex-direction: column;
    margin-top: unset;
    margin-left: unset;
  }
`;

const ModalMatricula = ({ id = "modal", onFecharModal, onAbreModal, tipo }) => {
  return (
    <ModalContainer>
      <Modal show={onAbreModal} onHide={onFecharModal} size="lg">
        {/* <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header> */}
        <Modal.Body>
          <ContainerBlocoModal>
            <Image src={ComunicadoIMG} />
          </ContainerBlocoModal>
        </Modal.Body>
        {/*    <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer> */}
      </Modal>
    </ModalContainer>
  );
};

export default ModalMatricula;
