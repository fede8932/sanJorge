import React from "react";
import styles from "./roleTable.module.css";
import ActionModalContainer from "../../containers/ActionModalContainer";
import { Label } from "semantic-ui-react";
import IconButonUsersTable from "../../commonds/iconButtonUsersTable/IconButonUsersTable";
import Button from "react-bootstrap/Button";
import { Table } from "semantic-ui-react";
import CustomPagination from "../../commonds/pagination/CustomPagination";

function RoleTableComponent(props) {
  const { colum, type, statusToogle, viewAcount, result } = props;
  return (
    <div className={styles.container}>
      <Table className={`table ${styles.table}`} color="teal">
        <Table.Header>
          <Table.Row>
            {colum.map((col, i) => (
              <Table.HeaderCell
                style={{ width: `${col.width}` }}
                id={styles.title}
                key={i}
                scope="col"
              >
                {col.title}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {type == "seller" ? (
            result.data.sellers.map((obj, i) => (
              <Table.Row key={i}>
                <Table.Cell
                  style={{ padding: "0px 10px", verticalAlign: "middle" }}
                >
                  {obj.user.name}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "0px 10px", verticalAlign: "middle" }}
                >
                  {obj.user.lastName}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "0px 10px", verticalAlign: "middle" }}
                >
                  {obj.cuil}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "0px 10px", verticalAlign: "middle" }}
                >
                  {obj.user.id}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "0px 10px", verticalAlign: "middle" }}
                >
                  {obj.user.id != "" ? (
                    <>
                      {obj.user.status ? (
                        <Label color="green" horizontal>
                          Activo
                        </Label>
                      ) : (
                        <Label color="red" horizontal>
                          Inactivo
                        </Label>
                      )}
                    </>
                  ) : null}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "6px 10px", verticalAlign: "middle" }}
                >
                  {obj.user.id != "" ? (
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
                  ) : (
                    <div style={{ height: "21px" }}></div>
                  )}
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <></>
          )}
          {type == "client" ? (
            result.data.clients.map((obj, i) => (
              <Table.Row key={i}>
                <Table.Cell
                  style={{ padding: "0px 10px", verticalAlign: "middle" }}
                >
                  {obj.id}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "0px 10px", verticalAlign: "middle" }}
                >
                  {obj.razonSocial}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "0px 10px", verticalAlign: "middle" }}
                >
                  {obj.cuit}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "0px 10px", verticalAlign: "middle" }}
                >
                  <Button
                    variant="link"
                    style={{ padding: "0", textDecoration: "none" }}
                    onClick={() => {
                      viewAcount(obj.currentAcount.acountNumber);
                    }}
                  >
                    {obj.currentAcount.acountNumber}
                  </Button>
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "0px 10px", verticalAlign: "middle" }}
                >
                  {obj.currentAcount.acountNumber != ""
                    ? `$ ${obj.currentAcount.resume}`
                    : ""}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "0px 10px", verticalAlign: "middle" }}
                >
                  {obj.currentAcount.acountNumber != "" ? (
                    <div>
                      {obj.user.status ? (
                        <Label color="green" horizontal>
                          Activo
                        </Label>
                      ) : (
                        <Label color="red" horizontal>
                          Inactivo
                        </Label>
                      )}
                    </div>
                  ) : null}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "6px 10px", verticalAlign: "middle" }}
                >
                  {obj.currentAcount.acountNumber != "" ? (
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
                  ) : (
                    <div style={{ height: "21px" }}></div>
                  )}
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <></>
          )}
          {type == "supplier" ? (
            result.data.suppliers.map((obj, i) => (
              <Table.Row key={i}>
                <Table.Cell
                  style={{ padding: "6px 10px", verticalAlign: "middle" }}
                >
                  {obj.id}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "6px 10px", verticalAlign: "middle" }}
                >
                  {obj.razonSocial}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "6px 10px", verticalAlign: "middle" }}
                >
                  {obj.cuit}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "6px 10px", verticalAlign: "middle" }}
                >
                  <Button
                    variant="link"
                    style={{ padding: "0", textDecoration: "none" }}
                    onClick={() => {
                      viewAcount(obj.currentAcount.acountNumber);
                    }}
                  >
                    {obj.currentAcount.acountNumber}
                  </Button>
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "6px 10px", verticalAlign: "middle" }}
                >
                  {obj.id !== "" ? <>{`$ ${obj.currentAcount.resume}`}</> : ""}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "6px 10px", verticalAlign: "middle" }}
                >
                  {obj.id !== "" ? (
                    <>
                      {obj.status ? (
                        <Label color="green" horizontal>
                          Activo
                        </Label>
                      ) : (
                        <Label color="red" horizontal>
                          Inactivo
                        </Label>
                      )}
                    </>
                  ) : null}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "6px 10px", verticalAlign: "middle" }}
                >
                  {obj.id !== "" ? (
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
                  ) : (
                    <div style={{ height: "21px" }}></div>
                  )}
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <></>
          )}
          {type == "repSupplier" ? (
            result.data.suppliers.map((obj) =>
              obj.representative.map((rep, i) => (
                <Table.Row key={i}>
                  <Table.Cell>
                    {`${rep.name} ${rep.apellido}`.slice(0, 20)}
                  </Table.Cell>
                  <Table.Cell>{obj.razonSocial}</Table.Cell>
                  <Table.Cell>{rep.email}</Table.Cell>
                  <Table.Cell>{rep.telefono}</Table.Cell>
                  <Table.Cell>
                    {rep.status ? (
                      <Label color="green" horizontal>
                        Activo
                      </Label>
                    ) : (
                      <Label color="red" horizontal>
                        Inactivo
                      </Label>
                    )}
                  </Table.Cell>
                  <Table.Cell>
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
                  </Table.Cell>
                </Table.Row>
              ))
            )
          ) : (
            <></>
          )}
          {type == "acount" ? (
            result.data.movements.map((obj, i) => (
              <Table.Row key={i}>
                <Table.Cell
                  style={{ padding: "6px 10px", verticalAlign: "middle" }}
                >
                  {obj.fecha}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "6px 10px", verticalAlign: "middle" }}
                >
                  {data.client
                    ? data.client.razonSOcial
                    : data.supplier.razonSocial}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "6px 10px", verticalAlign: "middle" }}
                >
                  {obj.type}
                </Table.Cell>
                <Table.Cell
                  style={{ padding: "6px 10px", verticalAlign: "middle" }}
                >{`$ ${obj.amount}`}</Table.Cell>
                <Table.Cell
                  style={{ padding: "6px 10px", verticalAlign: "middle" }}
                >
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
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <></>
          )}
        </Table.Body>
      </Table>
      <div className={styles.pagContainer}>
        <span
          className={styles.resultSpan}
        >{`Se encontraron ${result.data.totalRows} registros relacionados a la búsqueda.`}</span>
        <CustomPagination pages={result.data.totalPages} />
      </div>
    </div>
  );
}

export default RoleTableComponent;
