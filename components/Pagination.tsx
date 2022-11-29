import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 4rem;

  @media screen and (min-width: 600px) {
    justify-content: center;
    gap: 3rem;
  }

  button.active {
    font-weight: 700;
    font-size: 30px;
  }

  button {
    border: none;
    background-color: transparent;
    font-size: 2rem;
    color: ${(props) => props.theme.palette.accent};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

interface props {
  setPageNum: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  currentPage: number;
}

const Pagination = ({ setPageNum, totalPages, currentPage }: props) => {
  let totalPageArray = [];

  for (let i = 1; i <= totalPages; i++) {
    totalPageArray.push(i);
  }

  function paginateNext() {
    if (currentPage < totalPages) {
      return (
        <button
          onClick={() => setPageNum(++currentPage)}
          className="paginate__next"
        >
          Next
        </button>
      );
    }
  }

  function paginatePrevious() {
    if (currentPage > 1) {
      return (
        <button
          onClick={() => setPageNum(--currentPage)}
          className="paginate__prev"
        >
          Prev
        </button>
      );
    }
  }
  return (
    <PaginationContainer>
      {paginatePrevious()}
      {totalPageArray.map((page: number, index: number) => (
        <button
          onClick={() => setPageNum(index + 1)}
          className={`paginate__nums ${
            index + 1 === currentPage ? "active" : ""
          }`}
          key={index}
        >
          {page}
        </button>
      ))}
      {paginateNext()}
    </PaginationContainer>
  );
};

export default Pagination;
