import { createSlice } from '@reduxjs/toolkit'

 const initialState = [{
   usr:'client',
   message:'hi'
 },
 {
   usr:'client',
   message:'nothing'
 },
 
]

export const conversationSlice = createSlice({
  name: 'Counversation',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = conversationSlice.actions

export default conversationSlice.reducer