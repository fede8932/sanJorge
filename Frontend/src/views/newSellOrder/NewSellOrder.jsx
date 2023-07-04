import React, { useState } from "react";
import styles from "./newSellOrder.module.css";
import { useForm } from "react-form";
import Button from "react-bootstrap/Button";
import SelectLink from "../../commonds/selectLink/SelectLink";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router";
import CustomInput from "../../commonds/input/CustomInput";
import ClientAcordion from "../../commonds/clientAcordion/ClientAcordion";

const FormSelectClient = (props) => {
  const { Form, meta, values, getFormProps, getFieldProps } = useForm({
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { proveedores, setView } = props;
  return (
    <Form className={styles.formContainer}>
      <div className={styles.buttonSubFormContainer}>
        <div className={styles.subFormContainer}>
          <div className={styles.inputContainer}>
            <span className={styles.subTitle}>Datos de cliente</span>
            <div>
              <ClientAcordion />
            </div>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button
            className={`${styles.buttonStyle} ${styles.buttonStyleBack}`}
            variant="danger"
            onClick={() => {
              setView("Productos");
            }}
          >
            Atras
          </Button>
          <Button
            className={`${styles.buttonStyle} ${styles.buttonStyleNext}`}
            onClick={() => {
              setView("Finalizar");
            }}
          >
            Siguiente
          </Button>
        </div>
      </div>
    </Form>
  );
};
const AddProductToOrder = (props) => {
  const { setView } = props;
  const navigate = useNavigate();
  return (
    <div className={styles.addProductContainer}>
      <div className={styles.addProdSubContainer}>
        <div className={styles.searchContainer}>
          <span className={styles.subTitle}>Buscador de productos</span>
          <div className={styles.searchTableContainer}>
            <div className={styles.inputSearchContainer}>
              <CustomInput
                type="text"
                width="long"
                placeholder="Artículo"
                icon="fa-solid fa-magnifying-glass"
              />
            </div>
            <div className={styles.tableProdContainer}>
              <table className="table">
                <thead className="table-primary">
                  <tr>
                    <th scope="col" className={styles.colArtWidth}>
                      Artículo
                    </th>
                    <th scope="col">Marca</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Precio</th>
                    <th scope="col" className={styles.colActWidth}>
                      Acción
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Mark</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>Mark</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>Mark</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>Mark</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>Mark</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>Mark</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>Mark</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>Mark</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>Mark</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>Mark</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>Mark</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.listContainer}>
          <span className={styles.subTitle}>Detalle de orden</span>
          <div></div>
          <div className={styles.prodToOrderContainer}>
            <table className="table">
              <thead className="table-success">
                <tr>
                  <th scope="col" className={styles.colArtWidthDos}>
                    Artículo
                  </th>
                  <th scope="col">Stock</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col" className={styles.colActWidthDos}>
                    Acción
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.detalle}>
            <div className={styles.dataContainer}>
              <Container style={{ margin: "0" }}>
                <Row className={styles.filas}>
                  <Col className={styles.colUno}>
                    <span className={styles.titleInfo}>
                      Subtotal:
                      <span className={styles.info}>$10000.00</span>
                    </span>
                  </Col>
                  <Col className={styles.colDos}>
                    <span className={styles.titleInfo}>
                      IVA:
                      <span className={styles.info}>$2100.00</span>
                    </span>
                  </Col>
                  <Col className={styles.colTres}>
                    <span className={styles.titleInfo}>
                      Total:
                      <span className={`${styles.info} ${styles.statusTrue}`}>
                        $12100.00
                      </span>
                    </span>
                  </Col>
                </Row>
              </Container>
            </div>
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
          variant="primary"
          onClick={() => {
            setView("Cliente");
          }}
        >
          Siguiente
        </Button>
      </div>
    </div>
  );
};

const FinOrder = (props) => {
  const { setView } = props;
  return (
    <div>
      <div className={`${styles.finListContainer} ${styles.finContainer}`}>
        <span className={styles.subTitle}>Detalles de orden</span>
        <div className={styles.dataContainer}>
          <Container style={{ margin: "0" }}>
            <Row className={styles.filasFin}>
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
                  Tipo IVA:
                  <span className={styles.info}>Responsable inscripto</span>
                </span>
              </Col>
            </Row>
            <Row className={styles.filasFin}>
              <Col className={styles.colUno}>
                <span className={styles.titleInfo}>
                  Estado:
                  <span className={`${styles.info} ${styles.statusTrue}`}>
                    Activo
                  </span>
                </span>
              </Col>
              <Col className={styles.colDos}>
                <span className={styles.titleInfo}>
                  Subtotal:
                  <span className={styles.info}>$72990.00</span>
                </span>
              </Col>
              <Col className={styles.colDos}>
                <span className={styles.titleInfo}>
                  IVA:
                  <span className={styles.info}>$15327.90</span>
                </span>
              </Col>
              <Col className={styles.colTres}>
                <span className={styles.titleInfo}>
                  Total:
                  <span className={styles.info}>$88317,90</span>
                </span>
              </Col>
            </Row>
          </Container>
          <div className={styles.finToOrderContainer}>
            <table className="table">
              <thead className="table-success">
                <tr>
                  <th scope="col" className={styles.colArtWidthDos}>
                    Artículo
                  </th>
                  <th scope="col">Precio unitario</th>
                  <th scope="col">IVA</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col" className={styles.colActWidthDos}>
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>@fat</td>
                  <td>@twitter</td>
                  <td>@fat</td>
                  <td>@mdo</td>
                  <td>@mdo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer} style={{ marginTop: "20px" }}>
        <Button
          className={`${styles.buttonStyle} ${styles.buttonStyleBack}`}
          variant="danger"
          onClick={() => {
            setView("Cliente");
            console.log(View);
          }}
        >
          Atras
        </Button>
        <Button
          className={`${styles.buttonStyle} ${styles.buttonStyleNext}`}
          variant="success"
          onClick={() => {
            setView("Finalizar");
          }}
        >
          Crear
        </Button>
      </div>
    </div>
  );
};

function NewSellOrder() {
  const [viewActive, setViewActive] = useState("Productos");
  const arrayPrueba = ["Damian Cano", "Juan Martinez", "Sofia Altamirano"]; //los que esten asociados no deben aparecer

  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Crear presupuesto</h6>
      <SelectLink
        view={viewActive}
        order={["Productos", "Cliente", "Finalizar"]}
      />
      {viewActive == "Cliente" ? (
        <FormSelectClient
          proveedores={arrayPrueba}
          setView={setViewActive}
        />
      ) : null}
      {viewActive == "Productos" ? (
        <AddProductToOrder setView={setViewActive} />
      ) : null}
      {viewActive == "Finalizar" ? <FinOrder setView={setViewActive} /> : null}
    </div>
  );
}

export default NewSellOrder;
