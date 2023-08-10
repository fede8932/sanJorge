import React from "react";
import styles from "./clientAcordion.module.css";
import Accordion from "react-bootstrap/Accordion";
import CustomInput from "../input/CustomInput";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CustomSelect from "../select/CustomSelect";
import { useForm, FormProvider } from "react-hook-form";

function ClientAcordion({ searchClient, client }) {
  console.log(client);
  const methods = useForm();
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Cliente registrado</Accordion.Header>
        <Accordion.Body>
          <FormProvider {...methods}>
            <form
              className={styles.acordionBodyContainer}
              onSubmit={methods.handleSubmit(searchClient)}
            >
              <CustomInput
                name="campo"
                type="text"
                width="small"
                placeholder="CUIL/CUIT o Razón Social"
                icon="fa-solid fa-magnifying-glass"
                validate={{ required: true, maxLength: 25 }}
              />
              <div className={styles.dataContainer}>
                <Container style={{ margin: "0" }}>
                  <Row className={styles.filas}>
                    <Col className={styles.colUno}>
                      <span className={styles.titleInfo}>
                        Razón social:
                        <span className={styles.info}>
                          {client && client.razonSocial}
                        </span>
                      </span>
                    </Col>
                    <Col className={styles.colDos}>
                      <span className={styles.titleInfo}>
                        CUIT:
                        <span className={styles.info}>
                          {client && client.cuit}
                        </span>
                      </span>
                    </Col>
                    <Col className={styles.colTres}>
                      <span className={styles.titleInfo}>
                        Estado:
                        {client ? (
                          <span
                            className={`${styles.info} ${styles.statusTrue}`}
                          >
                            {client.user.status ? "Active" : "Inactive"}
                          </span>
                        ) : null}
                      </span>
                    </Col>
                  </Row>
                  <Row className={styles.filas}>
                    <Col className={styles.colUno}>
                      <span className={styles.titleInfo}>
                        Calle:
                        <span className={styles.info}>
                          {client && client.calle}
                        </span>
                      </span>
                    </Col>
                    <Col className={styles.colDos}>
                      <span className={styles.titleInfo}>
                        Altura:
                        <span className={styles.info}>
                          {client && client.altura}
                        </span>
                      </span>
                    </Col>
                    <Col className={styles.colTres}>
                      <span className={styles.titleInfo}>
                        Localidad:
                        <span className={styles.info}>
                          {client && client.localidad}
                        </span>
                      </span>
                    </Col>
                  </Row>
                  <Row className={styles.filas}>
                    <Col className={styles.colUno}>
                      <span className={styles.titleInfo}>
                        Email:
                        <span className={styles.info}>
                          {client && client.user.email}
                        </span>
                      </span>
                    </Col>
                    <Col className={styles.colDos}>
                      <span className={styles.titleInfo}>
                        Teléfono:
                        <span className={styles.info}>
                          {client && client.telefono}
                        </span>
                      </span>
                    </Col>
                    <Col className={styles.colTres}>
                      <span className={styles.titleInfo}>
                        Cuenta corriente:
                        <span
                          className={`${styles.info} ${styles.statusFalse}`}
                        >
                          {client && `$ ${client.currentAcount.resume}`}
                        </span>
                      </span>
                    </Col>
                  </Row>
                </Container>
              </div>
              <div
                className={styles.inputContainer}
                style={{ marginBottom: "35px", height: "125px" }}
              >
                <span className={styles.titleInfo}>
                  Comentarios:
                  <span className={styles.info}>{client && client.comentarios}
                  </span>
                </span>
              </div>
            </form>
          </FormProvider>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Cliente sin registrar</Accordion.Header>
        <Accordion.Body>
          {/* <div className={styles.acordionBodyContainer}>
            <form className={styles.formContainer}>
              <div className={styles.miniInputContainer}>
                <CustomInput
                  type="text"
                  width="small"
                  placeholder="Nombre"
                  icon="fa-solid fa-id-card"
                />
                <CustomInput
                  type="text"
                  width="small"
                  placeholder="Apellido"
                  icon="fa-solid fa-id-card"
                />
              </div>
              <div className={styles.miniInputContainer}>
                <CustomInput
                  type="text"
                  width="small"
                  placeholder="Razon social"
                  icon="fa-solid fa-id-card"
                />
                <CustomInput
                  type="text"
                  width="small"
                  placeholder="Cuit"
                  icon="fa-solid fa-id-card"
                />
              </div>
              <div className={styles.miniInputContainer}>
                <CustomInput
                  type="email"
                  width="small"
                  placeholder="Correo electrónico"
                  icon="fa-regular fa-envelope"
                />
                <CustomInput
                  type="text"
                  width="small"
                  placeholder="Teléfono"
                  icon="fa-solid fa-phone"
                />
              </div>
              <div className={styles.miniInputContainer}>
                <CustomInput
                  type="text"
                  width="small"
                  placeholder="Domicilio"
                  icon="fa-solid fa-location-dot"
                />
                <CustomInput
                  type="text"
                  width="small"
                  placeholder="Localidad"
                  icon="fa-solid fa-location-dot"
                />
              </div>
              <div className={styles.miniSelectContainer}>
                <div className={styles.miniSelect}>
                  <CustomSelect
                    text="Seleccioná el tipo de factura"
                    clientes={["Final", "Monotributo", "Inscripto"]}
                  />
                </div>
              </div>
            </form>
          </div> */}
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ClientAcordion;
