import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

import { AppThunk } from 'app/store'

export interface WordEntry {
  id: number
  orth: string
  orth_lang: string
  quote: string
  quote_lang: string
  sense: number
  source_id: number
}

export interface WordEntryNote {
  id: number
  word_entry_id: number
  note: string
}
export interface WordEntryReading {
  id: number
  word_entry_id: number
  reading: string
}
export interface WordEntryTag {
  id: number
  word_entry_id: number
  tag: string
}

export interface WordEntriesQueryRecord {
  word_entry: WordEntry
  word_entry_notes: WordEntryNote[]
  word_entry_readings: WordEntryReading[]
  word_entry_tags: WordEntryTag[]
}
interface WordEntriesQueryResult {
  page: WordEntriesQueryRecord[]
  page_count: number
}

interface WordEntriesState {
  recordsByWordEntryId: Record<number, WordEntriesQueryRecord>
  currentPageIds: number[]
  pageCount: number
  isLoading: boolean
  error: string | null
}

const initialState: WordEntriesState = {
  recordsByWordEntryId: {},
  currentPageIds: [],
  pageCount: 0,
  isLoading: false,
  error: null
}

const slice = createSlice({
  name: 'wordEntries',
  initialState,
  reducers: {
    queryWordEntriesStart(state: WordEntriesState) {
      state.isLoading = true
    },
    queryWordEntriesSuccess(state, { payload }: PayloadAction<WordEntriesQueryResult>) {
      const { page, page_count } = payload
      state.pageCount = page_count
      state.isLoading = false
      state.error = null

      page.forEach(record => {
        state.recordsByWordEntryId[record.word_entry.id] = record
      })

      state.currentPageIds = page.map(page => page.word_entry.id)
    },
    queryWordEntriesFailure(state: WordEntriesState, action: PayloadAction<string>) {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

export const {
  queryWordEntriesStart,
  queryWordEntriesSuccess,
  queryWordEntriesFailure,
} = slice.actions

export const wordEntriesReducer = slice.reducer

export const queryWordEntries = (
  query: string,
  page?: number
): AppThunk => async dispatch => {
  try {
    dispatch(queryWordEntriesStart())
    const result = await queryWordEntriesFetch(query, page)
    dispatch(queryWordEntriesSuccess(result))
  } catch (err) {
    console.log(err)
    dispatch(queryWordEntriesFailure(err.toString()))
  }
}

async function queryWordEntriesFetch(
  query: string,
  page = 1
): Promise<WordEntriesQueryResult> {
  const url = `https://langis.dev/api/word_entries?query=${query}&page=${page}`
  try {
    return (await axios.get<WordEntriesQueryResult>(url)).data
  } catch (err) {
    throw err
  }
}