import React from "react";
import styles from "./roleTable.module.css";
import ActionModalContainer from "../../containers/ActionModalContainer";
import { Label } from "semantic-ui-react";
import IconButonUsersTable from "../../commonds/iconButtonUsersTable/IconButonUsersTable";
import Button from "react-bootstrap/Button";

function RoleTableComponent(props) {
  const { data, colum, type, statusToogle, viewAcount } = props;
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
                <td>
                  <Button
                    variant="link"
                    style={{ padding: "0", textDecoration: "none" }}
                    onClick={() => {
                      viewAcount(obj.currentAcount.acountNumber);
                    }}
                  >
                    {obj.currentAcount.acountNumber}
                  </Button>
                </td>
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
                <td>
                  <Button
                    variant="link"
                    style={{ padding: "0", textDecoration: "none" }}
                    onClick={() => {
                      viewAcount(obj.currentAcount.acountNumber);
                    }}
                  >
                    {obj.currentAcount.acountNumber}
                  </Button>
                </td>
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
          )}
          {type == "repSupplier" ? (
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
                      <div
                        style={{
                          margin: "0px 0px 0px 8px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <ActionModalContainer
                          repindex={i}
                          size="lg"
                          data={obj}
                          title="Modificar representante"
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
                            statusToogle(rep.id, "repSupplier");
                          }}
                          icon={
                            !rep.status
                              ? "fa-solid fa-check"
                              : "fa-solid fa-xmark"
                          }
                          iconInitialStyle={
                            !rep.status ? "iconStyleGreen" : "iconStyleRed"
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
          {type == "acount" ? (
            data.movements.map((obj, i) => (
              <tr key={i}>
                <td>{obj.fecha}</td>
                <td>
                  {data.client
                    ? data.client.razonSOcial
                    : data.supplier.razonSocial}
                </td>
                <td>{obj.type}</td>
                <td>{`$ ${obj.amount}`}</td>
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
        </tbody>
      </table>
    </div>
  );
}

export default RoleTableComponent;
