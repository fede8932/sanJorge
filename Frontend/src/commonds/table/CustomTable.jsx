import React from "react";
import styles from "./customTable.module.css";
import { Table } from "semantic-ui-react";
import IconButton from "../../commonds/iconButton/IconButon";
import TableInput from "../tableInput/TableInput";

const CustomTable = (props) => {
  let {
    colum,
    products,
    color,
    fnInfo,
    fnAdd,
    fnDelete,
    fnUpdate,
    fnPrUpdate,
    type,
    objective,
  } = props;
  return (
    <Table color={color} key={color}>
      <Table.Header>
        <Table.Row>
          {colum.map((dataColumn, i) => (
            <Table.HeaderCell key={i} style={{ width: dataColumn.width }}>
              {dataColumn.title}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      {type === "search" ? (
        <Table.Body>
          {products.length > 0
            ? products.map((p, i) =>
                p.brandProducts.map((bp, i) => (
                  <Table.Row
                    key={i}
                    style={{ height: "40px", maxHeight: "40px" }}
                  >
                    <Table.Cell>{p.article}</Table.Cell>
                    <Table.Cell>{bp.brand.name}</Table.Cell>
                    <Table.Cell>{bp.price.price}</Table.Cell>
                    <Table.Cell>{bp.stock.stock}</Table.Cell>
                    <Table.Cell>
                      <div className={styles.butContainer}>
                        <IconButton
                          icon="fa-regular fa-circle-question"
                          iconInitialStyle="iconStyleGrey"
                          fn={fnInfo}
                          product={{ product: p, brand: bp.brand }}
                        />
                        <IconButton
                          icon="fa-solid fa-arrow-right-to-bracket"
                          iconInitialStyle="iconStyleBlue"
                          fn={fnAdd}
                          product={{ product: p, brand: bp.brand }}
                        />
                      </div>
                    </Table.Cell>
                  </Table.Row>
                ))
              )
            : null}
        </Table.Body>
      ) : null}
      {type === "list" ? (
        <Table.Body>
          {products.map((p, i) => {
            const precio = p.brand.brandProducts.filter((bp) => {
              if (bp.productId === p.productId) return bp;
            })[0].price;
            return (
              <Table.Row key={i} style={{ height: "40px", maxHeight: "40px" }}>
                <Table.Cell>{p.product.article}</Table.Cell>
                <Table.Cell>{p.brand.name}</Table.Cell>
                <Table.Cell>
                  <span style={{display: "flex", alignItems: "center"}}>
                    $
                    {precio.price}
                  </span>
                </Table.Cell>
                <Table.Cell>
                  <TableInput
                    key={i}
                    type="number"
                    step="1"
                    defValue={p.amount}
                    fn={fnUpdate}
                    dataItem={{ id: p.id }}
                  />
                </Table.Cell>
                <Table.Cell>{`$ ${p.amount * precio.price}`}</Table.Cell>
                <Table.Cell>
                  <div className={styles.butContainer}>
                    <IconButton
                      key={i}
                      type="delete"
                      icon="fa-regular fa-trash-can"
                      iconInitialStyle={"iconStyleRed"}
                      fn={fnDelete}
                      product={{ product: p, brand: p.brand }}
                    />
                  </div>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      ) : null}
    </Table>
  );
};

export default CustomTable;
