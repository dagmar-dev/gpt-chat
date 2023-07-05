import Message from "./Message"
import Response from "./Response"
import MessageBox from "./MessageBox"
import axios from 'axios'
import { useStore } from "../app/store"
import { useState } from "react"




export default function ChatArea(state) {

  const [newMessage,setNewMessage] = useState('')

  const messages = useStore(store=>store.messages)
  const addMessage = useStore(store=>store.addMessage)
  

  
  
  const handleChange = (e) =>{ 
    setNewMessage(e.target.value)
    
}

  const handleClick = () => {
    addMessage('client',newMessage,state)
    submitMessage()
  }

  const submitMessage = () => {
  // const message = messages[messages.length-1].message
  const message = newMessage
  
axios
    .post('http://localhost:3000', {
         message:message
    })
    
    .then(function (response) {
        addMessage('assistant',response.data.content,state)
        console.log(messages)
    })
    .catch(function (error) {
        console.log(error)
    })
}


  
  return (
    
    <section className="container h-full items-center  w-full h-full flex flex-col   p-4 ">
     
      <div className="messages-container px-2 h-full flex w-5/6 flex-col  place-content-end bg-neutral ">
      {messages.map((messages,index) => {
       
       if (messages.role === 'client') {
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
