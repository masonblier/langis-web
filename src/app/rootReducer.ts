import { combineReducers } from '@reduxjs/toolkit'

import { wordEntriesReducer } from '../slices/wordEntriesSlice'

// combines all feature reducers for use with app store
const rootReducer = combineReducers({
  wordEntries: wordEntriesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer