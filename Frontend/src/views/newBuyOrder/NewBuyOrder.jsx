import React, { useState } from "react";
import styles from "./newBuyOrder.module.css";
import { useForm } from "react-form";
import CustomSelect from "../../commonds/select/CustomSelect";
import Button from "react-bootstrap/Button";
import LongTableContainer from "../../containers/LongTableContainer";
import SelectLink from "../../commonds/selectLink/SelectLink";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router";
import CustomInput from "../../commonds/input/CustomInput";

const FormSelectProveedor = (props) => {
  const { Form, meta, values, getFormProps, getFieldProps } = useForm({
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const { proveedores, setView } = props;
  const navigate = useNavigate();
  return (
    <Form className={styles.formContainer}>
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
              <CustomSelect
                text="Seleccioná la proveedor"
                clientes={proveedores}
                width="selectContainerMedium"
              />
              <CustomSelect
                text="Seleccioná el representante"
                clientes={proveedores}
                width="selectContainerMedium"
              />
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
    </Form>
  );
};
const AddProductToOrder = (props) => {
  const { setView } = props;
  return (
    <div className={styles.addProductContainer}>
      <div>
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
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <td>@fat</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@mdo</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles.listContainer}>
          <span className={styles.subTitle}>Productos en orden</span>
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
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button
          className={`${styles.buttonStyle} ${styles.buttonStyleBack}`}
          variant="danger"
          onClick={() => {
            setView("General");
          }}
        >
          Atras
        </Button>
        <Button
          className={`${styles.buttonStyle} ${styles.buttonStyleNext}`}
          variant="primary"
          onClick={() => {
            setView("Finalizar");
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
      <div className={`${styles.listContainer} ${styles.finContainer}`}>
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
            setView("Productos");
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

function NewBuyOrder() {
  const [viewActive, setViewActive] = useState("General");
  const arrayPrueba = ["Damian Cano", "Juan Martinez", "Sofia Altamirano"]; //los que esten asociados no deben aparecer

  return (
    <div className={styles.addUserContainer}>
      <h6 className={styles.formTitle}>Crear orden de compra</h6>
      <SelectLink view={viewActive} order={["General", "Productos", "Finalizar"]} />
      {viewActive == "General" ? (
        <FormSelectProveedor
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

export default NewBuyOrder;
