import React from "react";
import styles from "./addProduct.module.css";
import Button from "react-bootstrap/esm/Button";
import { FormProvider } from "react-hook-form";
import CustomInput from "../../commonds/input/CustomInput";

function AddProductToOrder(props) {
  const { setView, methods } = props;
  return (
    <FormProvider {...methods}>
      <form className={styles.addProductContainer}>
        <div className={styles.tableProdContainerPrinc}>
          <div className={styles.searchContainer}>
            <span className={styles.subTitle}>Buscador de productos</span>
            <div className={styles.searchTableContainer}>
              <div className={styles.inputSearchContainer}>
                <CustomInput
                  name="dataSearch"
                  type="text"
                  width="long"
                  placeholder="Artículo"
                  icon="fa-solid fa-magnifying-glass"
                  validate={{ required: true }}
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
      </form>
    </FormProvider>
  );
}

export default AddProductToOrder;
