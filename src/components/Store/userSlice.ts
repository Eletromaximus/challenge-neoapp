import { createSlice } from '@reduxjs/toolkit'

export const optionsSlice = createSlice({
  name: 'options',
  initialState: 'comics',
  reducers: {
    comicsOption (state) {
      state = 'comics'
      return state
    },
    charactersOption (state) {
      state = 'characters'
      return state
    }
  }
})

export const { comicsOption, charactersOption } = optionsSlice.actions

export default optionsSlice.reducer
