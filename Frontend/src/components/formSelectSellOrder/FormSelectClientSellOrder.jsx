import React from "react";
import styles from "./formSelect.module.css";

function FormSelectClientSellOrder(props) {
  const { proveedores, setView } = props;
  return (
    <form className={styles.formContainer}>
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
    </form>
  );
}

export default FormSelectClientSellOrder;
