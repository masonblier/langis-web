import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AppState {
  showingMenu: boolean
  showingModal: string | null
}

const initialState: AppState = {
  showingMenu: false,
  showingModal: null,
}

const slice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    toggleMenu(state: AppState) {
      state.showingMenu = !state.showingMenu
    },
    showModal(state: AppState, action: PayloadAction<string|null>) {
      state.showingModal = action.payload
    },
  }
})

export const {
  toggleMenu,
  showModal
} = slice.actions

export const appStateReducer = slice.reducer
