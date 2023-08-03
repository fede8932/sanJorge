import React from "react";
import styles from "./roleTable.module.css";
import ActionModalContainer from "../../containers/ActionModalContainer";

function RoleTableComponent(props) {
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
          {type == "seller" ? (
            data.map((obj, i) => (
              <tr key={i}>
                <td>{obj.user.name}</td>
                <td>{obj.user.lastName}</td>
                <td>{obj.cuil}</td>
                <td>{obj.user.id}</td>
                <td>{obj.user.status ? "Activo" : "Inactivo"}</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      width: "130px",
                      justifyContent: "space-between",
                    }}
                  >
                    <ActionModalContainer
                      title="Información de vendedor"
                      type="update"
                      icon="fa-regular fa-pen-to-square"
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <></>
          )}
          {type == "client" ? (
            data.map((obj, i) => (
              <tr key={i}>
                <td>{obj.id}</td>
                <td>{obj.razonSocial}</td>
                <td>{obj.cuit}</td>
                <td>{obj.currentAcount.acountNumber}</td>
                <td>{obj.user.status ? "Activo" : "Inactivo"}</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      width: "130px",
                      justifyContent: "space-between",
                    }}
                  >
                    <ActionModalContainer
                      type="update"
                      icon="fa-regular fa-pen-to-square"
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <></>
          )}
          {type == "supplier" ? (
            data.map((obj, i) => (
              <tr key={i}>
                <td>{obj.id}</td>
                <td>{obj.razonSocial}</td>
                <td>{obj.cuit}</td>
                <td>{obj.currentAcount.acountNumber}</td>
                <td>{obj.status ? "Activo" : "Inactivo"}</td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      width: "130px",
                      justifyContent: "space-between",
                    }}
                  >
                    <ActionModalContainer
                      type="update"
                      icon="fa-regular fa-pen-to-square"
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RoleTableComponent;
