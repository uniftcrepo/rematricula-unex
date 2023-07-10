import React from "react";

import {
  Image,
  Navbar,
  Nav,
} from "react-bootstrap";

import styled from "styled-components";
import logoTop from "../imagens/logo.png";
import SetinhaAzul from "../imagens/setinha_azul.svg";

import ButtonHover from "../Components/elementos/ButtonHover";

import ImgEntreEmContatoHover from "../imagens/entre_em_contato_hover.svg";
import ImgEntreEmContato from "../imagens/entre_em_contato.svg";
import telefone from "../imagens/telefone.svg";
import "../styled/styles_novo.scss";
import "../styled/styles_drop.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from "./elementos/ButtonClickLink";



export const HeaderSite = styled.header`
  margin: 20px;
  .navbar-light .navbar-nav .nav-link {
    color: #525252 !important;
    font-weight: bold;
  }
  .navbar-light .navbar-nav .nav-link:hover {
    color: orange !important;
  }
  /*  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,<svg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'><path stroke='rgba(255,255,255, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/></svg>");
  } */
`;

export const BarraImageTopo = styled.div`
  margin-left: 35%;

  @media screen and (min-width: 50px) and (max-width: 768px) {
    margin-left: 0%;
  }
`;
export const BarraMenuTopo = styled.div`
  /*  width: 100%;
  margin: 8px; */
  background-color: #1c3661;

  .navbar-collapse {
    .navbar-nav {
      width: 100%;
      display: flex;
      justify-content: space-evenly;

      a {
        font-size: 12px;
        margin: auto;
        color: #fff;
        cursor: pointer;
      }
    }
  }

  .GruposImgContatos,
  .MenuFechar {
    display: none;
  }

  @media screen and (min-width: 50px) and (max-width: 768px) {
    margin-right: 1px;
    margin-left: -16px;
    margin-bottom: -8px;
    width: 100vh;
    margin-top: -9px;
    .navbar-collapse .navbar-nav {
      display: flex;
      padding: 50px 50px 0 50px;
      /*  div {
        margin-top: 50px;
      } */
      a {
        font-size:18px;
      }
    }
    hr {
      color: #0093ff;
      background-color: #002b4f;
      height: 2;
    }

    .show,
    .collapse {
      height: 100vh;
    }
    .collapsing {
      height: 100vh;
    }
    .GruposImgContatos {
      display: block;
      img {
        margin-top: 10px;
      }
    }
    .MenuFechar {
      display: block;
      margin: 43px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export const ConjuntoTop = styled.div`
  display: flex;
  flex-direction: row;
  .logoDiferencias {
    cursor: pointer;
  }
  > img {
    height: 60px;
    margin-top: 15px;
  }
  @media screen and (min-width: 50px) and (max-width: 768px) {
    .logoDiferencias > img {
      /* width: 70px; */
      height: 34px;
      margin-top: 15px;
      margin-left: -40px;
    }
  }
`;

export const ConjuntoButtonTel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    font-size: 16px;
    color: #fff;
    margin-left: 10px;
  }

  .butaodesktop {
    display: show;
  }
  .butaomobile {
    display: none;
  }

  @media (max-width: 700px) {
    margin-left: 10px;
    > div {
      font-size: 10px;
    }

    .butaodesktop {
      display: none !important;
    }
    .butaomobile {
      display: block !important;
    }
  }
`;

export const BarraMenuTopo1 = styled.div`
  /* position: fixed; */
  display: flex;
  padding: 10px;
  top: 0px;
  right: 0;
  left: 0;
  z-index: 1030;
  background: #fff;
  justify-content: space-between;
  height: 100px;
  align-items: center;
  @media screen and (min-width: 50px) and (max-width: 768px) {
    display: none;
  }
  padding-right: 0px !important;
`;

export const LogoTop = styled.span`
  width:61%;
  /* padding: 0px 160px; */
  a {
    margin-left: 30px;
  }
  span {
    margin-left: 11px;
  }
  img{
    cursor: pointer;
  }
`;

export const MenuTop = styled.span`
  a{
    color: #000;
    padding-top: 6px;
    display: flex;
    justify-content: center;
    img {
      padding-left: 5px;
      padding-bottom: 3px;
    }
  }
`;

export const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  .modal-open {
    padding-right: 0px !important;
    overflow-y: scroll;
  }
`;

export const TelefoneWhatzap = styled.div`
  @media screen and (min-width: 50px) and (max-width: 768px) {
    display: show;
    margin-right: 21px;
    margin-top: -14px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const LogoUNEXMobile = styled.div`
  @media screen and (min-width: 50px) and (max-width: 768px) {
    display: show;
    img {
      width: 164px;
      height: 43px;
      margin-left: 20px;
      margin-top: 14px;
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const LogosMobile = styled.div`
  @media screen and (min-width: 50px) and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-items: center;
    justify-content: space-around;
    width: 217px;
  }
`;

export const ContainerBlocoModal = styled.section`
  max-width: 100%;
  /* margin: 0 auto; */
  display: flex;
  /* border: 1px solid #ccc; */
  flex-direction: row;
  margin-top: 10px;
  @media screen and (min-width: 50px) and (max-width: 768px) {
    flex-direction: column;
  }
`;
export const TextoTituloModal = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  font-style: normal;
  @media screen and (min-width: 50px) and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const BlocoModal = styled.div`
  flex: 1;
  /* margin: 5px; */
  background: ${(props) => (props.background ? props.background : "#1c3661;")};
  text-align: center;
  font-size: 1.5em;
  color: #fff;
  > div {
    font-size: 18px;
    margin: 27px 0;
  }
`;

const Header = () => {
  const isMobile = window.innerWidth <= 500;

  return (
    <section >
     
      <BarraMenuTopo1>
        <ContainerTop className="container">
          

          <LogoTop>
          <Image src={logoTop} className="img-responsive" fluid onClick={() => window.open("https://aluno.unex.edu.br")}/>
           
              <ButtonHover Img={ImgEntreEmContato} ImgHover={ImgEntreEmContatoHover} onClick={() => window.open("https://aluno.unex.edu.br")}/>
           
              <span>
              <span>
            {/*   <a href="https://api.whatsapp.com/send?phone=557199982-4135&text=Ol%C3%A1,%20UNIFTC"> */}

                <Button
                  variant="primary"
                  id="duvida_tutorial"
                  cor="#fff"
                  texto={"NEGOCIE FÁCIL"}
                  tamanho={"25%"}
                  borderSolid={"2px solid #0093FF"}
                  colorTexto={"#000"}
                  fonteSize={"15px"}
                  padding={"0px 6px 0px 0px"}
                  paddingMobile={"6px 22px 27px 20px"}
                  height={"40px"}
                  marginLeft={"unset"}
                  marginTop={"unset"}
                  componenteLink={false}
                  link={"https://api.whatsapp.com/send?phone=557199982-4135&text=Ol%C3%A1,%20UNIFTC"}
                  fonteWeight={"500"}
                  onClick={() => { }}
                  tamanhoMobile={"100%"}
                  borderRadius={"16px"}
                  icon= {<FontAwesomeIcon icon="fa-brands fa-whatsapp" />}
                />

                {/* NEGOCIE FÁCIL <FontAwesomeIcon icon="fa-brands fa-whatsapp" /> */}
              {/* </a> */}
            </span>
           </span>
          </LogoTop>
          <MenuTop>
          <a
              href="https://portal.unex.edu.br/"
              target="_blank"
            >
           <div><p>Acessar Portal do Aluno</p></div>
           <div><Image src={SetinhaAzul} /></div>
           </a>
          </MenuTop>
        </ContainerTop>
      </BarraMenuTopo1>
      <HeaderSite id="home">
        <Navbar
          fixed="top"
          expand="lg"
          className={isMobile ? "topsecundario_novo" : ""}
        >
          <Navbar.Toggle
          ></Navbar.Toggle>
          <Navbar.Brand href="#home">
            <LogosMobile>
              <LogoUNEXMobile>
                <Image src={logoTop} />
              </LogoUNEXMobile>
            </LogosMobile>
          </Navbar.Brand>
          <TelefoneWhatzap>
            {" "}
            <a
              href="#"
            >
              <Image
                src={telefone}
                className="d-inline-block align-top vest-iniciar-conversa"
                alt="UNEX Whatsapp"
              />
            </a>
          </TelefoneWhatzap>
         
        </Navbar>
       
      </HeaderSite>
    
    </section>
  );
};

export default Header;
