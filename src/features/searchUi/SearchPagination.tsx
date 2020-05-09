import React from 'react'
import styled from 'styled-components';
import Paginate, { ReactPaginateProps } from 'react-paginate'

export type OnPageChangeCallback = ReactPaginateProps['onPageChange']

interface Props {
  currentPage: number
  pageCount: number
  onPageChange?: OnPageChangeCallback
}

const SearchPaginationContainer = styled.div`
  padding-top: 1rem;
  text-align: center;

  &> ul {
    padding: 0;
    margin: 0;
  }

  li {
    display: inline-block;
  }

  li > a {
    padding: 0.5rem;
    margin: 1px;
    display: inline-block;
    cursor: pointer;
    background-color: ${p => p.theme.backgroundColor};
    border-radius: 2px;
    min-width: 1rem;
    border: 1px solid ${p => p.theme.borderColor};
  }

  li > a:focus {
    outline: none;
  }

  .selected a {
    background-color: ${p => p.theme.pagination.selectedBorderColor};
    border: 1px solid ${p => p.theme.pagination.selectedBackgroundColor};
  }

  .disabled > a {
    color: ${p => p.theme.disabledColor};
    background-color: ${p => p.theme.disabledBackgroundColor};
    border-color: ${p => p.theme.disabledBorderColor};
    cursor: default;
  }

  .disabled > a:hover {
    background-color: ${p => p.theme.pagination.hoverBackgroundColor};
  }
  .break {
    margin: 0 8px;
  }

  .previous {
    margin-right: 1rem;
  }

  .next {
    margin-left: 1rem;
  }
`;

export const SearchPagination = ({
  currentPage,
  pageCount,
  onPageChange
}: Props) => {
  return (
    <SearchPaginationContainer>
      <Paginate
        forcePage={currentPage}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        nextLabel="&rarr;"
        previousLabel="&larr;"
      />
    </SearchPaginationContainer>
  )
}
