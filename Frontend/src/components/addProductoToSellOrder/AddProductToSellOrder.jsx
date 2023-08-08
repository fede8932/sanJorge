import React from "react";
import styles from "./addProduct.module.css";

function AddProductToSellOrder(props) {
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
}

export default AddProductToSellOrder;
