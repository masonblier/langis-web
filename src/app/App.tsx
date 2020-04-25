import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from './rootReducer'

import { SearchForm } from 'features/searchUi/SearchForm'
// import { SearchResultsPage } from 'features/searchUi/SearchResultsPage'

import {
  setCurrentSearch,
  setCurrentPage
} from 'features/searchUi/searchUiSlice'

import './App.css'

const App: React.FC = () => {
  const dispatch = useDispatch()

  // select current state for page
  const { page, searchQuery } = useSelector(
    (state: RootState) => state.searchUi
  )

  // page actions
  const setSearchQuery = (searchQuery: string) => {
    dispatch(setCurrentSearch({ searchQuery }))
  }

  const setJumpToPage = (page: number) => {
    dispatch(setCurrentPage(page))
  }

  // TODO content

  return <div className="App">
    <SearchForm
      searchQuery={searchQuery || ''}
      setSearchQuery={setSearchQuery}
    />
  </div>
}

export default App