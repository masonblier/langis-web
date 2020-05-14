import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { useQueryParam, NumberParam, StringParam } from 'use-query-params';

import { RootState } from 'app/rootReducer'
import { queryWordEntries } from '../slices/wordEntriesSlice'
import { AppWrapper } from '../features/header/AppWrapper'
import { SearchForm } from '../features/searchUi/SearchForm'
import { SearchResultsList } from '../features/searchUi/SearchResultsList'
import { SearchPagination, OnPageChangeCallback } from '../features/searchUi/SearchPagination'

const SearchPageContent = styled.div`
  margin: 1em 0.5em;
`;

export const SearchPage: React.FC = () => {
  const dispatch = useDispatch()

  // query params
  const [queryQ, setQueryQ] = useQueryParam('q', StringParam);
  const [queryP, setQueryP] = useQueryParam('p', NumberParam);

  // state
  const {
    currentPageIds,
    isLoading,
    error: resultError,
    recordsByWordEntryId,
    pageCount
  } = useSelector((state: RootState) => state.wordEntries)

  const records = currentPageIds.map(
    wordEntryId => recordsByWordEntryId[wordEntryId]
  )

  // fetch on query param change
  useEffect(() => {
    if (queryQ) {
      dispatch(queryWordEntries(queryQ, queryP || undefined))
    }
  }, [queryQ, queryP, dispatch])

  // handle page change
  const onPageChanged: OnPageChangeCallback = selectedItem => {
    const newPage = selectedItem.selected + 1
    setQueryP(newPage)
  }

  // render error
  if (resultError) {
    return (
      <div className='search-page-status'>
        <div>Something went wrong...</div>
        <div>{resultError.toString()}</div>
      </div>
    )
  }

  // render list
  const adjustedPageCount = Math.max(pageCount, 1);
  const currentPage = Math.min(adjustedPageCount, Math.max(queryP || 1, 1)) - 1

  let renderedList = isLoading ? (
    <div className='search-page-status'>Loading...</div>
  ) : (
    <SearchResultsList records={records} />
  )

  // render
  return <AppWrapper>
    <SearchForm
      searchQuery={queryQ || ''}
      setSearchQuery={setQueryQ}
    />
    <SearchPageContent>
      {renderedList}
    </SearchPageContent>
    <SearchPagination
      currentPage={currentPage}
      pageCount={adjustedPageCount}
      onPageChange={onPageChanged}
    />
  </AppWrapper>
}
