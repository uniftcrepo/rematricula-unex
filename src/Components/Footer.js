import React, { useState, useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import logoRodape from "../imagens/logo.png";
import whatsapp from "../imagens/rodape_whatsapp.svg";
import linkdin from "../imagens/rodape_linkdin.svg";
import facebook from "../imagens/rodape_facebook.svg";
import instagram from "../imagens/rodape_instagram.svg";
import youtube from "../imagens/rodape_youtube.svg";
import styled from "styled-components";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonHover from "../Components/elementos/ButtonHover";

import ImgEntreEmContatoHover from "../imagens/entre_em_contato_hover.svg";
import ImgEntreEmContato from "../imagens/entre_em_contato.svg";

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

export const Rodape = styled.div`
  margin-top: 60px;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  color: #666666;
  .footer-container .links a:hover {
    color: #000;
    text-decoration-line: underline !important;
  }

  background-color: #fff;

  .footer_mobile {
    display: none;
  }
  .footer_desktop {
    display: block;
    height: 290px;
    font-size: 14px;
    font-weight: 400;
    width: 100%;
  }

  .rodape {
    font-size: 12px;
    font-weight: 400;
    color: #666666;
    text-align: center;
    height: 60px;
    background-color: #fff;
    padding-top: 23px;
    border-top: 1px solid rgba(0, 0, 0, 0.25);
    > span a {
      color: #000;
      text-decoration-line: underline !important;
    }
  }

  /* .footer .rede-sociais {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height:100%;
} */
  .rede-sociais .footer-contato,
  .footer-contato-texto {
    margin-top: 30px;
    font-size: 10px;
  }
  .rede-sociais .footer-contato a {
    margin-right: 17px;
  }

  .rede-sociais .logo-rodape img {
    cursor: pointer;
  }
  .footer-container {
    padding-top: 50px;
  }
  .footer-container .grupo {
    display: grid;
    grid-template-columns: 242px 612px 164px;
  }

  .footer-container .links {
    display: grid;
    grid-template-columns: 292px 238px;
    margin-left: 40px;
  }

  .footer-fdi p:nth-child(1) {
    color: #000000;
    font-weight: bold;
  }
  .footer-fdi p,
  .veja-tambem p {
    margin-bottom: 13px !important;
  }

  .footer-fdi p a {
    color: #666666;
    text-decoration: none;
    font-size: 14px;
  }

  .veja-tambem div:nth-child(1) {
    color: #000000;
    margin-bottom: 14px;
    font-weight: bold;
  }
  .veja-tambem div:nth-child(2) a {
    color: #666666;
    text-decoration: none !important;
    font-size: 14px;
  }

  .atendimento .atendimento-title,
  .atendimento .atendimento-whatsapp,
  .atendimento .atendimento-contato {
    color: #505050;
    margin-bottom: 19px;
  }
  .atendimento .atendimento-title {
    color: #000;
    font-weight: bold;
  }
  .atendimento div:nth-child(3) a {
    color: #cccccc;
    text-decoration: none !important;
    margin-left: 19px;
  }
  .atendimento-whatsapp span img {
      cursor: pointer;
    }

  /*FOOTER*/

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /*# sourceMappingURL=style.css.map */
  @media screen and (min-width: 50px) and (max-width: 768px) {
    padding-left: 6px;
    background-color: #fff;
    height: 608px;
    .footer_desktop {
      height: 465px;
    }
    .footer-container .grupo {
      grid-template-columns: 1fr;
      grid-template-rows: 104px 215px 64px 150px;
    }
    .rede-sociais {
      display: grid;
      grid-template-columns: 0px 194px 126px;
      row-gap: 20px;
    }
    .rede-sociais .footer-contato-texto {
      margin-top: unset;
    }
    .rede-sociais .footer-contato a {
      margin-top: 30px;
      margin-right: 14px;
      font-size: 10px;
    }
    .footer_novo .containerRodapeMobile {
      padding: 38px;
    }

    .footer_novo .logoRodapeMobile img {
      margin-left: -20px;
    }

    .texto-imes {
      color: #fff;
      font-weight: 400;
      font-size: 10px;
    }
    .footer-linha {
      border-color: #333333;
    }
    .footer-fdi p {
      color: #666666 !important;
      font-weight: 300;
      font-size: 12px;
    }

    .footer-fdi p a {
      color: #666666 !important;
      text-decoration: none;
      font-weight: 300;
      font-size: 12px;
    }
    .footer-contato {
      display: flex;
      flex-direction: row;
      margin-bottom: 25px;
    }
    .footer-container .links {
      grid-template-columns: 185px 154px;
      margin-left: unset;
      font-size: 12px;
    }
    .veja-tambem {
      font-size: 12px;
    }
    .veja-tambem div:nth-child(2) a {
      font-size: 12px;
    }

    .atendimento-title {
      grid-area: atendimento-title;
    }
    .atendimento-whatsapp {
      grid-area: atendimento-whatsapp;
      
    }
    
    .atendimento-contato {
      grid-area: atendimento-contato;
    }
    .atendimento {
      display: grid;
      grid-template-columns: 58% 32% 0%;
      grid-template-areas:
        "atendimento-title atendimento-title"
        "atendimento-whatsapp atendimento-contato";
    }

    .footer-fdi p:nth-child(1) {
      color: #000 !important;
    }

    .rodape {
    }
  }
`;

const Footer = () => {
  const isMobile = window.innerWidth <= 500;

  return (
    <>
      <Rodape className=" ">
        <div className="container footer-container footer_desktop">
          <div className="grupo">
            <div className="rede-sociais">
              <div className="logo-rodape">
                <img
                  src={logoRodape}
                  onClick={() => window.open("https://aluno.uniftc.edu.br")}
                />
              </div>
              <div className="footer-contato">
                <a href="https://api.whatsapp.com/send?phone=5571988357245&amp;text=Ol%C3%A1,%20uniftc">
                  <img src={whatsapp} className="" />
                </a>
                <a href="https://www.instagram.com/redeuniftc/" target="_blank">
                  <img src={linkdin} className="" />
                </a>
                <a
                  href="https://www.facebook.com/uniftcoficial"
                  target="_blank"
                >
                  <img src={facebook} className="" />
                </a>
                <a
                  href="https://www.linkedin.com/school/uniftc"
                  target="_blank"
                >
                  <img src={instagram} className="" />
                </a>
                <a
                  href="https://www.youtube.com/user/ftcdigital"
                  target="_blank"
                >
                  <img src={youtube} className="" />
                </a>
              </div>
              <div className="footer-contato-texto">
                IMES - Instituto Mantenedor de Ensino Superior da Bahia Ltda
                CNPJ 04.670.333/0001-89
              </div>
            </div>
            <div className="links">
              <div className="footer-fdi">
                <p>Rematrícula unex 2022.2</p>
                <p>
                  <a
                    className="vestibular_uni"
                    href="https://www.unex.edu.br/arquivos/rematricula/NAT_UNEX_INFORME DE REMATRÍCULA.pdf"
                  >
                    Informe de Matrícula
                  </a>
                </p>
                <p>
                  <a
                    className="vestibular_uni"
                    href="https://www.unex.edu.br/arquivos/rematricula/NAT_UNEX_CARTILHA FIES.pdf"
                  >
                    Manual do FIES
                  </a>
                </p>
                <p>
                  <a
                    className="vestibular_uni"
                    href="https://www.unex.edu.br/arquivos/rematricula/NAT_UNEX_CARTILHA PROUNI.pdf"
                  >
                    Manual do PROUNI
                  </a>
                </p>
                <p>
                  <a
                    className="vestibular_uni"
                    href="https://www.unex.edu.br/arquivos/rematricula/NAT_UNEX_REMATRÍCULA ONLINE.pdf"
                  >
                   Rematrícula Online
                  </a>
                </p>
                <p>
                  <a
                    className="vestibular_uni"
                    href="https://www.unex.edu.br/arquivos/rematricula/NAT_UNEX_NEGOCIAÇÃO FINANCEIRA.pdf"
                  >
                    Negociação Financeira
                  </a>
                </p>
                <p>
                  <a
                    className="vestibular_uni"
                    href="https://www.unex.edu.br/arquivos/rematricula/NAT_UNEX_CONSULTA DE TURMAS.pdf"
                  >
                    Consulta de turmas
                  </a>
                </p>
              </div>
          {/*     <div className="veja-tambem ">
                <div>Veja também</div>
                <div>
                  <p>
                    <a
                      className="vestibular_uni"
                      href="https://uniftc.edu.br/calculadoraenem"
                    >
                      Calculadora ENEM
                    </a>
                  </p>
                  <p>
                    <a
                      className="vestibular_uni"
                      href="https://transferencia.uniftc.edu.br"
                    >
                      Transferência Externa
                    </a>
                  </p>
                  <p>
                    <a
                      className="vestibular_uni"
                      href="https://suavocacao.uniftc.edu.br/"
                    >
                      Teste Vocacional
                    </a>
                  </p>
                  <p>
                    <a
                      className="vestibular_uni"
                      href="https://vestibular.uniftc.edu.br/medicina/"
                    >
                      Vestibular Medicina
                    </a>
                  </p>
                </div>
              </div> */}
            </div>

            <div className="atendimento">
              <div className="atendimento-title">Atendimento</div>
              <div className="atendimento-whatsapp">
                  <ButtonHover
                    Img={ImgEntreEmContato}
                    ImgHover={ImgEntreEmContatoHover}
                    onClick={() => window.open("https://aluno.uniftc.edu.br")}
                  />
              </div>
            </div>
          </div>
        </div>
        <div className="rodape">
          <span>
            <a href="https://uniftc.edu.br/politica-de-privacidade?_ga=2.215189139.566998821.1631561738-1789643399.1628102058">
              Políticas de Privacidade
            </a>
          </span>{" "}
          •{" "}
          <span>
            <a href="https://redeuniftc-privacy.my.onetrust.com/webform/72c77247-e798-4098-ac50-ef3cd6627021/f4306a95-7f68-40d4-a8e3-3a1a41d4d3d7">
              Solicitação do titular de dados
            </a>
          </span>
        </div>
      </Rodape>
    </>
  );
};

export default Footer;
