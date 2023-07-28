import React from 'react'
import { Pagination } from 'semantic-ui-react'

const CustomPagination = () => (
  <Pagination
    defaultActivePage={1}
    firstItem={null}
    lastItem={null}
    pointing
    secondary
    totalPages={3}
  />
)

export default CustomPagination