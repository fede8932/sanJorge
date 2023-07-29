import React, { useState } from "react";
import styles from "./customTable.module.css";
import { Table } from "semantic-ui-react";
import IconButton from "../../commonds/iconButton/IconButon";

const CustomTable = (props) => {
  let { colum, products, color, fnInfo, fnAdd } = props;
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
                        fn={() => {
                          console.log("click");
                        }}
                      />
                      <IconButton
                        icon="fa-solid fa-arrow-right-to-bracket"
                        iconInitialStyle="iconStyleBlue"
                        fn={fnAdd(p.id, bp.brand.id)}
                      />
                    </div>
                  </Table.Cell>
                </Table.Row>
              ))
            )
          : null}
      </Table.Body>
    </Table>
  );
};

export default CustomTable;
