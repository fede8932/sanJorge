import React from "react";
import styles from "./formSelectProveedor.module.css";
import { useNavigate } from "react-router";
import CustomSelect from "../../commonds/select/CustomSelect";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FormProvider } from "react-hook-form";

function FormSelectProveedorComponent(props) {
  const { proveedores, setView, methods } = props;
  const navigate = useNavigate();
  return (
    <FormProvider {...methods}>
      <form className={styles.formContainer}>
        <div className={styles.buttonSubFormContainer}>
          <div className={styles.subFormContainer}>
            <div className={styles.inputContainer}>
              <span className={styles.subTitle}>Datos de proveedor</span>
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between",
                }}
              >
                {proveedores && (
                  <CustomSelect
                    name="supplier"
                    text="Seleccioná la proveedor"
                    width="selectContainerMedium"
                    arrayOptions={proveedores}
                    validate={{ required: true }}
                  />
                )}
                {proveedores && (
                  <CustomSelect
                    name="represent"
                    text="Seleccioná el representante"
                    width="selectContainerMedium"
                    arrayOptions={proveedores}
                    validate={{ required: true }}
                  />
                )}
              </div>
              <div className={styles.dataContainer}>
                <Container style={{ margin: "0" }}>
                  <Row className={styles.filas}>
                    <Col className={styles.colUno}>
                      <span className={styles.titleInfo}>
                        Razón social:
                        <span className={styles.info}>Pirulino s.r.l.</span>
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
                        <span
                          className={`${styles.info} ${styles.statusFalse}`}
                        >
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
                    Deserunt, veniam? Impedit quam, nam odit sed nemo est
                    pariatur sint vero assumenda in quod, minima exercitationem
                    commodi quasi provident consequuntur repellat? Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Deserunt,
                    veniam? Impedit quam, nam odit sed nemo est pariatur sint
                    vero assumenda in quod, minima exercitationem commodi quasi
                    provident consequuntur repellat? Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Deserunt, veniam? Impedit
                    quam, nam odit sed nemo est pariatur sint vero assumenda in
                    quod, minima exercitationem commodi quasi provident
                    consequuntur repellat?
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <Button
              className={`${styles.buttonStyle} ${styles.buttonStyleBack}`}
              variant="danger"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancelar
            </Button>
            <Button
              className={`${styles.buttonStyle} ${styles.buttonStyleNext}`}
              onClick={() => {
                setView("Productos");
              }}
            >
              Siguiente
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default FormSelectProveedorComponent;
