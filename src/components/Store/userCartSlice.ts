import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// interface IContent {
//   id: number,
//   thumbnail: {
//     path: string,
//     extension: string
//   },
//   name: string,
//   nContent: number,
//   price: number
// }

interface ICard {
  id: number,
  src: string,
  name: string,
  price: number,
  nContent: number
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addHQ: (state: ICard[], action: PayloadAction <ICard>) => {
      if (state.length === 0) {
        state = [action.payload]
        return state
      } else {
        const content = state.find(item => item.id === action.payload.id)

        if (content) {
          const index = state.indexOf(content)
          state[index].nContent += 1
          return state
        }

        state = [...state, action.payload]
        return state
      }
    },

    removeHQ (state: ICard[], action: PayloadAction<number>) {
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

    cleanCart: (state: ICard[]) => {
      state = []
      return state
    }
  }
})

export const { addHQ, removeHQ, cleanCart } = cartSlice.actions

export default cartSlice.reducer
