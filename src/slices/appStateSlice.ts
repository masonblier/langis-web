import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  showMenu: boolean
}

const initialState: AppState = {
  showMenu: false
}

const slice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    toggleMenu(state: AppState) {
      state.showMenu = !state.showMenu
    },
  }
})

export const {
  toggleMenu
} = slice.actions

export const appStateReducer = slice.reducer
