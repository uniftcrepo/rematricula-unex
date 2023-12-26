import React, { useState } from "react";

import { Card } from "react-bootstrap";
import styled from "styled-components";
import parse from "html-react-parser";
import Button from "./ButtonClickLink";
import ModalMatriucla from "./ModalMatricula";
export const CardFooter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
`;

const CardInfo = ({ header_rematricula, header_prouni, title_rematricula, title_prouni, text, forma, footer }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //console.log(forma, header);
  return (
    <>
      <ModalMatriucla onAbreModal={show} onFecharModal={() => setShow(false)} size="xl" />
      {forma === "ligado" ? (
        <Card
          border="info"
          style={{
            width: "22rem",
            borderRadius: "12px",
          }}
        >
          <Card.Header
            style={{
              backgroundColor: "#fff",
              borderBottom: "0px",
              color: "#0093ff",
              fontSize: "10px",
              margin: "4px 1px -13px",
            }}
          >
            {header_rematricula}
          </Card.Header>
          <Card.Body
            style={{
              padding: "0px 19px 19px",
            }}
          >
            <Card.Title
              style={{
                color: "#97e70e",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              {parse(title_rematricula)}
            </Card.Title>
           {/*  <Card.Text>{parse(text)}</Card.Text> */}
          </Card.Body>
          <Card.Header
            style={{
              backgroundColor: "#fff",
              borderBottom: "0px",
              color: "#0093ff",
              fontSize: "10px",
              margin: "4px 1px -13px",
            }}
          >
            {header_prouni}
          </Card.Header>
          <Card.Body
            style={{
              padding: "0px 19px 19px",
            }}
          >
            <Card.Title
              style={{
                color: "#97e70e",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              {parse(title_prouni)}
            </Card.Title>
            <Card.Text>{parse(text)}</Card.Text>
          </Card.Body>
          {footer && (
            <Card.Footer
              style={{
                backgroundColor: "#0093FF",
                borderRadius: "0px 0px 10px 10px",
                padding: "0.25rem 1.25rem"
              }}
            >
              <CardFooter>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "10px",
                    color: "#1C3661"
                  }}
                >
                  ATENÇÃO
                </div>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "12px",
                    color: "#FFFFFF",
                  }}
                >
                  Alunos FIES Paralela 2022.2
                </div>

                <Button
                  variant="primary"
                  id="duvida_tutorial"
                  cor="#fff"
                  texto={"saiba mais"}
                  tamanho={"100%"}
                  borderSolid={"2px solid #0093FF"}
                  colorTexto={"#97e70e"}
                  fonteSize={"12px"}
                  fonteSizeMobile={"12px"}
                  padding={"0px 6px 0px 0px"}
                  paddingMobile={"8px 8px 21px 5px"}
                  height={"34px"}
                  marginLeft={"unset"}
                  marginTop={"unset"}
                  componenteLink={false}
                  fonteWeight={"500"}
                  onClick={() => handleShow()}
                  tamanhoMobile={"113%"}
                  borderRadius={"8px"}
                  fonteWeight={"bold"}
                />
              </CardFooter>
            </Card.Footer>
          )}
        </Card>
      ) : (
        <Card
          border="info"
          style={{
            width: "22rem",
            borderRadius: "12px",
          }}
        >
          <Card.Header
            style={{
              backgroundColor: "#fff",
              borderBottom: "0px",
              color: "#ccc",
              fontSize: "10px",
              margin: "4px 1px -13px",
            }}
          >
            {header_rematricula}
          </Card.Header>
          <Card.Body
            style={{
              padding: "0px 19px 19px",
            }}
          >
            <Card.Title
              style={{
                color: "#ccc",
                fontSize: "28px",
                fontWeight: "bold",
              }}
            >
              <del> {parse(title_prouni)}</del>
            </Card.Title>
            <Card.Text
              style={{
                color: "#ccc",
              }}
            >
              {" "}
              <del>{parse(text)}</del>
            </Card.Text>
          </Card.Body>

        </Card>
      )}
    </>
  );
};

export default CardInfo;
