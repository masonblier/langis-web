import React, { useState, ChangeEvent } from 'react'

import './SearchForm.css'

interface Props {
  searchQuery: string
  setSearchQuery: (searchQuery: string) => void
}

type InputEvent = ChangeEvent<HTMLInputElement>
type ChangeHandler = (e: InputEvent) => void
const ENTER_KEY = 13;

export const SearchForm = ({
  searchQuery,
  setSearchQuery,
}: Props) => {
  const [searchQueryVal, setSearchQueryVal] = useState(searchQuery)

  const handleSearchQueryKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.which === ENTER_KEY) {
      setSearchQuery(searchQueryVal);
    }
  };

  return (
    <div className="search-query-form">
      <input name="searchQuery"
        value={searchQueryVal}
        onChange={(e) => setSearchQueryVal(e.target.value)}
        onKeyUp={handleSearchQueryKeyUp}
      />
      <button onClick={(e) => setSearchQuery(searchQueryVal)}>
        Search
      </button>
    </div>
  );
}