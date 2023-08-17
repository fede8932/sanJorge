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
            {colum.map((obj, i) => (
              <th id={styles.title} key={i} scope="col" style={colum.ancho}>
                {obj.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {type == "product"
            ? data.map((obj) =>
                obj.brandProducts.map((brand, i) => {
                  console.log(obj);
                  return (
                    <tr key={i}>
                      <td>{obj.article}</td>
                      <td>{`${obj.description.substr(0, 19)}...`}</td>
                      <td>{brand.brand.name}</td>
                      <td>{`$ ${obj.brandProducts[i].price.price}`}</td>
                      <td>{`$ ${
                        obj.brandProducts[i].price.price *
                        (1 + obj.brandProducts[i].price.sellPercentage)
                      }`}</td>
                      <td>
                        {1.21 *
                          obj.brandProducts[i].price.price *
                          (1 + obj.brandProducts[i].price.sellPercentage)}
                      </td>
                      <td>{brand.stock.stock}</td>
                      <td>
                        <div
                          style={{
                            display: "flex",
                            width: "130px",
                          }}
                        >
                          <ActionModalContainer
                            type="info"
                            icon="fa-solid fa-circle-info"
                          />
                          <div
                            style={{
                              margin: "1px 0px 0px 8px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <ActionModalContainer
                              type="add"
                              size="lg"
                              title="Ordenes abiertas"
                              icon="fa-solid fa-arrow-right-from-bracket"
                              iconColor="iconStyleGreen"
                            />
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )
            : data.map((obj, i) =>
                obj.brandSuppliers.map((bs) => (
                  <tr key={i}>
                    <td>{obj.code}</td>
                    <td>{obj.name}</td>
                    <td>{bs.supplier.razonSocial}</td>
                    <td>
                      <div
                        style={{
                          display: "flex",
                        }}
                      >
                        <ActionModalContainer
                          type="info"
                          icon="fa-solid fa-circle-info"
                        />
                      </div>
                    </td>
                  </tr>
                ))
              )}
        </tbody>
      </table>
    </div>
  );
}

export default LongTableComponent;
