import React from "react";
import { Pagination } from "semantic-ui-react";

const CustomPagination = (props) => {
  const { pages } = props
  return (
    <Pagination
      defaultActivePage={1}
      firstItem={null}
      lastItem={null}
      pointing
      secondary
      totalPages={pages}
    />
  );
};

export default CustomPagination;
