import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// state for current search query
interface CurrentSearch {
  searchQuery: string | null
}

interface CurrentSearchPayload {
  searchQuery?: string
}

// combined states for SearchUi page
type SearchUiState = {
  page: number
} & CurrentSearch

// initial state
let initialState: SearchUiState = {
  page: 1,
  searchQuery: null
}

const searchUiSlice = createSlice({
  name: 'searchUi',
  initialState,
  reducers: {
    // updates page
    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload
    },
    // updates CurrentSearch state
    setCurrentSearch(state, action: PayloadAction<CurrentSearchPayload>) {
      const { searchQuery = null } = action.payload
      state.searchQuery = searchQuery
    }
  }
})

export const {
  setCurrentSearch,
  setCurrentPage
} = searchUiSlice.actions

export default searchUiSlice.reducer