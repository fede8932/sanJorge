import React from "react";
import styles from "./formSelectProveedor.module.css";
import { useNavigate } from "react-router";
import CustomSelect from "../../commonds/select/CustomSelect";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { FormProvider } from "react-hook-form";
import Spinner from "react-bootstrap/Spinner";

function FormSelectProveedorComponent(props) {
  const {
    proveedores,
    representantes,
    methods,
    onSubmit,
    fnSelect,
    subSelectStatus,
    infoProveedor,
    orderState,
  } = props;
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
                    fnSelect={fnSelect}
                  />
                )}
                <CustomSelect
                  active={subSelectStatus}
                  name="represent"
                  text="Seleccioná el representante"
                  width="selectContainerMedium"
                  arrayOptions={representantes}
                  validate={{ required: true }}
                />
              </div>
              <div className={styles.dataContainer}>
                <Container style={{ margin: "0" }}>
                  <Row className={styles.filas}>
                    <Col className={styles.colUno}>
                      <span className={styles.titleInfo}>
                        Razón social:
                        <span className={styles.info}>
                          {infoProveedor.razonSocial}
                        </span>
                      </span>
                    </Col>
                    <Col className={styles.colDos}>
                      <span className={styles.titleInfo}>
                        CUIT:
                        <span className={styles.info}>
                          {infoProveedor.cuit}
                        </span>
                      </span>
                    </Col>
                    <Col className={styles.colTres}>
                      <span className={styles.titleInfo}>
                        Estado:
                        <span>
                          {infoProveedor.status ? (
                            <span
                              className={`${styles.info} ${styles.statusTrue}`}
                            >
                              "Active"
                            </span>
                          ) : (
                            <span
                              className={`${styles.info} ${styles.statusFalse}`}
                            >
                              "Inactive"
                            </span>
                          )}
                        </span>
                      </span>
                    </Col>
                  </Row>
                  <Row className={styles.filas}>
                    <Col className={styles.colUno}>
                      <span className={styles.titleInfo}>
                        Calle:
                        <span className={styles.info}>
                          {infoProveedor.calle}
                        </span>
                      </span>
                    </Col>
                    <Col className={styles.colDos}>
                      <span className={styles.titleInfo}>
                        Altura:
                        <span className={styles.info}>
                          {infoProveedor.altura}
                        </span>
                      </span>
                    </Col>
                    <Col className={styles.colTres}>
                      <span className={styles.titleInfo}>
                        Localidad:
                        <span className={styles.info}>
                          {infoProveedor.localidad}
                        </span>
                      </span>
                    </Col>
                  </Row>
                  <Row className={styles.filas}>
                    <Col className={styles.colUno}>
                      <span className={styles.titleInfo}>
                        Email:
                        <span className={styles.info}>
                          {infoProveedor.email}
                        </span>
                      </span>
                    </Col>
                    <Col className={styles.colDos}>
                      <span className={styles.titleInfo}>
                        Teléfono:
                        <span className={styles.info}>
                          {infoProveedor.telefono}
                        </span>
                      </span>
                    </Col>
                    <Col className={styles.colTres}>
                      <span className={styles.titleInfo}>
                        Cuenta corriente:
                        <span
                          className={`${styles.info} ${styles.statusFalse}`}
                        >
                          {infoProveedor.currentAcount
                            ? `$ ${infoProveedor.currentAcount.resume}`
                            : "$"}
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
                    {infoProveedor.comentarios}
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
              onClick={methods.handleSubmit(onSubmit)}
            >
              {!orderState.loading ? (
                "Siguiente"
              ) : (
                <Spinner animation="border" variant="light" size="sm" />
              )}
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}

export default FormSelectProveedorComponent;
