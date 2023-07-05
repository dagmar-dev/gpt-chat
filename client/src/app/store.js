import { create } from "zustand"

const store = (set)=>({
messages:[
  {
    role:'assistant',
      message:'Hi welcome to our bartending service'
  },
  
],
addMessage:(role,message,state) => set((store)=>({messages:[...store.messages, {role,message,state}]}))
})
 
export const useStore = create(store)
