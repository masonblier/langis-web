import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useQueryParam, NumberParam, StringParam } from 'use-query-params';

import { RootState } from 'app/rootReducer'
import { queryWordEntries } from '../slices/wordEntriesSlice'
import { SearchForm } from '../features/searchUi/SearchForm'
import { SearchResultsList } from '../features/searchUi/SearchResultsList'
import { SearchPagination, OnPageChangeCallback } from '../features/searchUi/SearchPagination'

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
    wordEntriesById,
    pageCount
  } = useSelector((state: RootState) => state.wordEntries)

  const wordEntries = currentPageIds.map(
    wordEntryId => wordEntriesById[wordEntryId]
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
      <div>
        <div>Something went wrong...</div>
        <div>{resultError.toString()}</div>
      </div>
    )
  }

  // render list
  const currentPage = Math.min(pageCount, Math.max(queryP || 1, 1)) - 1

  let renderedList = isLoading ? (
    <div>Loading...</div>
  ) : (
    <SearchResultsList entries={wordEntries} />
  )

  // render
  return <div className="search-page">
    <SearchForm
      searchQuery={queryQ || ''}
      setSearchQuery={setQueryQ}
    />
    {renderedList}
    <SearchPagination
      currentPage={currentPage}
      pageCount={pageCount}
      onPageChange={onPageChanged}
    />
  </div>
}