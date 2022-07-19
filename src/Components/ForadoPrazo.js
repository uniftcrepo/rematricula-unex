import React from "react";

import { Col, Row, Container } from "react-bootstrap";
/* import CardInfo from "./elementos/CardInfo"; */
import Button from "./elementos/ButtonClickLink";

import styled from "styled-components";

export const Docs = styled.div`
  margin-top: 120px;
  margin-bottom: 137px;
  #informe_matricula, #manual_fies, #manual_prouni{
      margin-bottom: 10px; margin
  }

  .texto {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;

    color: #1c3661;
  }
  @media screen and (min-width: 50px) and (max-width: 768px) {
    margin-top: 60px;
    margin-bottom: 61px;
    .texto {
      font-size: 22px;
    }
  }
`;

const ForadoPrazo = () => {
  return (
    <Docs id="foradoprazo">
      <Container>
      <Row>
        <Col md={3} className="texto">
          {" "}
          Rematricula fora do prazo
        </Col>
        <Col md={{ span: 4, offset: 1 }} className="button">
          <Button
            id="informe_matricula"
            cor="#fff"
            texto={"PERDEU O PRAZO DA REMATRÍCULA 2022.2?"}
            colorTexto="#0093FF"
            tamanho={"100%"}
            borderSolid={"2px solid #0093FF"}
            fonteSize={"14px"}
            padding={"0px 6px 0px 0px"}
            paddingMobile={"9px 22px 27px 20px"}
            height={"40px"}
            marginLeft={"unset"}
            marginTop={"unset"}
            componenteLink={false}
            /* link={"https://youtu.be/mczjZWlYqIc"} */
            fonteWeight={"500"}
            onClick={() => window.open("https://youtu.be/mczjZWlYqIc")}
            tamanhoMobile={"100%"}
            borderRadius={"16px"}
            fonteSizeMobile={"13px"}
          />
          <Button
            id="manual_fies"
            cor="#fff"
            texto={"AINDA DÁ TEMPO - REMATRÍCULA 2022.2"}
            colorTexto="#0093FF"
            tamanho={"100%"}
            borderSolid={"2px solid #0093FF"}
            fonteSize={"13px"}
            padding={"0px 6px 0px 0px"}
            paddingMobile={"9px 22px 27px 20px"}
            height={"40px"}
            marginLeft={"unset"}
            marginTop={"unset"}
            componenteLink={false}
            /* link={"https://youtu.be/7EEG51ZUmWE"} */
            onClick={() => window.open("https://youtu.be/7EEG51ZUmWE")}
            fonteWeight={"500"}
            
            tamanhoMobile={"100%"}
            borderRadius={"16px"}
          />
        </Col>
      </Row>
      </Container>
    </Docs>
  );
};

export default ForadoPrazo;
