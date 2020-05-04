import React from 'react'

import { WordEntriesQueryRecord } from '../../slices/wordEntriesSlice'

import './SearchResultsList.css'

interface Props {
  records: WordEntriesQueryRecord[]
}

export const SearchResultsList = ({ records }: Props) => {
  const renderedEntries = records.map(record => (
    <div key={record.word_entry.id} className='search-results-item'>
      <div className="search-results-list-orth">{record.word_entry.orth}</div>
      {record.word_entry_readings ? record.word_entry_readings.map((reading) =>
        <div key={reading.id} className="search-results-list-reading">{reading.reading}</div>
      ) : null}
      <div>{record.word_entry.quote} ({record.word_entry.sense})</div>
    </div>
  ))

  return <div className="search-results-list">{renderedEntries}</div>
}