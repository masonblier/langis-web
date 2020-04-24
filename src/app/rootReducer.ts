import { combineReducers } from '@reduxjs/toolkit'

// combines all feature reducers for use with app store
const rootReducer = combineReducers({})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer