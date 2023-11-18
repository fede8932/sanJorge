import React from "react";
import { Table } from "semantic-ui-react";

const OrderDetailTable = (props) => {
  const { columns, style, color, data } = props;
  const items = data.orderAjust
    ? data.orderAjust.ajustOrderItems
    : data.purchaseOrderItems;
  return (
    <div style={style}>
      <Table color={color}>
        <Table.Header>
          <Table.Row>
            {columns.map((column) => (
              <Table.HeaderCell>{column.title}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row>
              <Table.Cell>{item.product.article}</Table.Cell>
              <Table.Cell>{item.product.description}</Table.Cell>
              <Table.Cell>{item.brand.name}</Table.Cell>
              <Table.Cell>{item.buyPrice *1.21}</Table.Cell>
              <Table.Cell>{item.amount}</Table.Cell>
              <Table.Cell>{item.buyPrice*item.amount*1.21}</Table.Cell>
            </Table.Row>
          ))}
          {/* <Table.Row>
            <Table.Cell>Apples</Table.Cell>
            <Table.Cell>200</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Orange</Table.Cell>
            <Table.Cell>310</Table.Cell>
            <Table.Cell>0g</Table.Cell>
          </Table.Row> */}
        </Table.Body>
      </Table>
    </div>
  );
};
export default OrderDetailTable;
