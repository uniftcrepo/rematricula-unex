import React from "react";

import { Col, Row, Container } from "react-bootstrap";
import CardInfo from "../Components/elementos/CardInfo";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// swiper bundle styles
import "swiper/swiper-bundle.min.css";

import styled from "styled-components";
SwiperCore.use([Pagination]);

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
    color: #666;
    font-style: normal;
  }
  > div:nth-child(3) {
    color: #000;
    font-style: normal;
    font-weight: bold;
  }
  @media screen and (min-width: 50px) and (max-width: 768px) {
    margin-right: 0px;
    margin-left: 2%;
    margin-bottom: 20px;
  }
`;

export const BodyContainer = styled.div`
  margin-bottom: 120px;
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
  .swiper-container {
    padding: 0px 0px 38px;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .exeto_medicina {
    display: flex;
    flex-direction: column;
    align-items: end;

    > p {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 27px;
      margin-right: 61px;
      margin-top: -24px;
    }
  }
  @media screen and (min-width: 50px) and (max-width: 768px) {
    .exeto_medicina p {
      margin-top: -34px;
      font-size: 10px;
    }
    margin-bottom: 30px;
  }
`;

const Avisos = () => {
  const isMobile = window.innerWidth <= 500;

  const dataPrevista = () => {
    var date1 = new Date();
    var date2 = new Date("2022-07-24");
    if (date1 >= date2) {
      return "desligado";
    }
    return "ligado";
  };

  return (
    <section id="avisos">
      <Container>
        <BodyContainer>
          {!isMobile ? (
            <Row>
              <Col md={4}>
                <Card1>
                  <div>Rematrícula UNEX 2022.2</div>
                  <div>
                    Você já começou a trajetória para o futuro que escolheu
                    trilhar. Agora é só manter o ritmo até a grande realização
                    profissional.{" "}
                  </div>
                  <div>Renove. Movimente. Evolua.</div>
                </Card1>
              </Col>
              <Col md={4}>
                <CardInfo
                  header={"DENTRO DO PRAZO"}
                  title={"07/07 a 23/07"}
                  text={
                    " Você que não deixa o seu futuro pra depois: <strong>quanto mais rápido fizer sua rematrícula mais disciplinas estarão disponíveis.</strong>"
                  }
                  forma={dataPrevista()}
                  footer={false}
                />
              </Col>
              <Col md={4}>
                <CardInfo
                  header={"FORA DO PRAZO"}
                  title={"25/07 a 19/08"}
                  text={
                    "<strong>Não deixe seu futuro pra depois</strong>! Faça a sua rematrícula."
                  }
                  forma={"ligado"}
                />
              </Col>
            </Row>
          ) : (
            <>
              <Container>
                <Card1>
                  <div>Rematrícula UNEX 2022.2</div>
                  <div>
                    Você já começou a trajetória para o futuro que escolheu
                    trilhar. Agora é só manter o ritmo até a grande realização
                    profissional.{" "}
                  </div>
                  <div>Renove. Movimente. Evolua.</div>
                </Card1>
              </Container>
              <Swiper
                slidesPerView={"auto"}
                spaceBetween={-15}
                pagination={{
                  clickable: true,
                }}
                className="mySwiper"
              >
                <SwiperSlide>
                  <CardInfo
                    header={"DENTRO DO PRAZO"}
                    title={"07/07 a 23/07"}
                    text={
                      " Você que não deixa o seu futuro pra depois: <b>quanto mais rápido fizer sua rematrícula mais disciplinas estarão disponíveis.</b>"
                    }
                    forma={dataPrevista()}
                    footer={false}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <CardInfo
                    header={"FORA DO PRAZO"}
                    title={"25/07 a 19/08"}
                    text={
                      "<b>Não deixe seu futuro pra depois! </b>Faça a sua rematrícula."
                    }
                    forma={"ligado"}
                  />
                </SwiperSlide>
              </Swiper>
            </>
          )}
          <Row>
            <Col className="exeto_medicina">
              <p>* Exceto Medicina</p>
            </Col>
            {/*  {!isMobile && ( <Col xs={12} md={4} className="exeto_medicina">
              <p>* Exceto Medicina</p>
            </Col>)} */}
          </Row>
        </BodyContainer>
      </Container>
    </section>
  );
};

export default Avisos;
