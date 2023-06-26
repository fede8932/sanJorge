import React from "react";
import LongTableComponent from "../components/longTable/LongTableComponent";

function LongTableContainer(props) {
  const { content } = props
  return <LongTableComponent {...props} data={content} />;
}

export default LongTableContainer;
