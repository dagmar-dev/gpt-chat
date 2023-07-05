import Message from "./Message"
import Response from "./Response"
import MessageBox from "./MessageBox"
import axios from 'axios'
import { create } from 'zustand'




const useStore = create((set) => ({
  messages:[],
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}))

const submitMessage = () => {
  
  console.log()
axios
    .post('http://localhost:3000', {
        message:'water'
    })
    
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error)
    })
}

const handleChange = (e) =>{ 
    const message = e.target.value
    
}
  

const handleClick = () => {
  console.log()
    submitMessage()
  }

export default function ChatArea() {


  const messages = [
    {
      usr:'client',
      message:'hi'

    }
  ]
  
  return (
    
    <section className="container h-full items-center  w-full h-full flex flex-col   p-4 ">
     
      <div className="messages-container px-2 h-full flex w-5/6 flex-col  place-content-end bg-neutral ">
      {messages.map((messages,index) => {
       
       if (messages.usr === 'client') {
        return <Message
        key={index}
        message={messages.message}
        />
       }else {return <Response
        key={index}
        message={messages.message}
        />}   
})}
        </div>
         <MessageBox 
          handleClick={handleClick}
          handleChange={handleChange}
         />
    </section>
  )
}
