import React from 'react'

import { WordEntry } from '../../slices/wordEntriesSlice'

import './SearchResultsList.css'

interface Props {
  entries: WordEntry[]
}

export const SearchResultsList = ({ entries }: Props) => {
  const renderedEntries = entries.map(wordEntry => (
    <div key={wordEntry.id}>
      <p className="search-results-list-orth">{wordEntry.orth}</p>
      <p>{wordEntry.quote} ({wordEntry.sense})</p>
    </div>
  ))

  return <div className="search-results-list">{renderedEntries}</div>
}