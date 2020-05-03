import React from 'react'

import { WordEntriesQueryRecord } from '../../slices/wordEntriesSlice'

import './SearchResultsList.css'

interface Props {
  records: WordEntriesQueryRecord[]
}

export const SearchResultsList = ({ records }: Props) => {
  const renderedEntries = records.map(record => (
    <div key={record.word_entry.id}>
      <p className="search-results-list-orth">{record.word_entry.orth}</p>
      {record.word_entry_readings ? record.word_entry_readings.map((reading) =>
        <p key={reading.id} className="search-results-list-reading">{reading.reading}</p>
      ) : null}
      <p>{record.word_entry.quote} ({record.word_entry.sense})</p>
    </div>
  ))

  return <div className="search-results-list">{renderedEntries}</div>
}