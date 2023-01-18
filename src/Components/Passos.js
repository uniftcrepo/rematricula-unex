import React from "react";

import { Col, Row, Container } from "react-bootstrap";
/* import CardInfo from "./elementos/CardInfo"; */
import Triangulo from "../imagens/triangulo.png";
import Button from "./elementos/ButtonClickLink";
import SetinhaBranca from "../imagens/setinha_branca.svg";
import styled from "styled-components";

export const Card1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 64px;
  font-size: 18px;
  > div {
    padding-bottom: 10px;
  }
  > div:nth-child(1) {
    color: #0093ff;
    font-style: normal;
    font-weight: bold;
  }
  > div:nth-child(2) {
    color: #ccc;
    font-style: normal;
  }
  > div:nth-child(3) {
    color: #000;
    font-style: normal;
    font-weight: bold;
  }
`;

export const Nav = styled.div`
  display: none;
  position: -webkit-sticky;
  position: sticky;
  z-index: 100;
  top: 0;
  left: 0;
  background: #97e70e;
  height: 60px;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;

  > ::after {
    content: "";
    position: absolute;
    z-index: 1;
    top: 100%;
    left: 0;
    right: 0;
    border-bottom: 1px solid rgba(43, 47, 57, 0.1);
  }

  > ul {
    width: 100%;
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 60px; */
  }

  > ul li {
    overflow: hidden;
    /* padding: 0 6%; */
    text-align: center;
  }

  > ul li a {
    display: block;
    padding: 22px 88px;
    font-size: 0.75em;
    font-weight: 600;
    /* text-transform: uppercase; */
    letter-spacing: 1px;
    line-height: 1.34;
    color: #fff;
    /* opacity: .4; */
    position: relative;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  > ul li a:hover {
    opacity: 0.8;
  }

  > ul li.active a {
    opacity: 1;
    /*  color: #387CDF; */
    background: rgba(0, 0, 0, 0.2);
    /* height: 60px; */
  }

  > ul li.active a::after {
    content: " ";
    background-image: url(${Triangulo});
    position: absolute;
    z-index: 2;
    top: 20%;
    left: 50%;
    width: 1.25rem;
    height: 1.25rem;
    transform: translate(-50%, -58%);
    background-repeat: no-repeat;
  }
  @media screen and (max-width: 1199px) {
    > ul li a {
      padding: 22px 79px;
    }
  }
  @media screen and (max-width: 1084px) {
    > ul li a {
      padding: 22px 73px;
    }
  }
  @media (min-width: 62em) {
    display: block;
  }
`;

export const Passo1 = styled.div`
  background-color: #1c3661;
  padding: 60px 0 118px 0;
  .texto1 {
    color: #fff;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
  }

  .texto2 {
    color: #97e70e;
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: -0.05em;
    text-transform: uppercase;
  }

  .texto3 {
    display: flex;
    flex-direction: column;
    color: #fff;
  }

  .texto3 div:nth-child(1) {
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: -0.02em;
    margin-bottom: 15px;
  }
  .texto3 div:nth-child(2) {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
  }

  #acessar_portal_aluno {
    margin-top: 16px;
    > img {
      margin-top: -4px;
      margin-left: 5px;
    }
  }
  #informe_rematricula {
    margin-top: 5px;
  }

  @media screen and (min-width: 50px) and (max-width: 768px) {
    padding-bottom: 50px;
    .texto1 {
      font-size: 22px;
    }
    .texto2 {
      font-size: 21px;
      line-height: 37px;
      /* identical to box height */

      letter-spacing: -0.05em;
    }
    .texto3 div:nth-child(1) {
      font-size: 21px;
    }
    .texto3 div:nth-child(2) {
      font-size: 14px;
    }
    #acessar_portal_aluno {
      margin-bottom: 2px;
    }
    #informe_rematricula {
      margin-top: 5px;
    }
  }
`;

export const Passo2 = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1c3661;
  padding: 60px 0 67px 0;
  .texto2 {
    color: #97e70e;
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: -0.05em;
    text-transform: uppercase;
  }
  .texto3 {
    display: flex;
    flex-direction: column;
    color: #fff;
  }
  .texto3 div:nth-child(1) {
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: -0.02em;
    margin-bottom: 15px;
  }
  .texto3 div:nth-child(2) {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
  }
  .texto3 div:nth-child(3) {
    margin-top: 49px;
  }

  #negociacao_financeira {
    margin: 10px 0;
  }
  @media screen and (min-width: 50px) and (max-width: 768px) {
    padding-bottom: 50px;
    .texto1 {
      font-size: 22px;
    }
    .texto2 {
      font-size: 21px;
      line-height: 37px;
      /* identical to box height */

      letter-spacing: -0.05em;
    }
    .texto3 div:nth-child(1) {
      font-size: 21px;
    }
    .texto3 div:nth-child(2) {
      font-size: 14px;
      margin-bottom: 10px;
    }
  }
`;
export const Passo3 = styled.div`
  background: #1c3661;
  padding: 60px 0 67px 0;
  .texto2 {
    color: #97e70e;
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: -0.05em;
    text-transform: uppercase;
  }
  .texto3 {
    display: flex;
    flex-direction: column;
    color: #fff;
  }
  .texto3 div:nth-child(1) {
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: -0.02em;
    margin-bottom: 30px;
  }
  .texto3 div:nth-child(2) {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
  }
  .texto3 div:nth-child(3) {
    margin-top: 10px;
  }

  #duvida_tutorial {
    margin: -10px 0;
  }

  @media screen and (min-width: 50px) and (max-width: 768px) {
    padding-bottom: 60px;
    .texto1 {
      font-size: 22px;
    }
    .texto2 {
      font-size: 21px;
      line-height: 37px;
      /* identical to box height */

      letter-spacing: -0.05em;
    }
    .texto3 div:nth-child(1) {
      font-size: 21px;
    }
    .texto3 div:nth-child(2) {
      font-size: 14px;
    }
    #duvida_tutorial {
      margin: 0;
    }
  }
`;
export const Passo4 = styled.div`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #1c3661;
  padding: 60px 0 67px 0;
  .texto2 {
    color: #97e70e;
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: -0.05em;
    text-transform: uppercase;
  }
  .texto3 {
    display: flex;
    flex-direction: column;
    color: #fff;
  }
  .texto3 div:nth-child(1) {
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: -0.02em;
    margin-bottom: 30px;
  }
  .texto3 div:nth-child(2) {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
  }
  .texto3 div:nth-child(3) {
    margin-top: 20px;
  }

  #duvida_tutorial {
    margin: -10px 0;

    > img {
      margin-top: -4px;
      margin-left: 5px;
    }
  }

  @media screen and (min-width: 50px) and (max-width: 768px) {
    padding-bottom: 60px;
    .texto1 {
      font-size: 22px;
    }
    .texto2 {
      font-size: 20px;
      line-height: 37px;
      /* identical to box height */

      letter-spacing: -0.05em;
    }
    .texto3 div:nth-child(1) {
      font-size: 14px;
    }
    .texto3 div:nth-child(2) {
      font-size: 14px;
      margin-bottom: 15px;
    }
    #duvida_tutorial {
      margin: 0;
    }
  }
`;
export const Passo5 = styled.div`
  background: #1c3661;
  padding: 60px 0 67px 0;
  .texto2 {
    color: #97e70e;
    font-style: normal;
    font-weight: 900;
    font-size: 36px;
    line-height: 42px;
    letter-spacing: -0.05em;
    text-transform: uppercase;
  }
  .texto3 {
    display: flex;
    flex-direction: column;
    color: #fff;
  }
  .texto3 div:nth-child(1) {
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: -0.02em;
    margin-bottom: 30px;
  }
  .texto3 div:nth-child(2) {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
  }
  .texto3 div:nth-child(3) {
    margin-top: 20px;
  }

  #duvida_tutorial {
    margin: -10px 0;
  }
  @media screen and (min-width: 50px) and (max-width: 768px) {
    padding-bottom: 60px;
    .texto1 {
      font-size: 22px;
    }
    .texto2 {
      font-size: 20px;
      line-height: 37px;
      /* identical to box height */

      letter-spacing: -0.05em;
    }
    .texto3 div:nth-child(1) {
      font-size: 14px;
    }
    .texto3 div:nth-child(2) {
      font-size: 14px;
      margin-bottom: 15px;
    }
    #duvida_tutorial {
      margin: 0;
    }
  }
`;

const Passos = () => {
  const isMobile = window.innerWidth <= 500;

  function grupoButtonPasso1() {
    return (
      <div>
        <Button
          variant="primary"
          id="acessar_portal_aluno"
          cor="#0093FF"
          texto={"Acessar Portal do Aluno"}
          tamanho={"100%"}
          borderSolid={"2px solid #0093FF"}
          colorTexto={"#fff"}
          fonteSize={"18px"}
          padding={"0px 6px 0px 0px"}
          paddingMobile={"6px 22px 27px 20px"}
          height={"40px"}
          marginLeft={"unset"}
          marginTop={"unset"}
          componenteLink={false}
          /* link={"https://aluno.UNEX.edu.br/"} */
          fonteWeight={"500"}
          onClick={() => window.open("https://aluno.unex.edu.br")}
          tamanhoMobile={"100%"}
          borderRadius={"16px"}
          setinha={SetinhaBranca}
        />
        <Button
          variant="primary"
          id="informe_rematricula"
          cor="#1c3661"
          texto={"Informe de rematrícula"}
          tamanho={"100%"}
          borderSolid={"2px solid #0093FF"}
          colorTexto={"#fff"}
          fonteSize={"18px"}
          padding={"0px 6px 0px 0px"}
          paddingMobile={"6px 22px 27px 20px"}
          height={"40px"}
          marginLeft={"unset"}
          marginTop={"unset"}
          componenteLink={false}
          link={
            "https://www.unex.edu.br/arquivos/rematricula/PRI_UNEX_INFORME DE REMATRÍCULA.pdf"
          }
          fonteWeight={"500"}
          onClick={() => {}}
          tamanhoMobile={"100%"}
          borderRadius={"16px"}
        />
      </div>
    );
  }
  function grupoButtonVideoPasso2() {
    return (
      <div>
        <div>
         {/*  <iframe
            width={!isMobile ? "535" : "100%"}
            height={!isMobile ? "305" : "243"}
            src="https://www.youtube.com/embed/UHSBo11AVjA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe> */}
        </div>
        <div>
          <Button
            variant="primary"
            id="negociacao_financeira"
            cor="#1c3661"
            texto={"Negociação financeira / Pagamento com mais de um cartão"}
            tamanho={"100%"}
            borderSolid={"2px solid #0093FF"}
            colorTexto={"#fff"}
            fonteSize={"18px"}
            padding={"0px 6px 0px 0px"}
            paddingMobile={"0px 22px 1px 20px"}
            height={"40px"}
            heightMobile={"46px"}

            marginLeft={"unset"}
            marginTop={"unset"}
            componenteLink={false}
            link={
              "https://www.unex.edu.br/arquivos/rematricula/NAT_UNEX_NEGOCIAÇÃO FINANCEIRA.pdf"
            }
            fonteWeight={"500"}
            /*   onClick={() => {}} */
            tamanhoMobile={"100%"}
            borderRadius={"16px"}
          />
          {/*   <Button
            variant="primary"
            id="como_pagar_dois_cartoes"
            cor="#1c3661"
            texto={"Como pagar com dois cartões"}
            tamanho={"100%"}
            borderSolid={"2px solid #0093FF"}
            colorTexto={"#fff"}
            fonteSize={"18px"}
            padding={"0px 6px 0px 0px"}
            paddingMobile={"6px 22px 27px 20px"}
            height={"40px"}
            marginLeft={"unset"}
            marginTop={"unset"}
            componenteLink={false}
            link={"#"}
            fonteWeight={"500"}
            onClick={() => {}}
            tamanhoMobile={"100%"}
            borderRadius={"16px"}
          /> */}
        </div>
      </div>
    );
  }

  function grupoButtonVideoPasso3() {
    return (
      <div>
        {" "}
       {/*  <div>
          <iframe
            width={!isMobile ? "535" : "100%"}
            height={!isMobile ? "305" : "243"}
            src="https://www.youtube.com/embed/HawGAgr1rrA"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div> */}
        <div>
          <Button
            variant="primary"
            id="duvida_tutorial"
            cor="#1c3661"
            texto={"Ficou em dúvida? Confira o tutorial."}
            tamanho={"100%"}
            borderSolid={"2px solid #0093FF"}
            colorTexto={"#fff"}
            fonteSize={"18px"}
            padding={"0px 6px 0px 0px"}
            paddingMobile={"6px 22px 27px 20px"}
            height={"40px"}
            marginLeft={"unset"}
            marginTop={"unset"}
            componenteLink={false}
            link={"https://www.unex.edu.br/arquivos/rematricula/NAT_UNEX_REMATRÍCULA ONLINE.pdf"}
            fonteWeight={"500"}
            onClick={() => {}}
            tamanhoMobile={"100%"}
            borderRadius={"16px"}
          />
        </div>
      </div>
    );
  }
  function grupoButtonPasso4() {
    return (
      <div>
        <Button
          variant="primary"
          id="duvida_tutorial"
          cor="#0093FF"
          texto={"Acessar Portal do Aluno"}
          tamanho={"100%"}
          borderSolid={"2px solid #0093FF"}
          colorTexto={"#fff"}
          fonteSize={"18px"}
          padding={"0px 6px 0px 0px"}
          paddingMobile={"6px 22px 27px 20px"}
          height={"40px"}
          marginLeft={"unset"}
          marginTop={"unset"}
          componenteLink={false}
          /* link={"https://aluno.UNEX.edu.br"} */
          fonteWeight={"500"}
          onClick={() => window.open("https://aluno.unex.edu.br")}
          tamanhoMobile={"100%"}
          borderRadius={"16px"}
          setinha={SetinhaBranca}
        />
      </div>
    );
  }
  function grupoButtonPasso5() {
    return (
      <div>
        <Button
          variant="primary"
          id="duvida_tutorial"
          cor="#0093FF"
          texto={"Acesse o calendário acadêmico"}
          tamanho={"100%"}
          borderSolid={"2px solid #0093FF"}
          colorTexto={"#fff"}
          fonteSize={"18px"}
          padding={"0px 6px 0px 0px"}
          paddingMobile={"10px 22px 27px 20px"}
          height={"40px"}
          marginLeft={"unset"}
          marginTop={"unset"}
          componenteLink={false}
          /* link={"https://aluno.UNEX.edu.br"} */
          fonteWeight={"500"}
          onClick={() => window.open("https://www.unex.edu.br/arquivos/rematricula/UNEX_CALENDÁRIO ACADÊMICO VETERANOS_2023.1.pdf")}
          tamanhoMobile={"100%"}
          borderRadius={"16px"}
          setinha={SetinhaBranca}
          fonteSizeMobile={"11px"}
        />
      </div>
    );
  }
  return (
    <section id="passos" className="body_content">
      <Nav className="page_nav">
        <ul>
          <li className="active">
            <a href="#1passo" className="sub_nav">
              1º passo
            </a>
          </li>
          <li className="">
            <a href="#2passo" className="sub_nav">
              2º passo
            </a>
          </li>
          <li className="">
            <a href="#3passo" className="sub_nav">
              3º passo
            </a>
          </li>
          <li className="">
            <a href="#4passo" className="sub_nav">
              4º passo
            </a>
          </li>
          <li className="">
            <a href="#5passo" className="sub_nav">
              5º passo
            </a>
          </li>
        </ul>
      </Nav>

      <Passo1 id="1passo">
        <Container>
          <Row>
            <Col md={4} xs={12} className="texto1">
              Se ligue no passo-a-passo da Rematrícula
            </Col>
            <Col md={2} xs={4} className="texto2">
              1º passo
            </Col>
            <Col md={6} xs={8} className="texto3">
              <div>
                {" "}
                Acesse o Portal do Aluno e clique no menu "Rematrícula” para
                acessar o sistema.
              </div>
              <div>
                {" "}
                Leia o{" "}
                <a href="https://www.unex.edu.br/arquivos/rematricula/NAT_UNEX_REMATRÍCULA ONLINE.pdf">
                  Informe de matrícula
                </a>{" "}
                e confira se você está apto à rematrícula.
              </div>
              {!isMobile && grupoButtonPasso1()}
            </Col>
            {isMobile && <Col xs={12}>{grupoButtonPasso1()}</Col>}
          </Row>
        </Container>
      </Passo1>
      <Passo2 id="2passo">
        <Container>
          <Row>
            <Col md={{ span: 2, offset: 4 }} xs={4} className="texto2">
              2º passo
            </Col>
            <Col md={6} xs={8} className="texto3">
              <div>
                {" "}
                Realize o pagamento da primeira mensalidade ou do semestre
                letivo.
              </div>
              <div>
                {" "}
                Tem pendências financeiras? Sem problemas, conheça as formas de
                <a href="https://www.unex.edu.br/arquivos/rematricula/NAT_UNEX_NEGOCIAÇÃO FINANCEIRA.pdf">
                  {" "}
                  negociação financeira.
                </a>
              </div>
              {!isMobile && grupoButtonVideoPasso2()}
            </Col>
            {isMobile && <Col xs={12}>{grupoButtonVideoPasso2()}</Col>}
          </Row>
        </Container>
      </Passo2>
      <Passo3 id="3passo">
        <Container>
          <Row>
            <Col md={{ span: 2, offset: 4 }} xs={4} className="texto2">
              3º passo
            </Col>
            <Col md={6} xs={8} className="texto3">
              <div>
                {" "}
                Pronto! Com a situação financeira concluída, escolha as
                disciplinas, horários e turmas para construir a sua grade.
              </div>
              {!isMobile && grupoButtonVideoPasso3()}
            </Col>
            {isMobile && <Col xs={12}>{grupoButtonVideoPasso3()}</Col>}
          </Row>
        </Container>
      </Passo3>
      <Passo4 id="4passo">
        <Container>
          <Row>
            <Col md={{ span: 2, offset: 4 }} xs={4} className="texto2">
              4º passo
            </Col>
            <Col md={6} xs={8} className="texto3">
              <div> Você está a um passo de concluir a sua rematrícula!</div>
              <div>
                {" "}
                Para concluir o processo de rematrícula é necessário que você
                aceite o contrato da sua rematrícula no portal do aluno.
              </div>
              {!isMobile && grupoButtonPasso4()}
            </Col>
            {isMobile && <Col xs={12}>{grupoButtonPasso4()}</Col>}
          </Row>
        </Container>
      </Passo4>
      <Passo5 id="5passo">
        <Container>
          <Row>
            <Col md={{ span: 2, offset: 4 }} xs={4} className="texto2">
              5º passo
            </Col>
            <Col md={6} xs={8} className="texto3">
              <div>
                {" "}
                Parabéns! Você concluiu todas as etapas da sua rematrícula com sucesso! Agora é só esperar o início das aulas e seguir movimentando conhecimento.
              </div>
              {!isMobile && grupoButtonPasso5()}
            </Col>
            {isMobile && <Col xs={12}>{grupoButtonPasso5()}</Col>}
          </Row>
        </Container>
      </Passo5>
    </section>
  );
};

export default Passos;
