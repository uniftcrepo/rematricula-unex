import React, { useEffect, useState } from 'react'
import { Image, Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import styled from 'styled-components'
import ButtonHover from '../Components/elementos/ButtonHover'
import IMGBanner from '../imagens/banner-desktop-unex.png'
import IMGBannerMob from '../imagens/mob/banner-mobile-unex.png'
import IMGBannerMedicina from '../imagens/banner-desktop-medicina-unex.png'
import IMGBannerMedicinaMob from '../imagens/mob/banner-mobile-medicina-unex.png'
import IMGVejaVideo from '../imagens/veja_video.png'
import IMGVejaVideoHover from '../imagens/veja_video.png'

export const BannerDiv = styled.div`
  margin-letf: auto;
  margin-right: auto;
  margin-bottom: 120px;
  text-align: center;

  .carousel-control-prev-icon, .carousel-control-next-icon {
    background-color: rgb(151, 231, 14);
  }

  @media screen and (min-width: 50px) and (max-width: 768px) {
    margin-top: 65px;
    margin-bottom: 30px;
  }
  > div {
    position: relative;
    flex-shrink: 0;
    width: 100%;
  }
`

export const ConsultorNome = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  @media screen and (min-width: 50px) and (max-width: 768px) {
    font-size: 21px;
    line-height: 25px;
  }
`
export const Complemento = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  @media screen and (min-width: 50px) and (max-width: 768px) {
    font-size: 12px;
  }
`

export const Avatar = styled.span`
  width: max(45px, min(170px, 22vw));
  height: max(45px, min(170px, 22vw));
  /*  border: 3px solid #fff;
  border-radius: 50%; */

  position: absolute;
  bottom: max(-20px, -10vw);
  cursor: pointer;
  left: max(126px, min(954px, 46vw));
  /* right: max(442px, -10vw); */
  > :hover {
    opacity: 0.5;
    transition: 0.5s ease;
  }
  /* background-repeat: no-repeat;
  background-position: center; */
  /* left: max(70px, -10vw); */
  > span img {
    width: 274px;
  }
  @media screen and (min-width: 1074px) {
    left: max(100px, min(103px, 46vw));
    bottom: max(1px, 0vw);
  }
  @media screen and (min-width: 1254px) {
    left: max(100px, min(126px, 46vw));
    bottom: max(1px, 1vw);
  }
  @media screen and (min-width: 1470px) {
    bottom: max(-20px, 2vw);
    left: max(126px, min(175px, 46vw));
  }
  @media screen and (min-width: 1653px) {
    bottom: max(-20px, 2vw);
    left: max(126px, min(271px, 46vw));
  }
  @media screen and (min-width: 1843px) {
    bottom: max(-20px, 2vw);
    left: max(126px, min(371px, 46vw));
  }

  @media screen and (min-width: 1912px) {
    bottom: max(-20px, 2vw);
    left: max(126px, min(419px, 46vw));
  }
`

const Banner = ({ match }) => {
  const isMobile = window.innerWidth <= 500
  return (
    <>
      <BannerDiv>
        <div className='d-none d-lg-block d-sm-block d-print-block'>
         
          <Carousel  >
            <Carousel.Item>
            <Image src={IMGBanner} fluid />
            </Carousel.Item>
            <Carousel.Item>
            <Image src={IMGBannerMedicina} fluid />
            </Carousel.Item>
            
          </Carousel>
        </div>

        <div className='d-block d-sm-none'>
          <div>
          <Carousel  >
            <Carousel.Item>
            <Image src={IMGBannerMob} fluid />
            </Carousel.Item>
            <Carousel.Item>
            <Image src={IMGBannerMedicinaMob} fluid />
            </Carousel.Item>
            
          </Carousel>
          </div>
        </div>
      </BannerDiv>
    </>
  )
}

export default Banner
