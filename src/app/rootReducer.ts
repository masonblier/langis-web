import { combineReducers } from '@reduxjs/toolkit'

// import wordEntriesReducer from 'features/wordEntries/wordEntriesSlice'
import searchUiReducer from 'features/searchUi/searchUiSlice'

// combines all feature reducers for use with app store
const rootReducer = combineReducers({
  // wordEntries: wordEntriesReducer,
  searchUi: searchUiReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer