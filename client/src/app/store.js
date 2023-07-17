import { create } from "zustand"

const store = (set)=>({
messages:[
  {
    role:'assistant',
      message:'Welcome to our tech support service.'
  },
],

addMessage:(role,message,state) => set((store)=>({messages:[...store.messages, {role,message,state}]}))
})
 
export const useStore = create(store)
