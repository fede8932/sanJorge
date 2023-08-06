import React from "react";
import styles from "./roleTable.module.css";
import ActionModalContainer from "../../containers/ActionModalContainer";
import { Label } from "semantic-ui-react";
import IconButonUsersTable from "../../commonds/iconButtonUsersTable/IconButonUsersTable";

function RoleTableComponent(props) {
  const { data, colum, type, statusSellerToogle, statusClienToogle } = props;
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
                <td>
                  {obj.user.status ? (
                    <Label color="green" horizontal>
                      Activo
                    </Label>
                  ) : (
                    <Label color="red" horizontal>
                      Inactivo
                    </Label>
                  )}
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      width: "130px",
                    }}
                  >
                    <ActionModalContainer
                      size="xl"
                      data={obj}
                      title="Información de vendedor"
                      type="updateSeller"
                      icon="fa-regular fa-pen-to-square"
                    />
                    <div
                      style={{
                        margin: "1px 0px 0px 8px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <IconButonUsersTable
                        fn={() => {
                          statusSellerToogle(obj.user.id);
                        }}
                        icon={
                          !obj.user.status
                            ? "fa-solid fa-check"
                            : "fa-solid fa-xmark"
                        }
                        iconInitialStyle={
                          !obj.user.status ? "iconStyleGreen" : "iconStyleRed"
                        }
                      />
                    </div>
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
                <td>
                  {obj.user.status ? (
                    <Label color="green" horizontal>
                      Activo
                    </Label>
                  ) : (
                    <Label color="red" horizontal>
                      Inactivo
                    </Label>
                  )}
                </td>
                <td>
                  <div
                    style={{
                      display: "flex",
                      width: "130px",
                    }}
                  >
                    <ActionModalContainer
                      size="xl"
                      data={obj}
                      title="Información de vendedor"
                      type="updateClient"
                      icon="fa-regular fa-pen-to-square"
                    />
                    <div
                      style={{
                        margin: "1px 0px 0px 8px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <IconButonUsersTable
                        fn={() => {
                          statusClienToogle(obj.user.id);
                        }}
                        icon={
                          !obj.user.status
                            ? "fa-solid fa-check"
                            : "fa-solid fa-xmark"
                        }
                        iconInitialStyle={
                          !obj.user.status ? "iconStyleGreen" : "iconStyleRed"
                        }
                      />
                    </div>
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
