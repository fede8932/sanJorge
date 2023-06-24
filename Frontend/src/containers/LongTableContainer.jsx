import React from "react";
import LongTableComponent from "../components/longTable/LongTableComponent";

function LongTableContainer(props) {
  const content = [
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
    {
      article: "product01",
      listPrice: 2000,
      salePercentage: 0.2,
      brand: "skf",
      stock: 45,
    },
  ];
  return <LongTableComponent {...props} data={content} />;
}

export default LongTableContainer;
