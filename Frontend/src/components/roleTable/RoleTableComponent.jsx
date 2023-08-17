import React from "react";
import styles from "./roleTable.module.css";
import ActionModalContainer from "../../containers/ActionModalContainer";
import { Label } from "semantic-ui-react";
import IconButonUsersTable from "../../commonds/iconButtonUsersTable/IconButonUsersTable";

function RoleTableComponent(props) {
  const {
    data,
    colum,
    type,
    statusToogle,
  } = props;
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
                          statusToogle(obj.user.id, "seller");
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
                <td>{`$ ${obj.currentAcount.resume}`}</td>
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
                      title="Información del cliente"
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
                          statusToogle(obj.user.id, "client");
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
                <td>{`$ ${obj.currentAcount.resume}`}</td>
                <td>
                  {obj.status ? (
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
                      title="Información del proveedor"
                      size="xl"
                      data={obj}
                      type="updateSupplier"
                      icon="fa-regular fa-pen-to-square"
                    />
                    <div
                      style={{
                        margin: "0px 0px 0px 8px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <ActionModalContainer
                        size="lg"
                        data={obj}
                        title="Agregar representante"
                        type="updateRepresSupplier"
                        icon="fa-regular fa-address-book"
                      />
                    </div>
                    <div
                      style={{
                        margin: "1px 0px 0px 8px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <IconButonUsersTable
                        fn={() => {
                          statusToogle(obj.id, "supplier");
                        }}
                        icon={
                          !obj.status
                            ? "fa-solid fa-check"
                            : "fa-solid fa-xmark"
                        }
                        iconInitialStyle={
                          !obj.status ? "iconStyleGreen" : "iconStyleRed"
                        }
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <></>
          )}{type == "repSupplier" ? (
            data.map((obj) =>
              obj.representative.map((rep, i) => (
                <tr key={i}>
                  <td>{`${rep.name} ${rep.apellido}`.slice(0, 20)}</td>
                  <td>{obj.razonSocial}</td>
                  <td>{rep.email}</td>
                  <td>{rep.telefono}</td>
                  <td>
                    {rep.status ? (
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
                        title="Información del representante"
                        size="lg"
                        data={obj}
                        type="updateSupplier"
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
                            statusToogle(rep.id, "repSupplier");
                          }}
                          icon={
                            !obj.status
                              ? "fa-solid fa-check"
                              : "fa-solid fa-xmark"
                          }
                          iconInitialStyle={
                            !obj.status ? "iconStyleGreen" : "iconStyleRed"
                          }
                        />
                      </div>
                    </div>
                  </td>
                </tr>
              ))
            )
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default RoleTableComponent;
