import React, { useState } from "react";
import styles from "./addDataFac.module.css";
import { FormProvider } from "react-hook-form";
import CustomInput from "../../commonds/input/CustomInput";
import { Button } from "react-bootstrap";
import DataPicker from "../../commonds/dataPicker/DataPicker";
import { Label } from "semantic-ui-react";
import CustomSelect from "../../commonds/select/CustomSelect";

function AddDataFac(props) {
  const { methods, addFac, order, stractData, dataChange, ajustFn } = props;
  const ajustButton = order.data.orderAjust
    ? order.data.orderAjust.status
    : "Open";
  const [viewNoFac, setViewNoFac] = useState(false);
  return (
    <div className={styles.editContainer}>
      <div className={styles.dataContainer}>
        <span className={styles.inputLabel}>
          Orden Nº:<span className={styles.dataUser}>{order.data.numero}</span>
        </span>
        <span>
          Proveedor:
          <span className={styles.dataUser}>
            {order.data.supplier.razonSocial}
          </span>
        </span>
        <span className={styles.inputLabel}>
          Total:
          <span className={styles.dataUser}>{`$ ${
            order.data.orderAjust
              ? order.data.orderAjust.total
              : order.data.total
          }`}</span>
        </span>
        <span>
          Estado:
          <span className={styles.dataUser}>
            <Label color="green">{order.data.status}</Label>
          </span>
        </span>
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(addFac)}
          className={styles.formContainer}
        >
          <div className={styles.inputContainer}>
            <div className={styles.leftInputContainer}>
              {/* <div className={styles.checkInput}>
                <input
                  type="checkbox"
                  id="checkboxId"
                  name="checkboxName"
                  className={styles.checkI}
                  value={stractData.afip.value}
                  onChange={() => {
                    stractData.afip.setValue(!stractData.afip.value);
                  }}
                ></input>
                <label className={styles.inputLabel} for="checkboxId">
                  Factura oficial
                </label>
              </div> */}
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div className={styles.dpContainer}>
                  <span className={styles.inputLabel}>Fecha</span>
                  <DataPicker
                    className={styles.dpicker}
                    onChange={dataChange}
                  />
                </div>
                <div style={{ width: "50%" }}>
                  <span className={styles.inputLabel}>Tipo</span>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CustomSelect
                      width="medium"
                      name="code"
                      text="Sel. tipo de fact"
                      arrayOptions={[
                        { text: "Tipo A", value: "A" },
                        { text: "Tipo C", value: "C" },
                        { text: "Presupuesto", value: "P" },
                      ]}
                      validate={{ required: true }}
                      extraFn={setViewNoFac}
                    />
                  </div>
                </div>
              </div>
              <span className={styles.inputLabel}>Factura</span>
              <CustomInput
                name="numComprobante"
                type="text"
                width="large"
                placeholder="Factura Nº"
                icon="fa-solid fa-id-card"
                validate={{ required: true }}
              />
              <span className={styles.inputLabel}>Remito</span>
              <CustomInput
                name="numRemito"
                type="text"
                width="large"
                placeholder="Remito Nº"
                icon="fa-solid fa-id-card"
                validate={{ required: true }}
              />
              <span className={styles.inputLabel}>Subtotal facturado</span>
              <CustomInput
                name="subtotal"
                type="text"
                width="large"
                placeholder="Subtotal"
                icon="fa-solid fa-id-card"
                validate={{
                  required: true,
                  pattern: {
                    value: /^[-+]?\d+(\.\d+)?$/,
                    message:
                      "Debes ingresar un número entero o decimal con . (punto)",
                  },
                }}
              />
              {viewNoFac ? (
                <>
                  <span className={styles.inputLabel}>No facturado</span>
                  <CustomInput
                    name="noFact"
                    type="text"
                    width="large"
                    placeholder="No facturado"
                    icon="fa-solid fa-id-card"
                    validate={{
                      required: false,
                      pattern: {
                        value: /^[-+]?\d+(\.\d+)?$/,
                        message:
                          "Debes ingresar un número entero o decimal con . (punto)",
                      },
                    }}
                  />
                </>
              ) : null}
            </div>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.buttonSubContainer}>
              {ajustButton == "Open" ? (
                <Button
                  onClick={() => {
                    ajustFn();
                  }}
                  style={{
                    backgroundColor: "#fbfbfb",
                    color: "#673ab7",
                    border: "1px solid #673ab7",
                    height: "35px",
                    width: "100px",
                    marginLeft: "10px",
                  }}
                >
                  Ajustar
                </Button>
              ) : null}
              <Button
                type="submit"
                style={{
                  backgroundColor: "#673ab7",
                  border: "1px solid #673ab7",
                  height: "35px",
                  width: "100px",
                  marginLeft: "10px",
                }}
              >
                {!order.loading ? (
                  "Actualizar"
                ) : (
                  <Spinner animation="border" variant="light" size="sm" />
                )}
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

export default AddDataFac;