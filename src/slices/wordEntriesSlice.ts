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

interface WordEntriesQueryResult {
  word_entries: WordEntry[]
  page_count: number
}

interface WordEntriesState {
  wordEntriesById: Record<number, WordEntry>
  currentPageIds: number[]
  pageCount: number
  isLoading: boolean
  error: string | null
}

const initialState: WordEntriesState = {
  wordEntriesById: {},
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
      const { word_entries, page_count } = payload
      state.pageCount = page_count
      state.isLoading = false
      state.error = null

      word_entries.forEach(wordEntry => {
        state.wordEntriesById[wordEntry.id] = wordEntry
      })

      state.currentPageIds = word_entries.map(wordEntry => wordEntry.id)
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