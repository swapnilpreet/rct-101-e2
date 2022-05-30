import { Button, ButtonGroup, Select } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

const Pagination = ({ page, setPage, limit }) => {
   
  const [totalCount, setTotalCount] = useState(0);
  return (
    <ButtonGroup>
      <Button
        disabled={page == 1}
        data-cy="pagination-first-button"
        onClick={() => setPage(page - 2)}
      >
        First
      </Button>
      <Button
        disabled={page == limit}
        data-cy="pagination-previous-button"
        onClick={() => setPage(page - 1)}
      >
        Previous
      </Button>
      <Select data-cy="pagination-limit-select">
        <option data-cy="pagination-limit-3" value={3}>3</option>
        <option data-cy="pagination-limit-6"value={6}>6</option>
        <option data-cy="pagination-limit-9"value={9}>9</option>
      </Select>
      <Button
        data-cy="pagination-next-button"
         
        onClick={() => setPage(page + 1)}
      >
        Next
      </Button>
      <Button
        data-cy="pagination-last-button"
        onClick={() => setPage(page + 2)}
      >
        Last
      </Button>
    </ButtonGroup>
  );
};

export default Pagination;
