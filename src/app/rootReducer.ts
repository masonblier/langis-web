import { combineReducers } from '@reduxjs/toolkit'

import { appStateReducer } from '../slices/appStateSlice'
import { wordEntriesReducer } from '../slices/wordEntriesSlice'

// combines all feature reducers for use with app store
const rootReducer = combineReducers({
  appState: appStateReducer,
  wordEntries: wordEntriesReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
