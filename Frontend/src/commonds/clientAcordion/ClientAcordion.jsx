import React from "react";
import styles from "./clientAcordion.module.css";
import Accordion from "react-bootstrap/Accordion";
import CustomInput from "../input/CustomInput";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useForm } from "react-form";
import CustomSelect from "../select/CustomSelect";

function ClientAcordion() {
  const { Form, meta, values, getFormProps, getFieldProps } = useForm({
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Accordion defaultActiveKey="0" flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Cliente registrado</Accordion.Header>
        <Accordion.Body>
          <div className={styles.acordionBodyContainer}>
            <CustomInput
              type="text"
              width="small"
              placeholder="Cuit cliente"
              icon="fa-solid fa-magnifying-glass"
            />
            <div className={styles.dataContainer}>
              <Container style={{ margin: "0" }}>
                <Row className={styles.filas}>
                  <Col className={styles.colUno}>
                    <span className={styles.titleInfo}>
                      Razón social:
                      <span className={styles.info}>Pirulino s.r..</span>
                    </span>
                  </Col>
                  <Col className={styles.colDos}>
                    <span className={styles.titleInfo}>
                      CUIT:
                      <span className={styles.info}>23-34766543-2</span>
                    </span>
                  </Col>
                  <Col className={styles.colTres}>
                    <span className={styles.titleInfo}>
                      Estado:
                      <span className={`${styles.info} ${styles.statusTrue}`}>
                        Activo
                      </span>
                    </span>
                  </Col>
                </Row>
                <Row className={styles.filas}>
                  <Col className={styles.colUno}>
                    <span className={styles.titleInfo}>
                      Calle:
                      <span className={styles.info}>
                        Av. Hipólito Hirigoyen
                      </span>
                    </span>
                  </Col>
                  <Col className={styles.colDos}>
                    <span className={styles.titleInfo}>
                      Altura:
                      <span className={styles.info}>2167</span>
                    </span>
                  </Col>
                  <Col className={styles.colTres}>
                    <span className={styles.titleInfo}>
                      Localidad:
                      <span className={styles.info}>Jose C. Paz</span>
                    </span>
                  </Col>
                </Row>
                <Row className={styles.filas}>
                  <Col className={styles.colUno}>
                    <span className={styles.titleInfo}>
                      Email:
                      <span className={styles.info}>
                        ventas.pirulino@gmail.com
                      </span>
                    </span>
                  </Col>
                  <Col className={styles.colDos}>
                    <span className={styles.titleInfo}>
                      Teléfono:
                      <span className={styles.info}>1123980816</span>
                    </span>
                  </Col>
                  <Col className={styles.colTres}>
                    <span className={styles.titleInfo}>
                      Cuenta corriente:
                      <span className={`${styles.info} ${styles.statusFalse}`}>
                        $849725.00
                      </span>
                    </span>
                  </Col>
                </Row>
              </Container>
            </div>
            <div
              className={styles.inputContainer}
              style={{ marginBottom: "35px" }}
            >
              <span className={styles.titleInfo}>
                Comentarios:
                <span className={styles.info}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt, veniam? Impedit quam, nam odit sed nemo est pariatur
                  sint vero assumenda in quod, minima exercitationem commodi
                  quasi provident consequuntur repellat? Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Deserunt, veniam? Impedit
                  quam, nam odit sed nemo est pariatur sint vero assumenda in
                  quod, minima exercitationem commodi quasi provident
                  consequuntur repellat? Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Deserunt, veniam? Impedit quam, nam odit sed
                  nemo est pariatur sint vero assumenda in quod, minima
                  exercitationem commodi quasi provident consequuntur repellat?
                </span>
              </span>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Cliente sin registrar</Accordion.Header>
        <Accordion.Body>
          <div className={styles.acordionBodyContainer}>
            <Form className={styles.formContainer}>
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
            </Form>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ClientAcordion;
