import Message from "./Message"
import Response from "./Response"
import MessageBox from "./MessageBox"
import axios from 'axios'
import { useStore } from "../app/store"
import { useState } from "react"
import {AnimatePresence} from "framer-motion"




export default function ChatArea(state) {

  const [newMessage,setNewMessage] = useState('')
  const [errorMsg,setErrotMsg] = useState("Type here")

  const messages = useStore(store=>store.messages)
  // const revMessages = [...messages].reverse()
  
  const addMessage = useStore(store=>store.addMessage)
  

  
  
  const handleChange = (e) =>{ 
    setNewMessage(e.target.value)
    
}

  const handleClick = () => {
    if (newMessage === ''){
      setErrotMsg('Please Enter a Message')
    }else{
    addMessage('client',newMessage,state)
    submitMessage()
    setNewMessage('')
    setErrotMsg('Type Here')
    }
    
  }

  const onKeyDown = (e) => {
    if ((e).key === 'Enter'){
    if (newMessage === ''){
      setErrotMsg('Please Enter a Message')
    }else{
    addMessage('client',newMessage,state)
    submitMessage()
    setNewMessage('')
    setErrotMsg('Type Here')
    console.log(messages)
    }
    }
  }

  const submitMessage = () => {
  // const message = messages[messages.length-1].message
  const message = newMessage
  
axios
    .post('https://gpt-server-c3mk.onrender.com', {
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
    
    <section className="container min-h-screen items-center flex flex-col   p-4 ">
     
      <div className="h-screen container overflow-auto px-2 py-3 lg:w-5/6 flex flex-col-reverse bg-neutral ">
        <AnimatePresence initial={false} >
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
}).reverse()}
</AnimatePresence>
        </div>
         <MessageBox 
          handleClick={handleClick}
          handleChange={handleChange}
          handleKeyDown={onKeyDown}
          errorPlaceholder={errorMsg}
          newMessage={newMessage}
         />

         
    </section>
  )
}
