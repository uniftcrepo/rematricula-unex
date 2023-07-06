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

const Documentos = () => {
  return (
    <Docs id="documentos">
      <Container>
      <Row>
        <Col md={3} className="texto">
          {" "}
          Documentos importantes
        </Col>
        <Col md={{ span: 4, offset: 1 }} className="button">
          <Button
            id="informe_matricula"
            cor="#fff"
            texto={"Informe de matrícula"}
            colorTexto="#0093FF"
            tamanho={"100%"}
            borderSolid={"2px solid #0093FF"}
            fonteSize={"18px"}
            padding={"0px 6px 0px 0px"}
            paddingMobile={"6px 22px 27px 20px"}
            height={"40px"}
            marginLeft={"unset"}
            marginTop={"unset"}
            componenteLink={false}
            link={"https://www.unex.edu.br/arquivos/rematricula/NAT_UNEX_INFORME DE REMATRICULA.pdf"}
            fonteWeight={"500"}
            onClick={() => {}}
            tamanhoMobile={"100%"}
            borderRadius={"16px"}
          />
           <Button
            id="rematricula_online"
            cor="#fff"
            texto={"Rematrícula Online"}
            colorTexto="#0093FF"
            tamanho={"100%"}
            borderSolid={"2px solid #0093FF"}
            fonteSize={"18px"}
            padding={"0px 6px 0px 0px"}
            paddingMobile={"6px 22px 27px 20px"}
            height={"40px"}
            marginLeft={"unset"}
            marginTop={"unset"}
            componenteLink={false}
            link={"https://www.unex.edu.br/arquivos/rematricula/NAT_UNEX_REMATRICULA ONLINE.pdf"}
            fonteWeight={"500"}
            onClick={() => {}}
            tamanhoMobile={"100%"}
            borderRadius={"16px"}
          />
           <Button
            id="negociacao_financeira"
            cor="#fff"
            texto={"Negociação Financeira"}
            colorTexto="#0093FF"
            tamanho={"100%"}
            borderSolid={"2px solid #0093FF"}
            fonteSize={"18px"}
            padding={"0px 6px 0px 0px"}
            paddingMobile={"6px 22px 27px 20px"}
            height={"40px"}
            marginLeft={"unset"}
            marginTop={"10px"}
            componenteLink={false}
            link={"https://www.unex.edu.br/arquivos/rematricula/NAT_UNEX_NEGOCIAÇÃO FINANCEIRA.pdf"}
            fonteWeight={"500"}
            onClick={() => {}}
            tamanhoMobile={"100%"}
            borderRadius={"16px"}
          />
           <Button
            id="consulta_de_turmas"
            cor="#fff"
            texto={"Consulta de turmas"}
            colorTexto="#0093FF"
            tamanho={"100%"}
            borderSolid={"2px solid #0093FF"}
            fonteSize={"18px"}
            padding={"0px 6px 0px 0px"}
            paddingMobile={"6px 22px 27px 20px"}
            height={"40px"}
            marginLeft={"unset"}
            marginTop={"10px"}
            componenteLink={false}
            link={"#"}
            fonteWeight={"500"}
            onClick={() => {}}
            tamanhoMobile={"100%"}
            borderRadius={"16px"}
          />
          <Button
            id="manual_fies"
            cor="#fff"
            texto={"Manual do FIES"}
            colorTexto="#0093FF"
            tamanho={"100%"}
            borderSolid={"2px solid #0093FF"}
            fonteSize={"18px"}
            padding={"0px 6px 0px 0px"}
            paddingMobile={"6px 22px 27px 20px"}
            height={"40px"}
            marginLeft={"unset"}
            marginTop={"10px"}
            componenteLink={false}
            link={"https://www.unex.edu.br/arquivos/rematricula/NAT_UNEX_CARTILHA FIES.pdf"}
            fonteWeight={"500"}
            onClick={() => {}}
            tamanhoMobile={"100%"}
            borderRadius={"16px"}
          />
          <Button
            id="manual_prouni"
            cor="#fff"
            texto={"Manual do PROUNI"}
            colorTexto="#0093FF"
            tamanho={"100%"}
            borderSolid={"2px solid #0093FF"}
            fonteSize={"18px"}
            padding={"0px 6px 0px 0px"}
            paddingMobile={"6px 22px 27px 20px"}
            height={"40px"}
            marginLeft={"unset"}
            marginTop={"unset"}
            componenteLink={false}
            link={"https://www.unex.edu.br/arquivos/rematricula/NAT_UNEX_CARTILHA PROUNI.pdf"}
            fonteWeight={"500"}
            onClick={() => {}}
            tamanhoMobile={"100%"}
            borderRadius={"16px"}
          />
        </Col>
      </Row>
      </Container>
    </Docs>
  );
};

export default Documentos;
