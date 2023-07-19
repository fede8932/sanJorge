import React from "react";
import styles from "./longTable.module.css";
import ActionModalContainer from "../../containers/ActionModalContainer";

function LongTableComponent(props) {
  const { data, colum, type } = props;
  return (
    <div className={styles.container}>
      <table className={`table ${styles.table}`}>
        <thead>
          <tr>
            {colum.map((title, i) => (
              <th id={styles.title} key={i} scope="col">
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {type == "product"
            ? data.map((obj, i) => (
                <tr key={i}>
                  <td>{obj.article}</td>
                  <td>{obj.listPrice}</td>
                  <td>{obj.listPrice * (1 + obj.salePercentage)}</td>
                  <td>{"aca va la marca"}</td>
                  <td>{"aca va el stock"}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        width: "130px",
                        justifyContent: "space-between",
                      }}
                    >
                      <ActionModalContainer
                        type="info"
                        icon="fa-solid fa-circle-info"
                      />
                      <ActionModalContainer
                        type="add"
                        title="Ordenes abiertas"
                        icon="fa-sharp fa-solid fa-plus"
                      />
                      <ActionModalContainer
                        type="delete"
                        icon="fa-solid fa-trash"
                      />
                    </div>
                  </td>
                </tr>
              ))
            : data.map((obj, i) => (
                <tr key={i}>
                  <td>{obj.article}</td>
                  <td>{obj.marca}</td>
                  <td>
                    <div
                      style={{
                        display: "flex",
                        width: "130px",
                        justifyContent: "space-between",
                      }}
                    >
                      <ActionModalContainer
                        type="info"
                        icon="fa-solid fa-circle-info"
                      />
                      <ActionModalContainer
                        type="delete"
                        icon="fa-solid fa-trash"
                      />
                    </div>
                  </td>
                </tr>
              ))}
        </tbody>
      </table>
    </div>
  );
}

export default LongTableComponent;
