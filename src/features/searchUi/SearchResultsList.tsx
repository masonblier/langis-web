import React from 'react'
import styled from 'styled-components';

import { WordEntriesQueryRecord } from '../../slices/wordEntriesSlice'

interface Props {
  records: WordEntriesQueryRecord[]
}

const SearchResultsItem = styled.div`
  margin-top: 1em;

  &:first-child {
    margin-top: 0;
  }
`;

const SearchResultsItemOrth = styled.div`
  font-weight: bold;
`;

const SearchResultsItemReading = styled.div`
  font-size: 0.8em;
  display: inline-block;
  color: ${p => p.theme.searchUi.readingsColor};
  margin-left: 0.5rem;
  &:first-child {
    margin-left: 0;
  }
`;

export const SearchResultsList = ({ records }: Props) => {
  const renderedEntries = records.map(record => (
    <SearchResultsItem key={record.word_entry.id}>
      <SearchResultsItemOrth>{record.word_entry.orth}</SearchResultsItemOrth>
      <div>
        {record.word_entry_readings ? record.word_entry_readings.map((reading) =>
          <SearchResultsItemReading key={reading.id}>{reading.reading}</SearchResultsItemReading>
        ) : null}
      </div>
      <div>{record.word_entry.quote} ({record.word_entry.sense})</div>
    </SearchResultsItem>
  ))

  return <React.Fragment>{renderedEntries}</React.Fragment>
}
