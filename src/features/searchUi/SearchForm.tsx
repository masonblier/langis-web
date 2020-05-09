import React, { useState, ChangeEvent } from 'react'
import styled from 'styled-components';

interface Props {
  searchQuery: string
  setSearchQuery: (searchQuery: string) => void
}

type InputEvent = ChangeEvent<HTMLInputElement>
type ChangeHandler = (e: InputEvent) => void
const ENTER_KEY = 13;

const SearchInput = styled.input`
  flex-grow: 1;
  border: 1px solid ${p => p.theme.borderColor};
  border-radius: 3px;
  padding: 2px 4px;
  font-size: 1.2em;
  margin: 0 0.2em;

  &:focus {
    outline: none;
    border: 1px solid ${p => p.theme.activeBorderColor};
  }
`;

const SearchButton = styled.button`
  border-radius: 3px;
  border: 1px solid ${p => p.theme.borderColor};
  background: ${p => p.theme.backgroundColor};
  font-weight: 400;
  font-size: 0.8em;
  outline: none;

  &:hover {
    background: ${p => p.theme.activeBackgroundColor};
    border: 1px solid ${p => p.theme.activeBorderColor};
    cursor: pointer;
  }
  &:focus {
    border: 1px solid ${p => p.theme.activeBorderColor};
  }
`;

const SearchFormContainer = styled.div`
  font-weight: 300;
  display: flex;
`;

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
    <SearchFormContainer>
      <SearchInput name="searchQuery"
        value={searchQueryVal}
        onChange={(e) => setSearchQueryVal(e.target.value)}
        onKeyUp={handleSearchQueryKeyUp}
      />
      <SearchButton onClick={(e) => setSearchQuery(searchQueryVal)}>
        Search
      </SearchButton>
    </SearchFormContainer>
  );
}
