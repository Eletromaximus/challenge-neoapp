import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IContent {
  id: number,
  thumbnail: {
    path: string,
    extension: string
  },
  name: string,
  nContent: number
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addHQ (state: IContent[], action: PayloadAction <IContent>) {
      if (state.length === 0) {
        state = [action.payload]
        return state
      } else {
        const content = state.find(item => item.id === action.payload.id)

        if (content) {
          const index = state.indexOf(content)
          const newCart = [...state]
          newCart[index].nContent += 1
          state = newCart
          return state
        }

        state = [...state, action.payload]
        return state
      }
    },

    removeHQ (state: IContent[], action: PayloadAction<number>) {
      if (state.length > 0) {
        const content = state.find(item => item.id === action.payload)

        if (content && content.nContent > 1) {
          const index = state.indexOf(content)
          const newCart = [...state]
          newCart[index].nContent -= 1
          state = [...newCart]
          return state
        }

        const filteredCart = state.filter(
          (item) => item.id !== action.payload
        )

        state = [...filteredCart]
        return state
      }
      return state
    },

    cleanCart: (state) => {
      state = []
      return state
    }
  }
})

export const { addHQ, removeHQ, cleanCart } = cartSlice.actions

export default cartSlice.reducer
