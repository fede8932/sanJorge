import React from "react";
import styles from "./formSelect.module.css";
import ClientAcordion from "../../commonds/clientAcordion/ClientAcordion"
import Button from "react-bootstrap/esm/Button";

function FormSelectClientSellOrder(props) {
  const { proveedores, setView, searchClient, client } = props;
  return (
    <div className={styles.formContainer}>
      <div className={styles.buttonSubFormContainer}>
        <div className={styles.subFormContainer}>
          <div className={styles.inputContainer}>
            <span className={styles.subTitle}>Datos de cliente</span>
            <div>
              <ClientAcordion searchClient={searchClient} client={client} />
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
    </div>
  );
}

export default FormSelectClientSellOrder;
