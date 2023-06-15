import { configureStore } from '@reduxjs/toolkit'

import messagesReducer from '../features/messages/messages'
import conversationReducer from '../features/messages/conversation'

export const store = configureStore({
  reducer: {
    
    messages:messagesReducer,
    conversation:conversationReducer,
  },
})