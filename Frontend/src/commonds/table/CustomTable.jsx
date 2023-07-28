import React from "react";
import styles from "./customTable.module.css";
import { Table } from "semantic-ui-react";

const CustomTable = (props) => {
  let { colum, rows, color } = props;
  const emptyRows = new Array(8 - rows.length).fill("");
  rows = [...rows, ...emptyRows];
  console.log("row", rows)
  //yo tendria que buscar brandProduct cuando productId = id de producto
  return (
    <Table color={color} key={color} styles={{ zIndez: 10 }}>
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
        {rows.map((row, i) => {
          if (row === "")
            return (
              <Table.Row key={i} style={{ height: "40px", maxHeight: "40px"}}>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
                <Table.Cell></Table.Cell>
              </Table.Row>
            );
          return row.brandProducts.map((bp) => (
            <Table.Row key={i} style={{ height: "40px", maxHeight: "40px"}}>
              <Table.Cell>{row.article}</Table.Cell>
              <Table.Cell>{bp.brand.name}</Table.Cell>
              <Table.Cell>sdfh</Table.Cell>
              <Table.Cell>dsfhsdh</Table.Cell>
              <Table.Cell>ACCIONES</Table.Cell>
            </Table.Row>
          ));
        })}
      </Table.Body>
    </Table>
  );
};

export default CustomTable;
